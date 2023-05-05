const initialState=[]; //profile list
/* eslint-disable no-undef */
export const reducer = (state=initialState,action)=>{
    console.log(`reducer : ${action}`);
    if (action.type==='add'){
        return [...state, action.payload.name];
    }
    else{
        console.log(state);
        return state;
    }
}

export default reducer;