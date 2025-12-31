import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import AddTodoPage from "./pages/AddTodoPage"
import App from './App'
import EditTodoPage from './pages/EditTodoPage'
import HomePage from './pages/HomePage'

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
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
