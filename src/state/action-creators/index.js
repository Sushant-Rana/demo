export const depositMoney=(amount)=>{
    console.log(amount);
    return(dispatch)=>{
        dispatch({
            type:'desposit',
        payload:amount})
    }
}

export const profileSelector=(id)=>{
    console.log(id);
    return(dispatch)=>{
        dispatch({
            type:'change',
        payload:id})
    }
}