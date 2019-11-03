import types from './types';

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
    createTask,
    updateTask,
    deleteTask
}