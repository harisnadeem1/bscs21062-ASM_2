import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/bootstrap/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/components.css'
import './assets/css/media.css'
import './assets/css/chat.css'
import Admin from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Admin/>
  </StrictMode>,
)
