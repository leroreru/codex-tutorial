import models, { sequelize } from "../models/init-models.js"
import bcrypt  from "bcrypt"

const CreateUsers = async (req,res)=>{
    let result = ''
try {
    
    const salt = await bcrypt.genSalt(10)
    const passHash = await bcrypt.hash(req.body.password,salt)

    result = await models.users.create({
        username : req.body.username,
        password : passHash
    })

    const result2 = await models.customer.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        user_id : result.id

    })

    res.status(202).json({
        message : "data berhasil dibuat",
        data : result
    })
} catch (error) {
    console.log(result)
    if(result){

    await models.users.destroy({where :{id : result.id}})

    }

    res.send(error.message) 
}
}

const CreateUserWithSP = async (req,res)=>{
try {
    
    const {username,password,firstname,lastname} = req.body

    if (!username || !password || !firstname || !lastname) {
        return res.status(400).send('Input data tidak lengkap');
      }

    const salt = await bcrypt.genSalt(10)
    const passHash = await bcrypt.hash(password,salt)
    

    // console.log(req.body)
    await sequelize.query(`CALL InsertWithSP('${username}','${passHash}','${firstname}','${lastname}')`)

    
    res.send('Create Data Succes')
} catch (error) {
    res.send(error.message)
}
}

const getUserCustomer = async (req,res)=>{
    try {
        const result = await models.users.findAll({
            attributes:['id','username','password'],
           include :[
            {
                model : models.customer ,as: 'customers',
                attributes:['user_id','firstname','lastname']
            }
           ] 
        })

        res.status(202).json({
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }
}

export default {
    CreateUsers,
    CreateUserWithSP,
    getUserCustomer
    }