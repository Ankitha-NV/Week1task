import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import Navbar from './Navbar.jsx'
import ProductPage from './ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <Signin/>
    <Signup/>
    <ProductPage/>
  </StrictMode>,
)
