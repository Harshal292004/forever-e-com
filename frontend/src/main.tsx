import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './context/UserContext.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <UserContextProvider>    
      <App />
    </UserContextProvider>
  </BrowserRouter>
)
