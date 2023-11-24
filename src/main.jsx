import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import SiteTheme from './utils/theme/SiteTheme'
import AuthContext from './Context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthContext>
 <SiteTheme>
   <RouterProvider router={Routes}>

   </RouterProvider>
   </SiteTheme>
 </AuthContext>
  </React.StrictMode>,
)
