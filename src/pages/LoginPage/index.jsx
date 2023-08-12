import logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { Input } from "../../components/Input"
import { InputPass } from "../../components/InputPass"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./loginFormSchema"
import { useState } from "react"
import { toast } from "react-toastify"
import { api } from "../../services/api"

export const LoginPage = ({setUser}) => {

    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(loginSchema)
    })

    const navigate = useNavigate()

    const submit = async (formData) =>{
        try {
            setIsLoading(true)

            const {data} = await api.post("/sessions", formData);

            toast.success("Login realizado com sucesso!", {
                position: "top-right",
                autoClose: 3000,
             })

             setUser(data.user);
             localStorage.setItem("@TOKEN", data.token)

             reset();
             navigate("/dashboard");
        } catch (error) {
            error.response.data.message == "Incorrect email / password combination" ? 
            toast.error("Email ou senha incorreta.", {
                  position: "top-right",
                  autoClose: 3000,
                })
                : toast.error("Ops, algo deu errado...", {
                    position: "top-right",
                    autoClose: 3000,
                })
        } finally {
            setIsLoading(false)
        }
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