import { Input } from "../../forms/Input"
import { Select } from "../../forms/Select"
import { MdClose } from "react-icons/md"
import styles from "./style.module.scss"
import { useForm } from "react-hook-form"

export const EditTechModal = () => {

    const { register, handleSubmit } = useForm({})

    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h3 className="headline bold">Tecnologia Detalhes</h3>
                    <button><MdClose size={24}/></button>
                </div>
                <div className={styles.modalContent}>
                    <form>
                        <Input label="Nome" id="tech-name" placeholder="Nome da Tecnologia" {...register("title")}/>
                        
                        <Select label="Status" id="tech-status" {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <button className="btn-primary" type="submit">Salvar Alterações</button>
                    </form>
                </div>
            </div>
        </div>
    )
}