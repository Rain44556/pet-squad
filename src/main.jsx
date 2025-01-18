import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './provider/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
      // className='max-w-screen-7xl mx-auto'
      >
        <RouterProvider router={router} />
      </div>
      <ToastContainer></ToastContainer>
    </ThemeProvider>
  </StrictMode>,
)
