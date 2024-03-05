import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './componen/Header.jsx'
import Body from './componen/Body.jsx'
import Footer from './componen/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
)
