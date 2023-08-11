import logo from "../../assets/Logo.svg"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className="container">
                    <div>
                        <img src={logo} alt="Kenziehub Logo" />
                        <form>
                            <h1>Login</h1>
                            <Input type="text" id="email" label="Email" placeholder="Digite aqui seu email"/>
                            <Input type="password" id="password" label="Senha" placeholder="Digite aqui sua senha"/>
                            <button type="submit">Entrar</button>
                            <div>
                                <p className="headline">Ainda não possui uma conta?</p>
                                <button type="submit" onClick={() => navigate("/register")}>Cadastre-se</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}