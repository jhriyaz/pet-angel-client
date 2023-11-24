import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import SiteTheme from './utils/theme/SiteTheme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <SiteTheme>
   <RouterProvider router={Routes}>

   </RouterProvider>
   </SiteTheme>
  </React.StrictMode>,
)
