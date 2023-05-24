import ActionTypes from "../action/actionType";


const initialState = {
    users:[],
    message:'',
    refresh :''
}; // sebagai kolom di reducer

function productCatReducers (state = initialState, action) {

    const { type, payload} = action;
     switch (type) {
    
    case ActionTypes.GET_PRODUCTCAT:    
        return { state, productcat: payload, refresh: true };
    default:
        return state
    }
    }
    export default productCatReducers;