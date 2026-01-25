import React from 'react'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename='/TheBlogs-Website'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
