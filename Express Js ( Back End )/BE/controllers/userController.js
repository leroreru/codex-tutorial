import bcrypt from 'bcrypt'//install dlu npm install bcrypt

import models,{sequelize} from '../models/init-models.js'
// import { Sequelize } from 'sequelize';



const CreateUser = async (req , res)=> {
    
    try {

        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(req.body.password, salt)
        // const result = await models.users.create({
        //     username : req.body.username,
        //     password : passHash
        // })
        req.body.password = passHash
        const data = `[${JSON.stringify(req.body)}]`

        const query = `CALL InsertUsersCustomer('${data}')`
        const result = await sequelize.query(query)
      

        
        res.status(202).json({
            message :"success",
         data: result
        })
        
    } catch (error) {
        res.send(error.message)
    }

}

const GetUser = async (req,res)=> {
    
try {
    const users = await models.users.findAll(
        {      
            include:[
                { 
                    model: models.customer, as: 'customers',
                    attributes : ["firstname","lastname"]
                }
                ,
                {
                    model:models.orders, as: 'orders',
                    attributes : ["totalproduct","totalprice"],
                    required: true,
                    include:[{
                        model :models.order_detail,as : 'order_details',
                        attributes :["order_id","product_id","quantity"],
                        include:[{
                            model:models.product, as :'product',
                            attributes:['name']
                        }]
                    }]
                }

             ]
        }
    )


    res.status(202).json({
        message :"success",
     data: users
    })
} catch (error) {
    res.send(error.message)
}
}


const getUserByView = async(req,res)=>{
    try {
      
        // const query = `select * from data_purchase`
        // const result = await sequelize.query(query)
        const result = await models.data_purchase.findAll() //udah manggil view
        
        res.status(202).json({
            message :"success",
         data: result
        })
    } catch (error) {
        res.send(error.message)
        
    }
}

const GetUserID = async (req,res)=> {
    
    try {
        const users = await models.users.findByPk(req.params.id);
        if(!users) throw new Error('DATA TIDAK DITEMUKAN')
    
        res.status(202).json({
            data: users
        })
        
    } catch (error) {
        res.send(error.message)
    }
    }


const UpdateUsers = async (req,res)=> {
    
        try {
            const idbody = await models.users.findByPk(req.params.id);
            if(!idbody) throw new Error("ID TIDAK TEMUKAN")
            
                let password = idbody.password
               let salt = await bcrypt.genSalt(10);
                let passHash = await bcrypt.hash(req.body.password, salt)

                if(req.body.password){
                    password=passHash
                }
                const result = await models.users.update({
                    username : req.body.username,
                    password : password
                },{where: 
                     
                    {
                        id :idbody.id
                    }
                    
                    })

            res.status(202).json({
                message:"data berhasil di update",
                data : result
            })
        } catch (error) {
            res.send(error.message)
        }

        }
    

const DeleteUser = async (req,res)=>{
        try {
            const idbody = await models.users.findByPk(req.params.id);
            if(!idbody) throw new Error("ID TIDAK TEMUKAN")
            
                const result = await models.users.destroy(
                    {where: 
                     
                    {
                        id :idbody.id
                    }
                    
                    })

            res.status(202).json({
                message:"data berhasil di delete",
                data : result
            })
        } catch (error) {
            res.send(error.message)
        }
    }


export default {
    GetUser,
    GetUserID,
    CreateUser,
    UpdateUsers,
    DeleteUser,
    getUserByView
}