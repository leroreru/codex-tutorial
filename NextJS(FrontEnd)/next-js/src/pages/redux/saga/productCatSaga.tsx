import { call, put } from "redux-saga/effects";
import apiMethod from "../../api/apiMethod";
import {
  doResponseAddProductCat,
  doResponseDeleteProductCat,
  doResponseGetProductCat,
  doResponseUpdateProductCat,
} from "../action/actionReducer";

//*fungsi ny selalu merespon actiontype
export function* handleGetAllProductCat(): any {
  try {
    const result = yield call(apiMethod.findAllProductCat);
    yield put(doResponseGetProductCat(result.data.result));
  } catch (error) {
    yield put(doResponseGetProductCat({ message: error, status: 400 }));
  }
}

export function* handleAddProductCat(action: any): any {
  try {
    const result = yield call(apiMethod.createProductCat, action.payload);
    yield put(doResponseAddProductCat(result.data));
  } catch (error) {
    yield put(doResponseAddProductCat({ message: error, status: 400 }));
  }
}

export function* handleUpdateProductCat(action: any): any {
  try {
    const result = yield call(apiMethod.updateProductCat, action.payload);
    yield put(doResponseUpdateProductCat(result.data.result[0]));
  } catch (error) {
    yield put(doResponseUpdateProductCat({ message: error, status: 400 }));
  }
}

export function* handleDeleteProductCat(action: any): any {
  try {
    const result = yield call(apiMethod.deleteProductCat, action.payload);
    yield put(doResponseDeleteProductCat(result.data.result[0]));
  } catch (error) {
    yield put(doResponseDeleteProductCat({ message: error, status: 400 }));
  }
}
