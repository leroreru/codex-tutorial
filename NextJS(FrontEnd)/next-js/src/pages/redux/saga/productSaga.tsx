import { call, put } from "redux-saga/effects";
import apiMethod from "../../api/apiMethod";
import {
  doResponseAddProduct,
  doResponseDeleteProduct,
  doResponseGetProduct,
  doResponseUpdateProduct,
} from "../action/actionReducer";

//*fungsi ny selalu merespon actiontype
export function* handleGetAllProduct(): any {
  try {
    const result = yield call(apiMethod.findAllProduct);
    yield put(doResponseGetProduct(result.data.result));
  } catch (error) {
    yield put(doResponseGetProduct({ message: error, status: 400 }));
  }
}

export function* handleAddProduct(action: any): any {
  try {
    const result = yield call(apiMethod.createProduct, action.payload);
    yield put(doResponseAddProduct(result.data));
  } catch (error) {
    yield put(doResponseAddProduct({ message: error, status: 400 }));
  }
}

export function* handleUpdateProduct(action: any): any {
  try {
    const result = yield call(apiMethod.updateProduct, action.payload);
    yield put(doResponseUpdateProduct(result.data.result[0]));
  } catch (error) {
    yield put(doResponseUpdateProduct({ message: error, status: 400 }));
  }
}

export function* handleDeleteProduct(action: any): any {
  try {
    const result = yield call(apiMethod.deleteProduct, action.payload);
    yield put(doResponseDeleteProduct(result.data.result[0]));
  } catch (error) {
    yield put(doResponseDeleteProduct({ message: error, status: 400 }));
  }
}

// export default {
//     handleGetAllUser,
//     handleAddUser,
//     handleUpdateUser,
//     handleDeleteUser
// }
