const initialState = {
    popuar:[],
    newGames:[],
    upcoming:[],
    searched:[],
}


const gameReducer = (state=initialState,action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
            };
         case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: []
            };   
        default:
            return {...state}
    }
}


// ACTION
// ACTION CREATORS 
// REDUX THUNK
export default gameReducer;