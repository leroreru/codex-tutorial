import ActionTypes from "./actionType";

export const doRequestGetUser = () => {
  return {
    type: ActionTypes.REQ_GET_USER,
  };
};
export const doResponseGetUser = (payload: any) => {
  return {
    type: ActionTypes.RES_GET_USER,
    payload,
  };
};

// payload tidak harus ny payload jika req
export const doRequestAddUser = (payload: any) => {
  return {
    type: ActionTypes.REQ_ADD_USER,
    payload,
  };
};

export const doResponseAddUser = (payload: any) => {
  return {
    type: ActionTypes.RES_ADD_USER,
    payload,
  };
};

export const doRequestUpdateUser = (payload: any) => {
  return {
    type: ActionTypes.REQ_UPDATE_USER,
    payload,
  };
};

export const doResponseUpdateUser = (payload: any) => {
  return {
    type: ActionTypes.RES_UPDATE_USER,
    payload,
  };
};

export const doRequestDeleteUser = (payload: any) => {
  return {
    type: ActionTypes.REQ_DEL_USER,
    payload,
  };
};

export const doResponseDeleteUser = (payload: any) => {
  return {
    type: ActionTypes.RES_DEL_USER,
    payload,
  };
};

//product

export const doRequestGetProduct = () => {
  return {
    type: ActionTypes.REQ_GET_PRODUCT,
  };
};
export const doResponseGetProduct = (payload: any) => {
  return {
    type: ActionTypes.RES_GET_PRODUCT,
    payload,
  };
};

export const doRequestAddProduct = (payload: any) => {
  return {
    type: ActionTypes.REQ_ADD_PRODUCT,
    payload,
  };
};

export const doResponseAddProduct = (payload: any) => {
  return {
    type: ActionTypes.RES_ADD_PRODUCT,
    payload,
  };
};

export const doRequestUpdateProduct = (payload: any) => {
  return {
    type: ActionTypes.REQ_UPDATE_PRODUCT,
    payload,
  };
};

export const doResponseUpdateProduct = (payload: any) => {
  return {
    type: ActionTypes.RES_UPDATE_PRODUCT,
    payload,
  };
};

export const doRequestDeleteProduct = (payload: any) => {
  return {
    type: ActionTypes.REQ_DEL_PRODUCT,
    payload,
  };
};

export const doResponseDeleteProduct = (payload: any) => {
  return {
    type: ActionTypes.RES_DEL_PRODUCT,
    payload,
  };
};

//product cat
//get
export const doRequestGetProductCat = () => {
  return {
    type: ActionTypes.REQ_GET_PRODUCT_CAT,
  };
};
export const doResponseGetProductCat = (payload: any) => {
  return {
    type: ActionTypes.RES_GET_PRODUCT_CAT,
    payload,
  };
};
//add
export const doRequestAddProductCat = (payload: any) => {
  return {
    type: ActionTypes.REQ_ADD_PRODUCT_CAT,
    payload,
  };
};

export const doResponseAddProductCat = (payload: any) => {
  return {
    type: ActionTypes.RES_ADD_PRODUCT_CAT,
    payload,
  };
};
//update
export const doRequestUpdateProductCat = (payload: any) => {
  return {
    type: ActionTypes.REQ_UPDATE_PRODUCT_CAT,
    payload,
  };
};

export const doResponseUpdateProductCat = (payload: any) => {
  return {
    type: ActionTypes.RES_UPDATE_PRODUCT_CAT,
    payload,
  };
};

//delete
export const doRequestDeleteProductCat = (payload: any) => {
  return {
    type: ActionTypes.REQ_DEL_PRODUCT_CAT,
    payload,
  };
};

export const doResponseDeleteProductCat = (payload: any) => {
  return {
    type: ActionTypes.RES_DEL_PRODUCT_CAT,
    payload,
  };
};


//login
export const doRequestGetLogin = (payload:any) => {
  return {
    type: ActionTypes.REQ_GET_LOGIN,
    payload
  };
};
export const doResponseGetLogin = (payload: any) => {
  return {
    type: ActionTypes.RES_GET_LOGIN,
    payload,
  };
};