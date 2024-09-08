import React, { useContext, useState } from 'react'
import AgencyContext from '../Sami/Data/AgencyData/AgencyContext'

const Login = () => {

    const [email , setEmail] = useState("");
    const [code , setCode] = useState("");

    const {AgencyState}  = useContext(AgencyContext);
  return (
    <div className='flex justify-center w-full h-full py-8 bg-gray-300'>
        <div className='max-w-[100%] w-[50%] flex flex-col items-center gap-16 px-8 py-8 bg-teal-50'>
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

            <button className='absolute px-20 py-2 text-2xl bg-blue-600 rounded-full text-teal-50 bottom-16 '>Login</button>
        </div>
      
    </div>
  )
}

export default Login
