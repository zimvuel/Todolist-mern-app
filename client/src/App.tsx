import HomePage from "./pages/HomePage"
import { Outlet } from "react-router"

const App = () => {
  return (
    <div className="h-screen">
      <HomePage />
      <div className="z-2">
        <Outlet/>
      </div>
    </div>
  )
}

export default App