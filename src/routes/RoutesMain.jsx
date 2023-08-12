import { Route, Router, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DashboardPage } from "../pages/DashboardPage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from "react"

export const RoutesMain = () => {

    const [user, setUser] = useState(null)

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage setUser={setUser}/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/dashboard" element={<DashboardPage setUser={setUser} user={user}/>}/>
            </Routes>
            <ToastContainer/>
        </>
    )
}