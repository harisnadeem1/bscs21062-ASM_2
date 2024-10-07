import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Admin from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Admin/>
  </StrictMode>,
)
