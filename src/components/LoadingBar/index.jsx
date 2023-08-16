import style from "./styles.module.scss"

export const LoadingBar = () => {
    return (
        <div className={style.loaderBox}>
            <div className={style.loader}></div>
        </div>
    )
}