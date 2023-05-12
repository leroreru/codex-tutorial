import models from '../models/init-models.js'
import {sequelize} from '../models/init-models.js'


 const CreateOrders = async (req,res) =>{

    // try {
        
    //     const result = await models.orders.create({
    //     user_id : req.body.user_id,
    //     totalproduct : req.body.totalproduct,
    //     totalprice : req.body.totalprice
    //     })

    //     res.status(202).json({
    //         message : "success",
    //         data : result
    //     })
    // } catch (error) {
    //     res.send(error.message)
    // }

    try {
        
        
        // for (let i in req.body){
        //     const product = await models.product.findOne({
        //         where:{id : req.body[i].product_id},
        //         attributes:["price"],
        //     });
    
    
        // for(let i in req.body){
        //     array.push({
        //         user_id : req.body[i].user_id,
        //         totalprice : req.body[i].price * req.body[i].quantity,
        //         product_id : req.body[i].product_id,
        //         quantity : req.body[i].quantity,
        //         totalproduct : totalProduct
        //     })
            
            const datas = req.body;
            let totalproduct = 0;
            let totalprice = 0;
            let user_id = 0;
    
            
            datas.map (data =>{
                user_id = data.user_id
                totalprice += data.quantity * data.price;
                totalproduct += data.quantity
            })
           
            let dt = {"user_id":user_id , "totalproduct":totalproduct , "totalprice":totalprice}
        
        const data = `[${JSON.stringify(dt)}]`
        const data2 = `${JSON.stringify(datas)}`

        const query =`CALL InsertOrders('${data}','${data2}')`
         await sequelize.query(query)



        res.status(202).json({
            message : "success",

        })
    } catch (error) {
        res.send(error.message)
    }

    // try {
        
    //     const result = await models.orders.bulkCreate(req.body)
    //     res.status(202).json({
    //         message : "success",
    //         data : result
    //     })
    // } catch (error) {
    //     res.send(error.message)
    // }

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
