import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShootingStars } from "./ui/shooting-stars.jsx";
import { StarsBackground } from "./ui/stars-background.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ShootingStars />
    <StarsBackground />
  </StrictMode>,
)
