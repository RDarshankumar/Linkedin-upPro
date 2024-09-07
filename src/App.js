import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Features/Hero';
import Profile from './Features/Profile';
import EmployeeSignup from './Features/EmployeeSignup';
import AgencyForm from './Sami/AgencyForm';
import Navbar from './Features/Navbar';



function App() {
  return (
    <>
    
    
        <Routes>
          <Route path="" element={<Hero />} />
          <Route path="/EmployeeForm" element={<EmployeeSignup />} />
          <Route path="/AgencyForm" element={<AgencyForm />} />
          <Route path="/Profile" element={<Profile />} />
          
        </Routes>

        
    </>
  );
}

export default App;
