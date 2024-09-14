import React, { useEffect, useState } from 'react';
import AgencyContext from './AgencyContext';
import { initialstate } from './AgencyState';

const AgencyStateProvider = ({ children }) => {
    // Load AgencyState from localStorage or use the initial state if not available
    const [AgencyState, setAgencyState] = useState(() => {
        const savedAgencyState = localStorage.getItem('AgencyState');
        return savedAgencyState ? JSON.parse(savedAgencyState) : initialstate.Agency;
    });

    // Load CurrAgency from localStorage or use the initial state if not available
    const [CurrAgency, setCurrAgency] = useState(() => {
        const savedCurrAgency = localStorage.getItem('CurrAgency');
        return savedCurrAgency ? JSON.parse(savedCurrAgency) : initialstate.CurrAgency;
    });

    // For saving the entire AgencyState to localStorage
    useEffect(() => {
    console.log("Total agencies:", AgencyState);
  
    // Check if the AgencyState is valid and contains agencies
    if (AgencyState.length > 0) {
      localStorage.setItem('AgencyState', JSON.stringify(AgencyState)); // Save the full AgencyState to localStorage
      console.log("AgencyState saved to localStorage");
    }
    }, [AgencyState]);  // Track changes to AgencyState
      

    // Save CurrAgency to localStorage whenever it changes
    useEffect(() => {
        console.log("Current agency:", CurrAgency);
        if (CurrAgency && Object.keys(CurrAgency).length > 0) { // Ensure valid CurrAgency is saved
            localStorage.setItem('CurrAgency', JSON.stringify(CurrAgency));
        }
    }, [CurrAgency]);


        // Initialize profileShow with the value from localStorage or default to false
        const [profileShow, setProfileShow] = useState(() => {
            const storedProfileShow = localStorage.getItem('profileShow');
            return storedProfileShow ? JSON.parse(storedProfileShow) : false; // Use JSON.parse to convert back to a boolean
            });
        
            // useEffect to save the updated profileShow value to localStorage
            useEffect(() => {
              localStorage.setItem('profileShow', JSON.stringify(profileShow)); // Save the boolean as a string in localStorage
              console.log("ProfileShow saved to localStorage:", profileShow);
            }, [profileShow]); // Runs every time profileShow changes



    return (
        <AgencyContext.Provider
            value={{
                CurrAgency,
                AgencyState,
                profileShow,
                setCurrAgency,
                setAgencyState,
                setProfileShow,
            }}
        >
            {children}
        </AgencyContext.Provider>
    );
}

export default AgencyStateProvider;
