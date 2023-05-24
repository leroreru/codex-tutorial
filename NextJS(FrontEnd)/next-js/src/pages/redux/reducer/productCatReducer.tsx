import ActionTypes from "../action/actionType";

const initialState = {
productcat: [],
  message: "",
  refresh: "",
}; // sebagai kolom di reducer

function productCatReducers(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.RES_GET_PRODUCT_CAT:
      return { state, productcat: payload, refresh: true };
    case ActionTypes.RES_ADD_PRODUCT_CAT:
      return {
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    case ActionTypes.RES_UPDATE_PRODUCT_CAT:
      return {
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    case ActionTypes.RES_DEL_PRODUCT_CAT:
      return {
        message: payload.message,
        status: payload.status,
        refresh: false,
      };
    default:
      return state;
  }
}
export default productCatReducers;
