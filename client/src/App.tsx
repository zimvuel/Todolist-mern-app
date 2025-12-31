import { Outlet } from "react-router"

const App = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App