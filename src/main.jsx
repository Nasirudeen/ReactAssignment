import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from  'react-router-dom'
import Login from './pages/login'
import Signin from './pages/signin'
 import Error from './pages/Error'
 import ThemeProvider from './Contexts/ThemeProvider'
 
const router = createBrowserRouter([
  {path: "/", element : <App />, errorElement: <Error/> },
  {path: "/login", element : <Login />, },
  {path: "/signin", element : <Signin />, }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
