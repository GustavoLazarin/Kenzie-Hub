import { useContext } from "react"
import logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { UserContext } from "../../providers/UserContext"

export const Header = () => {
    const {logOut} = useContext(UserContext)

    return (
        <div className="container">
            <header className={styles.header}>
                <img src={logo} alt="Kenziehub Logo" />
                <button className="btn-dark sm" onClick={logOut}>Sair</button>
            </header>
        </div>
    )
}