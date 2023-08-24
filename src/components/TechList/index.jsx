import { MdAdd } from "react-icons/md"
import { TechCard } from "./TechCard"
import styles from "./style.module.scss"
import { CreateTechModal } from "../modals/CreateTechModal"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { UserContext } from "../../providers/UserContext"
import { EditTechModal } from "../modals/EditTechModal"

export const TechList = () => {

    const {userTechs} = useContext(UserContext)
    const { creatingTech, setCreatingTech, editingTech } = useContext(TechContext)

    return (
        <>
            <div className={styles.techsHeader}>
                <h2 className="title-2">Tecnologias</h2>
                <button className="btn-dark sm" onClick={() => setCreatingTech(true)} title="Adicionar tecnologia" aria-label="add-tech"><MdAdd size={24}/></button>
            </div>
            <ul className={styles.techList}>
                {userTechs.length > 0 ? userTechs.map(technology => <TechCard tech={technology} key={technology.id}/>) : <p className="headline dark">Você ainda não possui tecnologias criadas.</p>}
            </ul>
            {creatingTech? <CreateTechModal/> : null}
            {editingTech ? <EditTechModal/> : null}
        </>
    )
}