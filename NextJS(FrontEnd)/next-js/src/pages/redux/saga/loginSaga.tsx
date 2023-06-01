import { call, put } from "redux-saga/effects";
import apiMethod from "../../api/apiMethod";
import { doResponseGetLogin } from "../action/actionReducer";


const expirationTime:any = Date.now() + 600000; // Contoh: Waktu kadaluwarsa dalam 1 menit (60.000 milidetik)
export function* handleLogin(action:any): any {
    try {
      const result = yield call(apiMethod.loginAuth,action.payload);
      if(result.data.token){
        localStorage.setItem('TokenNext',result.data.token)
        localStorage.setItem('TokenNextExpiration', expirationTime);
        yield put(doResponseGetLogin({token :result.data.token,message:result.data.message,status:result.data.status}));
      }else{
        yield put(doResponseGetLogin({token :'',message:result.data.message,status:result.data.status}));
  
      }
    } catch (error) {
      yield put(doResponseGetLogin({ message: error, status: 400 }));
    }
  }