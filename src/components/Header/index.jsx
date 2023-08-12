import { set } from "react-hook-form"
import logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { useNavigate } from "react-router-dom"

export const Header = ({setUser}) => {

    const navigate = useNavigate()

    const logOut = () => {
        setUser(null)
        localStorage.removeItem("@TOKEN")

        navigate("/")
    }
    
    return (
        <div className="container">
            <header className={styles.header}>
                <img src={logo} alt="Kenziehub Logo" />
                <button className="btn-dark sm" onClick={logOut}>Sair</button>
            </header>
        </div>
    )
}