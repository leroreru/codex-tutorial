
import models from '../models/init-models.js'


const CreateCustomer = async (req,res )=>{
    try {
        const result = await models.customer.create({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            user_id : req.body.user_id
        })

        res.status(202).json({
            message :"success",
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }
}

const GetAllCustomer = async (req,res)=>{
    try {
        const result = await models.customer.findAll()

        res.status(202).json({
            message :"success",
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }
}

const GetCustomerByID = async (req,res)=>{
    try {
     
        const result = await models.customer.findAll({
            where:{ user_id : `${req.params.id}`
        }
    })
    if(result.length === 0) throw new Error('DATA TIDAK DITEMUKAN')
        res.status(202).json({
            message :"success",
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateCustomer = async (req,res)=>{
    try {
        const idbody = await models.customer.findAll({
            where:{ user_id : `${req.params.id}`
            }
    })
    if(idbody.length === 0) throw new Error('DATA TIDAK DITEMUKAN')
        const result = await models.customer.update({
            firstname : req.body.firstname,
            lastname  : req.body.lastname,
        },{where :{
            user_id :`${req.params.id}`
        }})

        res.status(202).json({
            message :"Update Success",
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteCustomer = async (req,res)=>{
    try {
        const idbody = await models.customer.findAll({
            where:{ user_id : `${req.params.id}`
            }
    })
    if(idbody.length === 0) throw new Error('DATA TIDAK DITEMUKAN')
            const result = await models.customer.destroy(
                {where: 
                {
                    user_id : `${req.params.id}`
                }
                })

                res.status(202).json({
                    message :" Delete Success",
                    data : result
                })
      
    } catch (error) {
        res.send(error.message)
    }
}

export default {

    CreateCustomer,
    GetCustomerByID,
    GetAllCustomer,
    UpdateCustomer,
    DeleteCustomer
}