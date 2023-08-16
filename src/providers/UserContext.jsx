import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from "react-toastify"

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const getUser = async () => {
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate("/dashboard")
            } catch (error) {
                console.log(error)
                localStorage.removeItem("@TOKEN")
            }
        }

        if (token) {
            getUser()
        }
    }, [])
   
    const registerUser = async (formData, setIsLoading, reset) => {
        try {
            setIsLoading(true)
            const {data} = await api.post("/users", formData)
            toast.success("Cadastro criado com sucesso!")
            reset();
            navigate("/");
        } catch (error) {
            error.response.data.message == "Email already exists" ? toast.error("Email ja cadastrado.") : toast.error("Ops, algo deu errado...")
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    
    const userLogin = async (formData, setIsLoading, reset) => {
        try {
            setIsLoading(true)
            const {data} = await api.post("/sessions", formData)
            toast.success("Login realizado com sucesso!")
             
             localStorage.setItem("@TOKEN", data.token)
             setUser(data.user)
             reset()
             navigate("/dashboard")
        } catch (error) {
            error.response.data.message == "Incorrect email / password combination" ? toast.error("Email ou senha incorreta.") : toast.error("Ops, algo deu errado...")
        } finally {
            setIsLoading(false)
        }
    }

    const logOut = () => {
        setUser(null)
        localStorage.removeItem("@TOKEN")
        toast.warning("Usuário deslogado.")
        navigate("/")
    }

    return (
        <UserContext.Provider value={{user, registerUser, userLogin, logOut}}>
            {children}
        </UserContext.Provider>
    )
}