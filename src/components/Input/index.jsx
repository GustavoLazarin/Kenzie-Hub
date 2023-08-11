export const Input = ({type, id, label, ...rest}) => {
    return (
        <div className="input-box">
            {label ? <label className="headline" htmlFor={id}>{label}</label> : null}
            <input type={type} id={id} {...rest}/>
        </div>
    )
}