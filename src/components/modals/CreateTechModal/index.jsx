import { Input } from "../../forms/Input"
import { Select } from "../../forms/Select"
import { MdClose } from "react-icons/md"
import styles from "./style.module.scss"

export const CreateTechModal = () => {
    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h3 className="headline bold">Cadastrar Tecnologia</h3>
                    <button><MdClose size={24}/></button>
                </div>
                <div className={styles.modalContent}>
                    <form>
                        <Input label="Nome" id="tech-name" placeholder="Nome da Tecnologia"/>
                        <Select label="Selecionar status" id="tech-status" defaultValue="">
                            <option value="" disabled>Selecione um status</option>
                            <option value="beginner">Iniciante</option>
                            <option value="intermediary">Intermediário</option>
                            <option value="advanced">Avançado</option>
                        </Select>
                        <button className="btn-primary">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
        </div>
    )
}