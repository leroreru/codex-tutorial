import ActionTypes from "../action/actionType";


const initialState = {
    users:[],
    message:'',
    refresh :''
}; // sebagai kolom di reducer

function userReducers (state = initialState, action) {

    const { type, payload} = action;
     switch (type) {
    
    case ActionTypes.GET_USER:    
        return { state, userx: payload, refresh: true };
    case ActionTypes.UPDATE_USER:
        return { refresh :false}
    case ActionTypes.DEL_USER:
        return { refresh :false}
    default:
        return state
    }
    }
    export default userReducers;