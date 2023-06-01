import ActionTypes from "../action/actionType";

const initialState = {
  userx: [],
  message: "",
  status: "",
  refresh: "",
  message2:"",
}; // sebagai kolom di reducer

function userReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.RES_GET_USER:
      return { state, userx: payload, refresh: true };
    case ActionTypes.RES_ADD_USER:
      return {
        message: payload.message,
        status: payload.status,
        message2:payload.result,
        refresh: false,
      };
    case ActionTypes.RES_UPDATE_USER:
      return {
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    case ActionTypes.RES_DEL_USER:
      return {
        message: payload.message,
        status: payload.status,
        refresh: false,
      };

    default:
      return state;
  }
}
export default userReducers;
