import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AgencyState } from './Data/AgencyState'

import Loading from './Assets/Loading'

const AgencyForm = () => {


    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [category , setCategory] = useState("")
    const [country , setCountry] = useState("")
    const [reg , setReg] = useState("")
    const [date , setDate] = useState("")
    const [web , setWeb] = useState("")
    const [fb , setFb] = useState("")
    const [insta , setInsta] = useState("")
    const [profileImage, setProfileImage] = useState(null);
    const [step , setStep] = useState(1)
    const [loading , setLoading ] = useState(false)
    const[isFormOpen , setFormOpen] = useState(true)
    const [profileShow , setProfileShow] = useState(false)

    

    const handleNext = () => {
      setStep((prevStep) => prevStep + 1)
      console.log(name , email , country , Date)
    };
    const handlePrev = () => setStep((prevStep) => prevStep - 1);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setProfileImage(URL.createObjectURL(file));
        }
        console.log(profileImage)
    }

    const handleEntry = () => {

      setFormOpen(false)
      setLoading(true)

      const newAgency = {
        id : AgencyState.length + 1,
        Name : name ,
        Email : email,
        Category : category,
        Countary : country,
        Date : date,
        Reg : reg,
        Web : web,
        Fb : fb,
        Insta : insta ,
        Pic : profileImage
      }

      AgencyState.push(newAgency)

      console.log(AgencyState)

      console.log(AgencyState[AgencyState.length - 1]);


      setTimeout(() => {
          setLoading(false)
          setProfileShow(true)
      }, 2000)
      
    }


   return (
    <>
    {isFormOpen && (
       <div>
       <div className="inset-0 flex items-center justify-center bg-gray-100 z-40">
         <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
           {/* Back to home button */}
           <Link to="/"
             
             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M18 6L6 18" />
               <path d="M6 6l12 12" />
             </svg>
           </Link>

           {/* Agency form page 1 */}
           {step ===1 && (
             <>
             <div className='bg-teal-600/10 flex justify-center items-center flex-col' >
           <h1 className='text-2xl font-semibold mb-6 text-indigo-700 '>Agency SignUP<span className='text-lg text-gray-500'>page {step}</span></h1>
           <input 
           type='text' 
           placeholder='Enter Company Name' 
           className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg'
           value={name}
           onChange={(e) => setName(e.target.value)}
           required/>

           <input 
           type='text' 
           placeholder='Enter Company Email' 
           className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg' 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required/> 

           <input 
           type='text' 
           placeholder='Enter Country' 
           className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg' 
           value={country}
           onChange={(e) => 
             setCountry(e.target.value)
           }
           required/>  
        
           <label className="block mb-4 text-gray-700">Upload Profile Image:</label>
           <input
             type="file"
             accept="image/*"
             onChange={handleImageChange}
             className="block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg"
             
           />
           {profileImage && (
             <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
               <img src={profileImage} alt="Profile Preview" className="object-cover w-full h-full" />
             </div>
           )}
           <button onClick={handleNext} className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg">
             Next
           </button>
           </div> </>
           )}

           {/* Agency form page 2 */}

           {step === 2 && (
             <div className='bg-teal-600/10 flex justify-center items-center flex-col' >
             <h1 className='text-2xl font-semibold mb-6 text-indigo-700 '>Agency SignUP<span className='text-lg text-gray-500'>page {step}</span></h1>

             <input 
             type='text' 
             placeholder='Enter Category' 
             className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg'
             value={category}
             onChange={(e) => 
             setCategory(e.target.value)
           }
            required />
 
             <input 
             type='text' 
             placeholder='Enter Registeration Number' 
             className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg' 
             value={reg}
             onChange={(e) => 
             setReg(e.target.value)
           }
             /> 
 
             <label className="block mb-4 text-gray-700">Enter launch date of Company :</label>
             <input 
             type='date' 
             placeholder='Enter Country' 
             className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg' 
             value={date}
             onChange={(e) => 
             setDate(e.target.value)
           }
             required/>  
          
             
             <div className='flex w-full justify-center items-center gap-4'>
             <button onClick={handlePrev} className="flex-1 py-3 px-4  bg-gray-500 text-white rounded-lg">
               Back
             </button>
             <button onClick={handleNext} className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-lg">
               Next
             </button>

             
             </div>
             </div> 
           )}

            {/* Agency form page 3 */}

           {step === 3 && (
             <div className='bg-teal-600/10 flex justify-center items-center flex-col' >
             <h1 className='text-2xl font-semibold mb-6 text-indigo-700 '>Agency SignUP <span className='text-lg text-gray-500'>page {step}</span></h1>

             <input 
             type='text' 
             placeholder='Your Website link ?' 
             className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg' 
             value={web}
             onChange={(e) => 
             setWeb(e.target.value)
           }
             required/>
 
             <input 
             type='text' 
             placeholder='Your Fb page link ? ' 
             className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg' 
             value={fb}
             onChange={(e) => 
             setFb(e.target.value)
           }
             required/> 

             <input 
             type='text' 
             placeholder='Your Insta page link ? ' 
             className='block w-full p-3 mb-4 bg-indigo-50 text-gray-900 border border-indigo-300 rounded-lg' 
             value={insta}
             onChange={(e) => 
             setInsta(e.target.value)
           }
             required/> 



             <div className='flex w-full justify-center items-center gap-4'>
             
             <button onClick={handlePrev} className="flex-1 py-3 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded-lg">
               Back
             </button>
             <button onClick={handleEntry} className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
               SignUp
             </button>
             
             
             </div>
             </div> 
           )}

           
            </div>
          </div>
        </div>
    )  }

    {loading && (
      <Loading/>
    )}

    {profileShow && (
      <>
      
        <div className='w-full h-full bg-gray-400'>
      
          <div className='w-full h-full'>
            {AgencyState[AgencyState.length - 1].Date}

          </div>
        
        </div>
      
      </>
    )}

    
    </>
   )
}

export default AgencyForm
