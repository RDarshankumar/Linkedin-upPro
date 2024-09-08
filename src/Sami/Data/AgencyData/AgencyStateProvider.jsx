import React, { useState } from 'react'
import AgencyContext from './AgencyContext'
import { initialstate } from './AgencyState'

const AgencyStateProvider = ({children}) => {

    const [CurrAgency , setCurrAgency] = useState(initialstate.CurrAgency);
    const [AgencyState , setAgencyState] = useState(initialstate.Agency);


    console.log("sadaasd" , AgencyState )
  return (
    <AgencyContext.Provider 
        value={{
            CurrAgency,
            AgencyState,
            setCurrAgency,
            setAgencyState,
        }}
    >
        {children}
    </AgencyContext.Provider>
  )
}

export default AgencyStateProvider
