import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,  RouterProvider} from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import SingleMovie from './routes/SingleMovie'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/movie/:id',
    element: <SingleMovie/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>
)
