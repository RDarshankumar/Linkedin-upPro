import React , {useContext} from 'react'
import { useLocation } from 'react-router-dom';
import AgencyContext from './Data/AgencyData/AgencyContext'

const AgencyProfile = () => {
  
  const {  CurrAgency} = useContext(AgencyContext);

  console.log(CurrAgency)
  return (
    <div className="w-full h-full">

      <div className="w-full bg-teal-200 h-60"
      style={{
        backgroundImage: `url(${CurrAgency?.Banner})`, // Wrap the Blob URL with url()
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } }
      />

      {/* container of profile image , name , category , xyz  */}
      <div className='relative flex w-full px-16 m-0 -top-20 '>
        <div className='w-56 h-56 bg-teal-200 border-4 border-teal-700 rounded-full'
        style={{
          backgroundImage: `url(${CurrAgency?.Pic})`, // Wrap the Blob URL with url()
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } }
        />
        <div className="flex flex-col justify-end px-4 py-10 ">
          <h1 className='text-2xl font-bold'>{CurrAgency.Name}</h1>
          <p className='text-xl text-zinc-800'>{CurrAgency.Category}</p>
        </div>

        <span className='absolute px-2 py-1 bg-blue-600 cursor-pointer bottom-20 right-16 text-teal-50'>Edit Profile</span>
      </div>

      {/* container for info */}
      <div className='flex flex-col w-full gap-8 px-40 py-8 -mt-10'>
        <h1 className='text-3xl font-bold'>Date of Launch : {CurrAgency.Date}</h1>

        <h1 className='text-3xl font-bold'>Country :  {CurrAgency.Countary}</h1>
        <h1 className='text-3xl font-bold'>Email :   {CurrAgency.Email}</h1>

        <h1 className='text-3xl font-bold'>  <a href= {CurrAgency.Email}>Website</a></h1>
      </div>
    </div>
  );
};

export default AgencyProfile;
