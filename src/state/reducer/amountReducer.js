/* eslint-disable no-undef */
const reducer = (state=0,action)=>{
    console.log(action);
    if (action.type==='desposit'){
        return state+action.payload;
    }
    else{
        console.log(state);
        return state;
    }
}

export default reducer;