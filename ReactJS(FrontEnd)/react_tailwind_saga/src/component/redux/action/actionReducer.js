import apiMethod from "../../api/apiMethod";
import ActionTypes from "./actionType";
import alert from "../../config/alert";

export const doRequestGetUser=()=>{
  return{
    type: ActionTypes.REQ_GET_USER,
  }
}

export const doResponseGetUser =(payload)=>{
  return{
    type: ActionTypes.RES_GET_USER,
    payload
  }
}
 
// payload tidak harus ny payload jika req
export const doRequestAddUser=(payload)=>{
  return{
    type: ActionTypes.REQ_ADD_USER,
    payload
  }
}

export const doResponseAddUser =(payload)=>{
 
  return{
    type: ActionTypes.RES_ADD_USER,
    payload
  }
}

export const doRequestUpdateUser=(payload)=>{
  return{
    type: ActionTypes.REQ_UPDATE_USER,
    payload
  }
}

export const doResponseUpdateUser =(payload)=>{
  return{
    type: ActionTypes.RES_UPDATE_USER,
    payload
  }
}


export const doRequestDeleteUser=(payload)=>{
  return{
    type: ActionTypes.REQ_DEL_USER,
    payload
  }
}

export const doResponseDeleteUser =(payload)=>{
  return{
    type: ActionTypes.RES_DEL_USER,
    payload
  }
}













export const getAll =()=> async (dispatch)=>{
try {
    const res = await apiMethod.findAllUser(); 
    dispatch({
    type: ActionTypes.GET_USER, 
    payload: res.data.result[0]
    }); 
}catch (err) {
    alert(err);
}
    };

export const UpdateUser =(data)=> async (dispatch)=>{
        try {
            const res = await apiMethod.updateUser(data);
            console.log(res)
            dispatch({
            type: ActionTypes.UPDATE_USER, 
            payload: res.data.result[0]
        
        }); 

        if (res.status){
            if(res.status === 200){
              alert.succesAlert(`ID ${res.data.result}`, `${res.data.message}`)
            }
            else if (res.status === 400){
              alert.unSuccesAlert(`ID ${res.data.result}`, `${res.data.message}`)
            }
          }
        }catch (err) {
            alert.unSuccesAlert(err);
        }
    };

    export const delUser =(data)=> async (dispatch)=>{
        try {
            const res = await apiMethod.deleteUser(data); 
            dispatch({
            type: ActionTypes.DEL_USER, 
            payload: res.data.result[0]
            }); 

            if (res.status){
                if(res.status === 200){
                  alert.succesAlert(`ID ${res.data.result}`, `${res.data.message}`)
                }
                else if (res.status === 400){
                  alert.unSuccesAlert(`ID ${res.data.result}`, `${res.data.message}`)
                }
                
              }
            }catch (err) {
                alert.unSuccesAlert(err);
            }
            };

            // product 
            export const getAllProduct =()=> async (dispatch)=>{
              try {
                  const res = await apiMethod.findAllProduct(); 
                  dispatch({
                  type: ActionTypes.GET_PRODUCT, 
                  payload: res.data.result
                  }); 
                  // console.log('payload',res.data.result[0])
              }catch (err) {
                  alert(err);
              }
                  };
        
                  export const createProduct =(data)=> async (dispatch)=>{
                    try {
                        const res = await apiMethod.createProduct(data); 
                        dispatch({
                        type: ActionTypes.ADD_PRODUCT, 
                        payload: res.data.result
                        }); 
                        if (res.status){
                            if(res.data.status === 200){
                              alert.succesAlert(`ID ${res.data.result.id}`, `${res.data.message}`)
                            }
                            else if (res.data.status === 400){
                              alert.unSuccesAlert(`ID ${res.data.result.id}`, `${res.data.message}`)
                            }
                            
                          }

                    }catch (err) {
                        alert.unSuccesAlert(err);
                    }
                        };

                        export const updateProduct =(id,data)=> async (dispatch)=>{
                          try {
                              const res = await apiMethod.updateProduct(id,data); 
                              dispatch({
                              type: ActionTypes.UPDATE_PRODUCT, 
                              payload: res.data.result
                              }); 
                            // console.log(res.data.status)
                              if (res.status){
                                if(res.data.status === 200){
                                  alert.succesAlert(`ID ${res.data.result[1][0].id}`, `${res.data.message}`)
                                }
                                else if (res.data.status === 400){
                                  alert.unSuccesAlert(`ID ${res.data.result[1][0].id}`, `${res.data.message}`)
                                }
                              }
                          }catch (err) {
                              alert.unSuccesAlert(err);
                          }
                              };

                              export const deleteProduct =(data)=> async (dispatch)=>{
                                try {
                                    const res = await apiMethod.deleteProduct(data); 
                                    // console.log('payload',res)
                                    dispatch({
                                    type: ActionTypes.DEL_PRODUCT, 
                                    payload: res.data.result
                                    }); 
                                    if (res.status){
                                        if(res.status === 200){
                                          alert.succesAlert(`ID ${res.data.result.id}`, `${res.data.message}`)
                                        }
                                        else if (res.status === 400){
                                          alert.unSuccesAlert(`ID ${res.data.result .id}`, `${res.data.message}`)
                                        }
                                        
                                      }
                                }catch (err) {
                                    alert.unSuccesAlert(err);
                                }
                                    };
              // product cateogry
              export const getAllCategory =()=> async (dispatch)=>{
                try {
                    const res = await apiMethod.findAllProductCat(); 
                    dispatch({
                    type: ActionTypes.GET_PRODUCTCAT, 
                    payload: res.data.result
                    }); 
                }catch (err) {
                    alert(err);
                }
                    };