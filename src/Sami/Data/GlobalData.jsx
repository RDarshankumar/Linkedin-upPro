import React , {createContext , useReducer ,useState , useEffect} from "react";
import Modifier from "./Modifier";


//Initial state

const AgencyDataInitial = {
    Agencies : 
    [
        { id: 1, text: 'Grocery', amount: -400 },

    ]

}

// Create COntext

export const GlobalContext = createContext(AgencyDataInitial);

//Provider Component

export const GlobalProvider = ({children}) => {
    const[AgencyState , dispatch ] = useReducer(Modifier , AgencyDataInitial);


    function Delete(id){
        dispatch({
            type : "DELETE",
            payload : id,
        });
    }

    function Add(newAgency){
        dispatch({
            type : "ADD",
            payload : newAgency,
        });
    
    }

    function Update(UpdatedAgency , ToUpdate){
        dispatch({
            type : 'UPDATE',
            payload : UpdatedAgency,
            index : ToUpdate,
        })
    }

    return (
        <GlobalContext.Provider value={{
            Agencies : AgencyState.Agencies,
            Delete ,
            Add ,
            Update,
            
            }}>
        </GlobalContext.Provider>

    );
}



