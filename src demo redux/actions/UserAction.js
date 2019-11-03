import types from "./types";

const createUser = (data) => {
    return{
        type: types.CREATE,
        data: data
    }
}

const updateUser= ()=>{
    return{
        type: types.UPDATE
    }
}

const deleteUser= ()=>{
    return{
        type: types.DELETE
    }
}

export{
    createUser,
    updateUser, 
    deleteUser
}