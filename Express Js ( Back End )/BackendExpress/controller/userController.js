import models from "../models/init-models.js"
import bcrypt from "bcrypt"

const CreateUser = async (req,res)=>{
try {

    const salt = await bcrypt.genSalt(10)
    const passHash = await bcrypt.hash(req.body.password,salt)
    const result = await models.users.create({
        username : req.body.username,
        password : passHash
    })

    res.status(202).json({
        message : "Data berhasil dibuat",
        data : result
    })
    
} catch (error) {
    res.send(error.message)
}
}

export default {
    CreateUser
}