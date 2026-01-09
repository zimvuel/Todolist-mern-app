import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import AddTodoPage from "./pages/AddTodoPage"
import App from './App'
import EditTodoPage from './pages/EditTodoPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/addtodo",
        element: <AddTodoPage />
      },
      {
        path: "/edittodo/:id",
        element: <EditTodoPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
