import { MdOutlineEdit, MdDeleteOutline} from "react-icons/md"
import styles from "./style.module.scss"

export const TechCard = () => {
    return (
        <li className={styles.techCard}>
            <h2 className="title-2">TechTitle</h2>
            <div className={styles.techInfo}>
                <p className="headline dark">techStatus</p>
                <div className={styles.techEdit}>
                    <button><MdOutlineEdit size={20}/></button>
                    <button><MdDeleteOutline size={20}/></button>
                </div>
            </div>
        </li>
    )
}