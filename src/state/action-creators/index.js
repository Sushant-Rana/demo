export const depositMoney=(amount)=>{
    console.log(amount);
    return(dispatch)=>{
        dispatch({
            type:'desposit',
        payload:amount})
    }
}

export const profileAdd=(list,name)=>{
    console.log(`ActionCreator- ${name}`);
    return(dispatch)=>{
        dispatch({
            type:'add',
        payload:{name:name,list:list}})
    }
}


export const kanye=()=>{
    console.log(`In kanye action`);
    return(dispatch)=>{
        dispatch({
            type:'kanye',
       payload:{}})
    }
}