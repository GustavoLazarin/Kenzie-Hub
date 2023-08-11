import logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { InputPass } from "../../components/InputPass"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./registerFormSchema"

export const RegisterPage = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(registerSchema)
    })
    const navigate = useNavigate();

    const submit = (formData) => {
        console.log(formData)
        reset();
    }

    return (
        <>
            <main>
                <div className={`${styles.registerPage} container`}>
                    <div className={styles.registerBox}>
                        <div className={styles.registerHeader}>
                            <img src={logo} alt="Kenziehub Logo" />
                            <button className="btn-dark sm" onClick={() => navigate("/")}>Voltar</button>
                        </div>
                        <form className={styles.formBox} onSubmit={handleSubmit(submit)}>
                            <h1>Crie sua conta</h1>
                            <p className="headline dark">Rapido e grátis, vamos nessa</p>
                            <Input type="text" id="name" label="Nome" placeholder="Digite aqui seu nome" error={errors.name} {...register("name")}/>
                            <Input type="email" id="email" label="Email" placeholder="Digite aqui seu email" error={errors.email} {...register("email")}/>
                            <InputPass id="password" label="Senha" placeholder="Digite aqui sua senha" error={errors.password} {...register("password")}/>
                            <InputPass id="confirm-password" label="Confirmar Senha" placeholder="Digite novamente sua senha" error={errors.confirmPassword} {...register("confirmPassword")}/>
                            <Input type="text" id="bio" label="Bio" placeholder="Fale sobre você" error={errors.bio} {...register("bio")}/>
                            <Input type="text" id="contact" label="Contato" placeholder="Opção de contato" error={errors.contact} {...register("contact")}/>
                            <Select label="Selecionar módulo" id="module" defaultValue="" error={errors.course_module} {...register("course_module")}>
                                <option value="" disabled>Selecione um módulo</option>
                                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                            </Select>

                            <button className="btn-primary" type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </main>
        </>

    )
}