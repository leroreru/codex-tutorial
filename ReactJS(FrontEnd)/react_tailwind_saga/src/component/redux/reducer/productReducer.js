import ActionTypes from "../action/actionType";


const initialState = {
    users:[],
    message:'',
    refresh :''
}; // sebagai kolom di reducer

function productReducers (state = initialState, action) {

    const { type, payload} = action;
     switch (type) {
    
    case ActionTypes.GET_PRODUCT:    
        return { state, product: payload, refresh: true };
    case ActionTypes.ADD_PRODUCT:
        return { refresh :false}
    case ActionTypes.UPDATE_PRODUCT:
        return { refresh :false}
    case ActionTypes.DEL_PRODUCT:
        return { refresh :false}
    default:
        return state
    }
    }
    export default productReducers;