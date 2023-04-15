import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './main/Main'
import Home from './pages/home/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        }
        ,
        {
          path: '/home',
          element:<Home></Home>
        }
      ]
      
    }
  ])

  return (
    <div className="   ">
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  )
}

export default App
