import types from "../actions/types";

const initUser =[
    {
    name :'Tien',
    address: 'HN',
    DOB: '03/25/4215'
}
]

const UserReducers =(state = initUser, action)=>{
    if(action.type === types.CREATE){
        console.log("reducer user create", action)
        state=[
            // ...state,
            // ...action.data
            ...state.concat(action.data)
        ]
    }
    if(action.type === types.UPDATE){
        console.log("action update", action)
    }
    if(action.type === types.DELETE){
        console.log("reduce user delete",action)
        state=[
            ...state.splice(x,1)
        ]
    }
    
    return state;
}

export default UserReducers;