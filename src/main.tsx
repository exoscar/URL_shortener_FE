import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Import Tailwind CSS and any other global styles
import App from './App' // Import your main App component

// Main entry point for the React application
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
