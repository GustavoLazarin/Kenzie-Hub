import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DashboardPage } from "../pages/DashboardPage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

export const RoutesMain = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/dashboard" element={<DashboardPage/>}/>
            </Routes>
            <ToastContainer position="top-right" autoClose={3000}/>
        </>
    )
}