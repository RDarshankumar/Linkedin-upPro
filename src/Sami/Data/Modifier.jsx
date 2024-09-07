

export  default (state , action) => {
    switch(action.type){
        case 'DELETE':
            const updatedAgencies = state.Agencies.filter(Agency => Agency.id !== action.payload);
            return {
                ...state,
                Agencie : updatedAgencies
        }

        case 'ADD' :
            
            return{
                ...state,
                transactions : [action.payload , ...state.transactions],
            }

        

        // case 'UPDATE' :

        //     state.transactions[action.index] = action.payload
        //     return{
        //         ...state,
        //     }

        default :
            return state;
    }
}
