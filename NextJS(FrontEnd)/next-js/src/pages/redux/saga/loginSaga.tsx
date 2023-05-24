import { call, put } from "redux-saga/effects";
import apiMethod from "../../api/apiMethod";
import { doResponseGetLogin } from "../action/actionReducer";


export function* handleLogin(action:any): any {
    try {
      const result = yield call(apiMethod.loginAuth,action.payload);
      if(result.data.token){
        localStorage.setItem('TokenNext',result.data.token)
        yield put(doResponseGetLogin({token :result.data.token,message:result.data.message}));
      }else{
        yield put(doResponseGetLogin({token :'',message:result.data.message}));
  
      }
    } catch (error) {
      yield put(doResponseGetLogin({ message: error, status: 400 }));
    }
  }