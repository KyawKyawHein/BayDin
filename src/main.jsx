import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { StateContextProvider } from './context/StateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </StateContextProvider>
  </React.StrictMode>,
)
