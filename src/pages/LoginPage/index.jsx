import logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./loginFormSchema"
import { Input } from "../../components/Input"
import { InputPass } from "../../components/InputPass"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"

export const LoginPage = () => {
    
    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(loginSchema)
    })
    
    const {userLogin} = useContext(UserContext)

    const submit = async (formData) =>{
        userLogin(formData, setIsLoading, reset)
    }

    return (
        <>
            <main>
                <div className={`${styles.loginPage} container`}>
                    <div className={styles.loginBox}>
                        <img src={logo} alt="Kenziehub Logo" />
                        <form onSubmit={handleSubmit(submit)} className={styles.formBox}>
                            <h1 className="title-1">Login</h1>
                            <Input type="text" id="email" label="Email" placeholder="Digite aqui seu email" error={errors.email} {...register("email")}/>
                            <InputPass id="password" label="Senha" placeholder="Digite aqui sua senha" error={errors.password} {...register("password")}/>
                            <button className="btn-primary" type="submit" disabled={isLoading}>{isLoading ? "Carregando..." : "Entrar"}</button>
                            <div className={styles.footer}>
                                <p className="headline dark">Ainda não possui uma conta?</p>
                                <Link className="btn-primary gray" to={"/register"}>Cadastre-se</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}