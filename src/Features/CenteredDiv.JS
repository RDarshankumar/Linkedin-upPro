import React from 'react';

const CenteredDiv = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="What would you like to search?"
          className="w-full p-3 mb-6 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />

        {/* Icons with Labels */}
        <div className="flex justify-around mt-4 space-x-6">
          {/* Write an Article Icon */}
          <div className="text-center">
            <div className="p-4 bg-indigo-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-indigo-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12l7.5 7.5M3.75 12l7.5-7.5"
                />
              </svg>
            </div>
            <p className="mt-2 text-sm text-gray-700">Write an Article</p>
          </div>

          {/* Image Post Icon */}
          <div className="text-center">
            <div className="p-4 bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5h15v15h-15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2.25 3 4.5-6"
                />
              </svg>
            </div>
            <p className="mt-2 text-sm text-gray-700">Image Post</p>
          </div>

          {/* Video Post Icon */}
          <div className="text-center">
            <div className="p-4 bg-red-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m6 0H9m6 0l-3 3m3-3l-3-3"
                />
              </svg>
            </div>
            <p className="mt-2 text-sm text-gray-700">Video Post</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredDiv;
