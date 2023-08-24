import { MdOutlineEdit, MdDeleteOutline} from "react-icons/md"
import styles from "./style.module.scss"
import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"

export const TechCard = ({tech}) => {

    const { deleteTech, setEditingTech } = useContext(TechContext)

    return (
        <li className={styles.techCard}>
            <h2 className="title-2">{tech?.title}</h2>
            <div className={styles.techInfo}>
                <p className="headline dark">{tech?.status}</p>
                <div className={styles.techEdit}>
                    <button onClick={() => setEditingTech(tech)} title="Editar status" aria-label="edit-tech"><MdOutlineEdit size={20}/></button>
                    <button onClick={() => deleteTech(tech.id)} title="Excluir tecnologia" aria-label="delete-tech"><MdDeleteOutline size={20}/></button>
                </div>
            </div>
        </li>
    )
}