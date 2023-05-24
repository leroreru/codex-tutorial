import { call, put } from "redux-saga/effects";
import apiMethod from "../../api/apiMethod";
import {
  doResponseAddUser,
  doResponseDeleteUser,
  doResponseGetUser,
  doResponseUpdateUser,
} from "../action/actionReducer";

//*fungsi ny selalu merespon actiontype
export function* handleGetAllUser(): any {
  try {
    const result = yield call(apiMethod.findAllUser);
    yield put(doResponseGetUser(result.data.result[0]));
  } catch (error) {
    yield put(doResponseGetUser({ message: error, status: 400 }));
  }
}

export function* handleAddUser(action: any): any {
  try {
    const result = yield call(apiMethod.createUserCus, action.payload);
    yield put(doResponseAddUser(result.data));
  } catch (error) {
    yield put(doResponseAddUser({ message: error, status: 400 }));
  }
}

export function* handleUpdateUser(action: any): any {
  try {
    const result = yield call(apiMethod.updateUser, action.payload);
    yield put(doResponseUpdateUser(result.data.result[0]));
  } catch (error) {
    yield put(doResponseUpdateUser({ message: error, status: 400 }));
  }
}

export function* handleDeleteUser(action: any): any {
  try {
    const result = yield call(apiMethod.deleteUser, action.payload);
    yield put(doResponseDeleteUser(result.data.result[0]));
  } catch (error) {
    yield put(doResponseDeleteUser({ message: error, status: 400 }));
  }
}

// export default {
//     handleGetAllUser,
//     handleAddUser,
//     handleUpdateUser,
//     handleDeleteUser
// }
