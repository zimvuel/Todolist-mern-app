import { Outlet } from "react-router"
import { ThemeProvider } from "./context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Outlet/>
      </div>
    </ThemeProvider>
    
  )
}

export default App
