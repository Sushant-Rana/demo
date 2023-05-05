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

export const todoAdd=(name, date, description)=>{
    console.log(`ActionCreator- ${name}`);
    return(dispatch)=>{
        dispatch({
            type:'todoAdd',
        payload:{name:name,date:date,description:description}})
    }
}
export const todoDelete=(list,name)=>{
    console.log(`ActionCreator- ${name}`);
    return(dispatch)=>{
        dispatch({
            type:'todoDelete',
        payload:{name:name,list:list}})
    }
}
export const todoEdit=(list,name)=>{
    console.log(`ActionCreator- ${name}`);
    return(dispatch)=>{
        dispatch({
            type:'todoEdit',
        payload:{name:name,list:list}})
    }
}