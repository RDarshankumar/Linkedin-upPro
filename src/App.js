import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Features/Hero';
import Profile from './Features/Profile';
import EmployeeSignup from './Features/EmployeeSignup';
import AgencyForm from './Sami/AgencyForm';
import Navbar from './Features/Navbar';
import AgencyProfile from './Sami/AgencyProfile';
import Login from './Features/Login';


function App() {
  return (
    <div className='h-full'>
    
    
        <Routes>
          <Route path="" element={<Hero />} />
          <Route path="/EmployeeForm" element={<EmployeeSignup />} />
          <Route path="/AgencyForm" element={<AgencyForm />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AgencyProfile" element={<AgencyProfile />} />
          <Route path="/Login" element={<Login />} />
          
        </Routes>

        
    </div>
  );
}

export default App;
