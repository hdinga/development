import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Metadata from './components/Metadata.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <Metadata />
    <App />
  </React.StrictMode>,
)
