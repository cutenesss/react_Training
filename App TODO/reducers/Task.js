import types from '../actions/types';

const initData = [];

const TaskReducers = (state = initData, action) => {
    if(action.type===types.SAVE){
        state = [...action.data];
    }
    if (action.type === types.CREATE) {
        console.log("action create", action);
        state = [
            ...state.concat(action.data)
        ]
    }
    if (action.type === types.UPDATE) {
        console.log("action update", action);
        var array = [...state]; 
        array.splice(action.index, 1,action.data);
        state = array;
    }
    if (action.type === types.DELETE) {
        console.log("action delete", action);
        var array = [...state]; 
        array.splice(action.index, 1);
        state = array;
    }
    return state;
}

export default TaskReducers;