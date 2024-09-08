
import React , {createContext} from 'react'
import { initialstate } from './AgencyState';
        
const AgencyContext = createContext(initialstate);


export default AgencyContext;
