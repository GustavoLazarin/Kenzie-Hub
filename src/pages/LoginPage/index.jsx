import logo from "../../assets/Logo.svg"
import { Input } from "../../components/Input"
import { InputPass } from "../../components/InputPass"
import { useNavigate } from "react-router-dom"
import styles from "./style.module.scss"

export const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className={`${styles.loginPage} container`}>
                    <div className={styles.loginBox}>
                        <img src={logo} alt="Kenziehub Logo" />
                        <form className={styles.formBox}>
                            <h1 className="title-1">Login</h1>
                            <Input type="text" id="email" label="Email" placeholder="Digite aqui seu email"/>
                            <InputPass id="password" label="Senha" placeholder="Digite aqui sua senha"/>
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