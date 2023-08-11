export const Input = ({type, id, label, ...rest}) => {
    return (
        <div>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input type={type} id={id} {...rest}/>
        </div>
    )
}