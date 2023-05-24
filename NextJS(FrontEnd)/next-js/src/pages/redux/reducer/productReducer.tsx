import ActionTypes from "../action/actionType";

const initialState = {
  product: [],
  message: "",
  status: "",
  refresh: "",
}; // sebagai kolom di reducer

function productReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.RES_GET_PRODUCT:
      return { state, product: payload, refresh: true };
    case ActionTypes.RES_ADD_PRODUCT:
      return {
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    case ActionTypes.RES_UPDATE_PRODUCT:
      return {
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    case ActionTypes.RES_DEL_PRODUCT:
      return {
        message: payload.message,
        status: payload.status,
        refresh: false,
      };

    default:
      return state;
  }
}
export default productReducers;
