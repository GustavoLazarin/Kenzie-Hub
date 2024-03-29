import { createContext, useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { api } from "../services/api"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({children}) => {

    const { userTechs, setUserTechs } = useContext(UserContext)

    const [loading, setLoading] = useState(false)
    const [creatingTech, setCreatingTech] = useState(false)
    const [editingTech, setEditingTech] = useState(null)

    const createTech = async (formData) => {
        const token = localStorage.getItem("@TOKEN")
        try {
            setLoading(true)
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUserTechs([...userTechs, data])
            setCreatingTech(false)
            toast.success("Tecnologia criada com sucesso!")
        } catch (error) {
            console.log(error)
            if (error.response.data.message === "User Already have this technology created you can only update it") {
                toast.warn("Você já possui essa tecnologia.")
            }
        } finally {
            setLoading(false)
        }
    }

    const deleteTech = async (techId) => {
        setLoading(true)
        const token = localStorage.getItem("@TOKEN")
        try {
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUserTechs(userTechs.filter(tech => tech.id !== techId))
            toast.success("Tecnologia excluida com sucesso!")
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const updateTech = async (formData) => {
        setLoading(true)
        const token = localStorage.getItem("@TOKEN")
        try {
            console.log(formData)
            const { data } = await api.put(`/users/techs/${editingTech.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            const updatedTechs = userTechs.map(tech => {
                if (tech.id === data.id) {
                    return data
                } else {
                    return tech
                }
            })
            setUserTechs(updatedTechs)

            setEditingTech(null)
            toast.success("Tecnologia alterada com sucesso.")
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <TechContext.Provider value={ {creatingTech, setCreatingTech, createTech, deleteTech, updateTech, editingTech, setEditingTech, loading } }>
            {children}
        </TechContext.Provider>
    )
}