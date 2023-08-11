import logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { Input } from "../../components/Input"
import { InputPass } from "../../components/InputPass"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./loginFormSchema"

export const LoginPage = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(loginSchema)
    })

    const navigate = useNavigate()

    const submit = (formData) =>{
        console.log(formData)
        reset();
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
                            <button className="btn-primary" type="submit">Entrar</button>
                            <div className={styles.footer}>
                                <p className="headline dark">Ainda não possui uma conta?</p>
                                <button className="btn-primary gray" type="submit" onClick={() => navigate("/register")}>Cadastre-se</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}