import React, { useState, useEffect, useRef } from 'react';
import Logo from '../Logo/Dk.png';
import './Nav.css';
import LinkUp from '../Logo/LinkupPng.png'

const Navbar = ({ profileImage,education,personal,experience,certification }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Close the profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileRef]);

  // Function to open a new tab with profile info
  const openProfileTab = () => {
    const profileWindow = window.open('', '_blank');
    if (profileWindow) {
      profileWindow.document.write(`
        <html>
      <head>
        <title>Your Profile</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .banner {
            background-color: #4a90e2;
            color: white;
            padding: 50px;
          }
          .profile-img {
            margin-top: -50px;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid white;
            object-fit: cover;
          }
          .profile-info {
            margin-top: 20px;
          }
          .back-button {
            position: fixed;
            top: 20px;
            left: 20px;
            background-color: #4a90e2;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }
          .back-button:hover {
            background-color: #357abd;
          }
          .card {
            width: 300px;
            height: 200px;
            padding: 20px;
            margin: 20px auto;
            background-color: white; 
            border: 2px solid #3498db; 
            border-radius: 10px; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15); 
            background-image: linear-gradient(to right, #ffffff, #e6f7ff);
            transform: translateY(0);
            transition: transform 0.3s ease;
          }
        </style>
      </head>
      <body>
        <button class="back-button" onclick="window.history.back()">Go Back</button>
        <div class="banner">
          <h1>Welcome to Your Profile</h1>
        </div>
        <img src="${profileImage}" alt="Profile Image" class="profile-img" />
        <div class="profile-info">
          <div class="card">
            <h2>Name: ${personal.name}</h2>
            <h2>Email: ${personal.email}</h2>
            <h2>Phone: ${personal.phone}</h2>
          </div>
          <div class="card">
            <h3>University Name: ${education.school}</h3>
            <h3>Degree: ${education.degree}</h3>
            <h3>Percentage/Cgpa: ${education.cgpa}</h3>
          </div>
          <div class="card">
            <h3>Company: ${experience.company}</h3>
            <h3>Years: ${experience.years}</h3>
            <h3>Start Date: ${experience.startDate}</h3>
            <h3>End Date: ${experience.endDate}</h3>
          </div>
          <div class="card">
            <h3>Certification Institute: ${certification.institute}</h3>
            <h3>Start Date: ${certification.startDate}</h3>
            <h3>End Date: ${certification.endDate}</h3>
          </div>
        </div>
      </body>
      </html>
      `);
      profileWindow.document.close();
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              <img
                className="w-auto h-auto"
                src={LinkUp}
                alt="Your Company"
                id='logo'
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Navigation Links */}
              
               
               
               
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-3" ref={profileRef}>
              <div>
                <button
                  type="button"
                  className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isProfileOpen}
                  aria-haspopup="true"
                  onClick={toggleProfileMenu}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={profileImage}
                    alt=""
                  />
                </button>
              </div>

              {/* Dropdown menu */}
              {isProfileOpen && (
                <div
                  className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                    onClick={openProfileTab}
                  >
                    Your Profile
                  </button>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
