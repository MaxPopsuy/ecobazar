import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
