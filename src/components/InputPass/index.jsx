import { FaEye, FaEyeSlash } from "react-icons/fa"
import styles from "./style.module.scss"
import { useState } from "react"

export const InputPass = ({id, label, ...rest}) => {

    const [showPass, setShowPass] = useState(false)
    const [inputType, setInputType] = useState("password")

    const handleShowPass = () => {
        setShowPass(!showPass);
        showPass === false ? setInputType("text") : setInputType("password");
    }

    return (
        <div className="input-box">
            {label ? <label className="headline" htmlFor={id}>{label}</label> : null}
            <div className={styles.passwordContainer}>
                <input type={inputType} id={id} {...rest}/>
                <span className={styles.showIcon} onClick={handleShowPass}>
                    {showPass ? <FaEyeSlash/> : <FaEye/>}
                </span>
                
            </div>
        </div>
    )
}