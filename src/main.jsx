// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import ShopContextProvider from './context/ShopContext.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <ShopContextProvider>
//   <App />
//   </ShopContextProvider>
//   </BrowserRouter>
// )


import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
    <App/>
  </ShopContextProvider>
  </BrowserRouter>
)