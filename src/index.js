import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom"
import AgencyStateProvider from '../src/Sami/Data/AgencyData/AgencyStateProvider'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
  <React.StrictMode>
  <AgencyStateProvider>
    <App />
    </AgencyStateProvider>
  </React.StrictMode>
  </Router>
  
);

