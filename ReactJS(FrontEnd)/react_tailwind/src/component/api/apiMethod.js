import axios from "../config/endpoint.js";


const findAllUser =()=>{
    return axios.get("/user-dto/findall")
}

const createUserCus =(data)=>{
    // console.log("enp",data)
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




export default {
    findAllUser,
    createUserCus,
    getById,
    updateUser,
    deleteUser,
    categoryProd
}