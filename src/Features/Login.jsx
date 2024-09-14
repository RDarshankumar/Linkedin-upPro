import React, { useContext, useEffect, useState } from 'react'
import AgencyContext from '../Sami/Data/AgencyData/AgencyContext'
import AgencyNav from '../Sami/AgencyNav';
import AgencyPage from '../Sami/AgencyPage.jsx'
import { Link } from 'react-router-dom';

const Login = () => {

    const {AgencyState , CurrAgency ,  setCurrAgency , profileShow, setProfileShow } = useContext(AgencyContext);

    const [email , setEmail] = useState("");
    const [code , setCode] = useState("");
    const [emailFound , setEmailFound] = useState(false);
    const [codeMatch , setCodeMatch] = useState (false);
    const [profileImage ,setProfileImage] = useState('');

    
    const handleLogin = () => {
        if(email !== "" && code !== ""){
            AgencyState.map((item) => {
                if(item.Email === email){
                    setEmailFound(true)
                    if(code === item.Password){
                        setCodeMatch(true)
                        console.log("Code mathced")
                        handleConfirm(item);
                    }
                    else{
                        console.log("COde not mathced")
                    }

                    console.log("Email Found" , item.Email)
                }
                else{
                    console.log("Email not found")
                }
            })
        }
    }

    const handleConfirm = (user) => {
        console.log("The Loginned user is : " , user)
        setCurrAgency(user)
        setProfileImage(user.Pic)
        setProfileShow(true)
    }

  return (
    
    <>
    {profileShow ? ( 

    
      <div className='w-full h-full '>
    
        <AgencyNav profileImage={profileImage} Agency = {CurrAgency} />
        <AgencyPage savedosts = {CurrAgency.posts}/>
      </div>
    


    ) : (
    <div className='w-full h-full px-8 bg-gray-300 md:px-16 md:py-2 py-28'>
        {/* Back to home button */}
            <Link to="/"
             
             className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M18 6L6 18" />
               <path d="M6 6l12 12" />
             </svg>
           </Link>
            <div className='flex flex-col items-center w-full gap-16 px-8 pt-8 pb-2 bg-teal-50'>
            <h1 className='text-4xl font-bold'>Login Form</h1>
            
            <div className='w-full '>
                <label className='text-2xl font-semibold'>Enter Email</label>
            <input 
                type='text' 
                placeholder='Enter Email' 
                className='block w-full p-3 my-4 mb-4 text-2xl text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>

            <div className='w-full '>
                <label className='text-2xl font-semibold'>Enter Password</label>
            <input 
                type='text' 
                placeholder='Enter Password' 
                className='block w-full p-3 my-4 mb-4 text-2xl text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required/>
            </div>

            <button onClick={handleLogin}  className='px-20 py-2 text-2xl bg-blue-600 rounded-full text-teal-50'>Login</button>
            {!emailFound && (<p className='text-xl font-semibold text-red-600'>Email not found </p>) 
            }
        </div>
      
    </div>
  )}

    </>
  )
}

export default Login
