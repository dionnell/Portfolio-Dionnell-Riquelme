import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {PortfolioApp} from './PortfolioApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </StrictMode>,
)
