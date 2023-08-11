import logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <div className="container">
            <header className={styles.header}>
                <img src={logo} alt="Kenziehub Logo" />
                <button className="btn-dark sm">Sair</button>
            </header>
        </div>
    )
}