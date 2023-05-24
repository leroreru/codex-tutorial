import ActionTypes from "../action/actionType";

const initialState = {
  token: [],
  message: "",
}; // sebagai kolom di reducer

function loginReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.RES_GET_PRODUCT_CAT:
      return { state, token: payload, refresh: true };
    default:
      return state;
  }
}
export default loginReducers;
