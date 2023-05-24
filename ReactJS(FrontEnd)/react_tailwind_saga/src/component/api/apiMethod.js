import axios from "../config/endpoint.js";


const findAllUser =()=>{
    return axios.get("/user-dto/findall")
}

const createUserCus =(data)=>{
    return axios.post("/user-dto/create",data)
}

const getById = (id) => {
    return axios.get(`/user-dto/find/${id}`)
}

const updateUser =(data)=>{
    return axios.patch(`user-dto/update/${data.id}`,data)
}

const deleteUser =(data)=>{
    return axios.delete(`user-dto/delete/${data.id}`,data)
}

const categoryProd =()=>{
    return axios.get('prod-cat-dto/findall')
}

// product 

const findAllProduct =()=>{
    return axios.get("/product/findall")
}

const createProduct = (data)=>{
    
    return axios.post("/product/create",data, {headers:{"Content-Type":"multipart/form-data"}})
}

const updateProduct = (id,data)=>{
    return axios.patch(`/product/update/${id}`,data, {headers:{"Content-Type":"multipart/form-data"}})
}

const deleteProduct = (data)=>{
    return axios.delete(`/product/delete/${data.id}`,data)
}

//product category
const findAllProductCat =()=>{
    return axios.get("/prod-cat-dto/findall")
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
    deleteProduct
}