const initialState = {
    popuar:[],
    newGames:[],
    upcoming:[],
    searched:[],
}


const gameReducer = (state=initialState,action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, popular: action.payload.popular}
        default:
            return {...state}
    }
}


// ACTION
// ACTION CREATORS 
// REDUX THUNK
export default gameReducer;