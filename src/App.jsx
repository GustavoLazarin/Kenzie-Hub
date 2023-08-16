import { RoutesMain } from "./routes/RoutesMain"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import { UserContext } from "./providers/UserContext"
import { LoadingBar } from "./components/LoadingBar"
import { useContext } from "react"

export const App = () => {

  const { loading } = useContext(UserContext)

  return (
    <div className="App">
      {loading ? <LoadingBar/> : <RoutesMain/>}
      <ToastContainer position="top-right" autoClose={3000}/>
    </div>
  )  
}

export default App
