import { Outlet } from "react-router"
import { ThemeProvider } from "./context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex h-screen flex-col items-center justify-center">
        <main>
          <Outlet/>
        </main>
      </div>
    </ThemeProvider>
    
  )
}

export default App