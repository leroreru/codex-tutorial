import axios from "../config/endpoint";


const findAllUser =()=>{
    return axios.get("/user-dto/findall")
}

const createUserCus =(data:any)=>{
    return axios.post("/user-dto/create",data)
}

const getById = (id:any) => {
    return axios.get(`/user-dto/find/${id}`)
}

const updateUser =(data:any)=>{
    console.log('user',data)
    return axios.patch(`user-dto/update/${data.id}`,data)
}

const deleteUser =(data:any)=>{
    return axios.delete(`user-dto/delete/${data.id}`,data)
}

const categoryProd =()=>{
    return axios.get('prod-cat-dto/findall')
}

// product 

const findAllProduct =()=>{
    return axios.get("/product/findall")
}

const createProduct = (data:any)=>{
    
    return axios.post("/product/create",data, {headers:{"Content-Type":"multipart/form-data"}})
}

const updateProduct = (data:any)=>{
    return axios.patch(`/product/update/${data.get("id")}`,data, {headers:{"Content-Type":"multipart/form-data"}})
}

const deleteProduct = (data:any)=>{
    return axios.delete(`/product/delete/${data.id}`,data)
}

//product category
const findAllProductCat =()=>{
    return axios.get("/prod-cat-dto/findall")
}

const createProductCat = (data:any)=>{
    return axios.post("/prod-cat-dto/create",data)
}

const updateProductCat = (data:any)=>{
    console.log('aa',data)
    return axios.patch(`/prod-cat-dto/update/${data.id}`,data)
}

const deleteProductCat = (data:any)=>{
    return axios.delete(`/prod-cat-dto/delete/${data.id}`,data)
}


//login
const loginAuth = (data:any)=>{
    return axios.post("/authlogin",data)
}


export default {
    findAllUser,
    createUserCus,
    getById,
    updateUser,
    deleteUser,
    categoryProd,
    findAllProduct,
    createProduct,
    findAllProductCat,
    updateProduct,
    deleteProduct,
    createProductCat,
    updateProductCat,
    deleteProductCat,
    loginAuth

}