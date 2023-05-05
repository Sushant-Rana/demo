const initialState=[];
/* eslint-disable no-undef */
export const reducer = (state=initialState,action)=>{
    console.log(action);

    switch (action.type){
        case 'todoAdd':
            const newTask = { id: nanoid(), name:action.payload.name, deadline: action.payload.deadline, description: action.payload.description,  pid: prof,completed: false };
    console.log(newTask)
            return [...state,action.payload.name];
        case 'todoDelete':
            const remainingTasks = state.filter((task) => action.payload !== task.id);
            return remainingTasks;
        case 'todoEdit':
            const updatedState=state.map((task) => {
                if (action.payload.id === task.id) {
                    //
                    return { ...task, name: action.payload.newName, deadline: action.payload.newDeadline }
                  }
                  else{
                  return task;
                }
            })
            return updatedState;
        default:
            return state;
    }
}



export default reducer;