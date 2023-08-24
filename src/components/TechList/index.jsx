import { MdAdd } from "react-icons/md"
import { TechCard } from "./TechCard"
import styles from "./style.module.scss"
import { CreateTechModal } from "../modals/CreateTechModal"

export const TechList = () => {
    return (
        <>
            <div className={styles.techsHeader}>
                <h2 className="title-2">Tecnologias</h2>
                <button className="btn-dark sm"><MdAdd size={24}/></button>
            </div>
            <ul className={styles.techList}>
                <TechCard/>
                <TechCard/>
                <TechCard/>
            </ul>
            <CreateTechModal/>
        </>
    )
}