import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalProvider } from './Sami/Data/GlobalData';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
  <React.StrictMode>
  {/* <GlobalProvider> */}
    <App />
    {/* </GlobalProvider> */}
  </React.StrictMode>
  </Router>
  
);

