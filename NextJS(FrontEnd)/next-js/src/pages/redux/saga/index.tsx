import ActionType from "../action/actionType";
import { takeEvery, all, takeLatest } from "redux-saga/effects";
import {
  handleGetAllUser,
  handleAddUser,
  handleUpdateUser,
  handleDeleteUser,
} from "./userSaga";
import {
  handleAddProduct,
  handleDeleteProduct,
  handleGetAllProduct,
  handleUpdateProduct,
} from "./productSaga";
import {
  handleAddProductCat,
  handleDeleteProductCat,
  handleGetAllProductCat,
  handleUpdateProductCat,
} from "./productCatSaga";
import { handleLogin } from "./loginSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionType.REQ_GET_USER, handleGetAllUser),
    takeEvery(ActionType.REQ_ADD_USER, handleAddUser),
    takeEvery(ActionType.REQ_UPDATE_USER, handleUpdateUser),
    takeEvery(ActionType.REQ_DEL_USER, handleDeleteUser),

    takeEvery(ActionType.REQ_GET_PRODUCT, handleGetAllProduct),
    takeEvery(ActionType.REQ_ADD_PRODUCT, handleAddProduct),
    takeEvery(ActionType.REQ_UPDATE_PRODUCT, handleUpdateProduct),
    takeEvery(ActionType.REQ_DEL_PRODUCT, handleDeleteProduct),

    takeEvery(ActionType.REQ_GET_PRODUCT_CAT, handleGetAllProductCat),
    takeEvery(ActionType.REQ_ADD_PRODUCT_CAT, handleAddProductCat),
    takeEvery(ActionType.REQ_UPDATE_PRODUCT_CAT, handleUpdateProductCat),
    takeEvery(ActionType.REQ_DEL_PRODUCT_CAT, handleDeleteProductCat),

    takeEvery(ActionType.REQ_GET_LOGIN,handleLogin),
  ]);
}

export default watchAll;
