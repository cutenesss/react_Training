import types from './types';

const saveTask = (data) =>{
    return{
        type: types.SAVE,
        data: data
    }
}

const createTask =(data)=>{
    return{
        type: types.CREATE,
        data: data
    }
};

const updateTask =(data, index)=>{
    return{
        type: types.UPDATE,
        data: data,
        index: index
    }
};

const deleteTask =(index)=>{
    return{
        type: types.DELETE,
        index: index
    }
};

export {
    saveTask,
    createTask,
    updateTask,
    deleteTask
}