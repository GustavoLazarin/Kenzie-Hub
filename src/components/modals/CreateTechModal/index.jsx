import { Input } from "../../forms/Input"
import { Select } from "../../forms/Select"
import { MdClose } from "react-icons/md"
import styles from "./style.module.scss"
import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"
import { useForm } from "react-hook-form"
import { createTechSchema } from "./createTechSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export const CreateTechModal = () => {

    const {setCreatingTech, createTech} = useContext(TechContext)

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(createTechSchema)
    })


    const submit = (formData) => {
        createTech(formData)
    }

    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h3 className="headline bold">Cadastrar Tecnologia</h3>
                    <button onClick={() => setCreatingTech(false)}><MdClose size={24}/></button>
                </div>
                <div className={styles.modalContent}>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input label="Nome" id="tech-name" placeholder="Nome da Tecnologia" error={errors.title} {...register("title")}/>
                        
                        <Select label="Selecionar status" id="tech-status" defaultValue="" error={errors.status} {...register("status")}>
                            <option value="" disabled>Selecione um status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <button className="btn-primary" type="submit">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
        </div>
    )
}