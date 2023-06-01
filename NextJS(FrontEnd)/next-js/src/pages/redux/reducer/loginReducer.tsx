import ActionTypes from "../action/actionType";

const initialState = {
  token: [],
}; // sebagai kolom di reducer

function loginReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.RES_GET_LOGIN:
      return { state, token: payload,refresh: false };
    default:
      return state;
  }
}
export default loginReducers;
