import models from '../models/init-models.js'



 const CreateOrders = async (req,res) =>{

    try {
        
        const result = await models.orders.create({
        user_id : req.body.user_id,
        totalproduct : req.body.totalproduct,
        totalprice : req.body.totalprice
        })

        res.status(202).json({
            message : "succes",
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }

 }

 const GetAllOrders = async (req,res)=>{
    try {
        const result = await models.orders.findAll()

        res.status(202).json({
            message :"success",
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }
}

const GetOrdersByID = async (req,res)=>{
    try {
     
        const result = await models.orders.findAll({
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

 const UpdateOrders = async ( req,res)=>{
    try {
        const idbody = await models.orders.findAll({
            where:{ user_id : `${req.params.id}`
            }
        })
        if(idbody.length === 0) throw new Error('DATA TIDAK DITEMUKAN')

        const result = await models.orders.update ({
            totalproduct : req.body.totalproduct,
            totalprice : req.body.totalprice
            
        },{where:{user_id:`${req.params.id}`}
    })

    res.status(202).json({
        message : `update Succes`,
        data : result
    })
    } catch (error) {
        res.send(error.message)
    }
 }

 const DeleteOrders = async (req,res)=>{
    const idbody = await models.orders.findAll({
        where:{ user_id : `${req.params.id}`
        }
    })
    if(idbody.length === 0) throw new Error('DATA TIDAK DITEMUKAN')
        try {
            const result = await models.orders.destroy({
                where: {
                    user_id :`${req.params.id}`
                }

            })

            res.status(202).json({
                message : `delete Succes`,
                data : result
            }) 
        } catch (error) {
            res.send(error.message)
        }
 }
 

 export default {
    CreateOrders,
    GetAllOrders,
    GetOrdersByID,
    UpdateOrders,
    DeleteOrders
 }
