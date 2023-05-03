export const depositMoney=(amount)=>{
    console.log(amount);
    return(dispatch)=>{
        dispatch({
            type:'desposit',
        payload:amount})
    }
}