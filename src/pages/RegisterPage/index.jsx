import { useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import { Select } from "../../components/Select"
import { Input } from "../../components/Input"

export const RegisterPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className="container">
                    <div>
                        <div>
                            <img src={logo} alt="Kenziehub Logo" />
                            <button onClick={() => navigate("/")}>Voltar</button>
                        </div>
                        <form>
                            <h1>Crie sua conta</h1>
                            <p className="headline">Rapido e grátis, vamos nessa</p>
                            <Input type="text" id="name" label="Nome" placeholder="Digite aqui seu nome"/>
                            <Input type="email" id="email" label="Email" placeholder="Digite aqui seu email"/>
                            <Input type="password" id="password" label="Senha" placeholder="Digite aqui sua senha"/>
                            <Input type="password" id="confirm-password" label="Confirmar Senha" placeholder="Digite novamente sua senha"/>
                            <Input type="text" id="bio" label="Bio" placeholder="Fale sobre você"/>
                            <Input type="text" id="contact" label="Contato" placeholder="Opção de contato"/>
                            <Select label="Selecionar módulo" id="module">
                                <option value="">Primeiro Módulo</option>
                                <option value="">Segundo Módulo</option>
                                <option value="">Terceiro Módulo</option>
                                <option value="">Quarto Módulo</option>
                            </Select>
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </main>
        </>

    )
}