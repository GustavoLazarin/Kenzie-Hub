import { forwardRef } from "react"

export const Input = forwardRef(({type, id, label, error, ...rest}, ref) => {
    return (
        <div className="input-box">
            {label ? <label className="headline" htmlFor={id}>{label}</label> : null}
            <input ref={ref} type={type} id={id} {...rest}/>
            {error ? <label className="headline danger">{error.message}</label> : null }
        </div>
    )
})