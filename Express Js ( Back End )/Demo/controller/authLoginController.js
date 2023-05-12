import models from '../models/init-models.js'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

const genToken = async (req,res)=>{
try{
    const {username,password} = req.body
    if(!username && !password ) throw new Error('username dan password salah')

    const user_name = await models.users.findOne({where :{username:username}})
    if(!user_name ) throw new Error('username salah')

    const pass_word = await bcrypt.compare(password,user_name.password)
    if(!pass_word) throw new Error('password salah') 

    const token = jwt.sign({username:user_name.username},process.env.TOKEN_RAHASIA)
    res.json({
        message : 'login berhasil',
        result : token
    })
} catch(error){
    res.send(error.message)
}

}

const chkToken = async (req,res,next)=>{
    try {
    const token = req.header('Authorization')
    if(!token ){
       return res.status(400).json({
            message : 'invalid token'
        })
    }


    jwt.verify(token,process.env.TOKEN_RAHASIA)
    next()

    }catch(error){
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                message: 'invalid token'
            })
        }
        res.send(error.message)
    }
}

export default {
    genToken,
    chkToken
}