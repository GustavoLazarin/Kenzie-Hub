import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { PrivateRoutes } from "./PrivateRoutes"
import { DashboardPage } from "../pages/DashboardPage"

export const RoutesMain = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route element={<PrivateRoutes/>}>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                </Route>
            </Routes>
        </>
    )
}