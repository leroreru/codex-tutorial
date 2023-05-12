import models from '../models/init-models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import "dotenv/config"

const authLogin = async (req,res)=>{

    try {
        
        const {username,password} = req.body

        const user = await models.users.findOne({ where : {username}})
        
        if (!user) {
            return res.status(400).json({ message: 'Email salah.' });
          }
    

    const result = await bcrypt.compare(password, user.password) 
    const token = jwt.sign({username:user.username},process.env.SECRET_TOKEN)
        if (result) {
            return res.status(202).json({
                message :'loginsucces',
                result_token : token
        
            })
        } else {

           return  res.status(202).json({
                message :' password salah'
        
            })
        }

    } catch (error) {
        res.send(error.message)
    }

}


const CheckToken = (req,res,next)=>{
    try{
        
        const token = req.header('Authorization')
        // console.log(req.headers.authorization)
        if(!token) return res.send('Access Denied')
        
            jwt.verify(token,process.env.SECRET_TOKEN)
            next()


        } catch (error){
            res.send(error.message);
        }
        
    } 

export default{
    authLogin,
    CheckToken
}