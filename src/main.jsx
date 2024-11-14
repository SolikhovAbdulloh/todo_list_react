import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Person from './assets/probs.jsx'
import FocusInput from './assets/authorization/login/login.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Person/>
    <FocusInput/>
  </StrictMode>,
)
