import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './provider/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div 
    // className='max-w-screen-xl mx-auto'
    >
    <RouterProvider router={router} />
    </div>
    </ThemeProvider>
  </StrictMode>,
)
