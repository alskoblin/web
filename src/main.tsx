import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./normalize.css"
import "./AppStyle.css"
import "./index.css"
import "./components/Navigation/style.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App IsAuthenticated={true} />
  </StrictMode>,
)
