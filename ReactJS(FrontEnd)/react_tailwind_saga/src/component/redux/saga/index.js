import ActionType from "../action/actionType";
import { takeEvery, all } from 'redux-saga/effects'
import { handleGetAllUser , handleAddUser , handleUpdateUser, handleDeleteUser } from './userSaga'
 
function* watchAll(){
    yield all ([
        takeEvery(ActionType.REQ_GET_USER,handleGetAllUser),
        takeEvery(ActionType.REQ_ADD_USER,handleAddUser),
        takeEvery(ActionType.REQ_UPDATE_USER,handleUpdateUser),
        takeEvery(ActionType.REQ_DEL_USER,handleDeleteUser),
    ])
}

export default watchAll