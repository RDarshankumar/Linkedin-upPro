import React, { useState } from 'react';
import EmployeeSignup from './EmployeeSignup'; // Import the new component


const Hero = () => {
  const [showForm, setShowForm] = useState(null); // Tracks which form to display

  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/flat-design-business-coffee-illustration_23-2149479226.jpg?w=740&t=st=1724567753~exp=1724568353~hmac=02e13899f7ce4da67ca4f1194a9c5ae6e1f9a5f26120e21d1efaa645051bfbcb)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional overlay */}
      <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 p-6 lg:p-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Start your journey with <span className="text-blue-400">LinkUpPro</span>
          </h1>
          <p className="mt-3 text-lg text-white">
            Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-3">
            <button
              onClick={() => setShowForm('employee')}
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Signup as an Employee
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
            <button
              onClick={() => setShowForm('agency')}
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus"
            >
              Signup as an Agency
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column (if needed) */}
        {/* <div className="lg:w-1/2 p-6 lg:p-12"> */}
        {/* Add additional content here if needed */}
        {/* </div> */}
      </div>

      {/* Conditional Full-Screen Forms */}
      {showForm === 'employee' && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-40">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setShowForm(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <EmployeeSignup />
          </div>
        </div>
      )}
      {showForm === 'agency' && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-40">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setShowForm(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            {/* Add your AgencySignup component here */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
