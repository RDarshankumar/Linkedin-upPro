import React, { useContext, useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Assets/Loading'
import AgencyPage from '../Sami/AgencyPage'
import AgencyNav from './AgencyNav'
import AgencyContext from './Data/AgencyData/AgencyContext'

const AgencyForm = () => {

    const {AgencyState , CurrAgency , setAgencyState, setCurrAgency ,profileShow, setProfileShow} = useContext(AgencyContext);



    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [category , setCategory] = useState("")
    const [country , setCountry] = useState("")
    const [password , setPassword] = useState("")
    const [reg , setReg] = useState("")
    const [date , setDate] = useState("")
    const [web , setWeb] = useState("")
    const [fb , setFb] = useState("")
    const [insta , setInsta] = useState("")
    const [profileImage, setProfileImage] = useState(null);
    const [bannerImage , setBannerImage] = useState(null)
    const [step , setStep] = useState(1)
    const [loading , setLoading ] = useState(false)

    const [isFormOpen , setFormOpen] = useState(true)

    const [formfilled , setFormfilled] = useState(true)

    

    const handleNext = () => {
      setStep((prevStep) => prevStep + 1)
    };
    const handlePrev = () => setStep((prevStep) => prevStep - 1);

    const handleProfileImageChange = (e) => {

        const file = e.target.files[0];
        if (file) {
          setProfileImage(URL.createObjectURL(file));
        }

    }

    const handleBannerImageChange = (e) => {

    const file = e.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
    }

}

    const handleFormfilled = () => {

        if(name !== "" && email !== "" && password !== "" && category !== "" && country !== "" && date !== "" && reg !== "" && web !== "" ){
          handleEntry()

        }

        else{
          setFormfilled(false)
        }
    }

    const handleEntry = () => {

      setFormOpen(false)
      setLoading(true)

      const newAgency = {
        id : AgencyState.length + 1,
        Name : name ,
        Email : email,
        Password : password ,
        Category : category,
        Countary : country,
        Date : date,
        Reg : reg,
        Web : web,
        Fb : fb,
        Insta : insta ,
        Pic : profileImage,
        Banner : bannerImage,
        posts : ["hello"],
      }

      setAgencyState([...AgencyState , newAgency]);


      setCurrAgency(newAgency);
      setTimeout(() => {
          setLoading(false)
          setProfileShow(true)
      }, 2000)
      
    }


   return (
    <div className=''>
    {isFormOpen && (

       <div className="flex items-center justify-center w-full h-full px-8 bg-gray-100 md:px-16 py-28">
         <div className="w-full p-6 bg-white rounded-lg shadow-lg">
           {/* Back to home button */}
           <Link to="/"
             
             className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M18 6L6 18" />
               <path d="M6 6l12 12" />
             </svg>
           </Link>

           {/* Agency form page 1 */}
           {step ===1 && (
             <>
             <div className='flex flex-col items-center justify-center w-full ' >
           <h1 className='mb-6 text-2xl font-semibold text-indigo-700 '>Agency SignUP<span className='text-lg text-gray-500'>page {step}</span></h1>
           <input 
           type='text' 
           placeholder='Enter Company Name' 
           className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50'
           value={name}
           onChange={(e) => setName(e.target.value)}
           required/>

           <input 
           type='text' 
           placeholder='Enter Company Email' 
           className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50' 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required/> 

            

           <input 
           type='text' 
           placeholder='Enter Your Password' 
           className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50' 
           value={password}
           onChange={(e) => 
             setPassword(e.target.value)
           }
           required/>
        
           <label className="block mb-4 text-gray-700">Upload Profile Image:</label>
           <input
             type="file"
             accept="image/*"
             onChange={handleProfileImageChange}
             className="block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50"
             
           />
           {profileImage && (
             <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
               <img src={profileImage} alt="Profile Preview" className="object-cover w-full h-full" />
             </div>
           )}
           <label className="block mb-4 text-gray-700">Upload Banner Image:</label>
           <input
             type="file"
             accept="image/*"
             onChange={handleBannerImageChange}
             className="block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50"
             
           />
           {bannerImage && (
             <div className="w-40 h-24 mx-auto mb-4 overflow-hidden ">
               <img src={bannerImage} style={{backgroundSize : 'cover'}} alt="Profile Preview" className="object-cover w-full h-full" />
             </div>
           )}
           
           
           <button onClick={handleNext} className="w-full px-4 py-3 text-white bg-indigo-600 rounded-lg">
             Next
           </button>

           <div className='relative flex justify-center w-full py-5 font-semibold px-auto '><p className='inline'>ALready Signup? {"->"} <Link className='text-teal-400' to="/Login" >Login</Link></p> </div>
           </div> </>
           )}

           {/* Agency form page 2 */}

           {step === 2 && (
             <div className='flex flex-col items-center justify-center bg-teal-600/10' >
             <h1 className='mb-6 text-2xl font-semibold text-indigo-700 '>Agency SignUP<span className='text-lg text-gray-500'>page {step}</span></h1>

             <input 
           type='text' 
           placeholder='Enter Country' 
           className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50' 
           value={country}
           onChange={(e) => 
             setCountry(e.target.value)
           }
           required/> 

             <input 
             type='text' 
             placeholder='Enter Category' 
             className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50'
             value={category}
             onChange={(e) => 
             setCategory(e.target.value)
           }
            required />
 
             <input 
             type='text' 
             placeholder='Enter Registeration Number' 
             className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50' 
             value={reg}
             onChange={(e) => 
             setReg(e.target.value)
           }
             /> 
 
             <label className="block mb-4 text-gray-700">Enter launch date of Company :</label>
             <input 
             type='date' 
             placeholder='Enter Country' 
             className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50' 
             value={date}
             onChange={(e) => 
             setDate(e.target.value)
           }
             required/>  
          
             
             <div className='flex items-center justify-center w-full gap-4'>
             <button onClick={handlePrev} className="flex-1 px-4 py-3 text-white bg-gray-500 rounded-lg">
               Back
             </button>
             <button onClick={handleNext} className="flex-1 px-4 py-3 text-white bg-indigo-600 rounded-lg">
               Next
             </button>

             
             </div>
             </div> 
           )}

            {/* Agency form page 3 */}

           {step === 3 && (
             <div className='flex flex-col items-center justify-center bg-teal-600/10' >
             <h1 className='mb-6 text-2xl font-semibold text-indigo-700 '>Agency SignUP <span className='text-lg text-gray-500'>page {step}</span></h1>

             <input 
             type='text' 
             placeholder='Your Website link ?' 
             className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50' 
             value={web}
             onChange={(e) => 
             setWeb(e.target.value)
           }
             required/>
 
             <input 
             type='text' 
             placeholder='Your Fb page link ? ' 
             className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50' 
             value={fb}
             onChange={(e) => 
             setFb(e.target.value)
           }
             required/> 

             <input 
             type='text' 
             placeholder='Your Insta page link ? ' 
             className='block w-full p-3 mb-4 text-gray-900 border border-indigo-300 rounded-lg bg-indigo-50' 
             value={insta}
             onChange={(e) => 
             setInsta(e.target.value)
           }
             required/> 



             <div className='flex items-center justify-center w-full gap-4 my-4'>
             
                <button onClick={handlePrev} className="flex-1 px-4 py-3 text-white bg-gray-500 rounded-lg hover:bg-gray-700">
                  Back
                </button>
                <button onClick={handleFormfilled} className="flex-1 px-4 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                  SignUp
                </button>
             </div>

             {!formfilled && <p className='text-xl font-semibold text-red-600'>Please fill all input fields</p>}
             </div> 
           )}

           
            </div>
          </div>
    )  }

    {loading && (
      <div className='w-full h-full bg-gray-100'>
        <Loading/>
      </div>
    )}

    {profileShow && ( 
      <>
      
        <div className='w-full h-full '>
      
          <AgencyNav profileImage={profileImage} Agency = {CurrAgency} />
          <AgencyPage savedosts = {CurrAgency.posts}/>
        </div>
      
      </>
    )}

    
    </div>
   )
}

export default AgencyForm
