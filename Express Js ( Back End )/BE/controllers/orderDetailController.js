
import models from "../models/init-models.js"

const CreateOrderDetail = async (req,res)=>{

    try {
        const result = await models.order_detail.create({
            order_id : req.body.order_id,
            product_id : req.body.product_id,
            quantity : req.body.quantity,
        })

        res.status(202).json({
            data : result
        })
    } catch (error) {
        res.send(error.message)
        
    }
}

    const GetAllOrderDetail = async (req,res)=>{
        try {
            const result = await models.order_detail.findAll({
                attributes:["id","order_id", "product_id", "quantity", "createat", "updateat"],
                include: [{
                    model: models.product, as:'product',
                    attributes: ["name"]
                }]
        })
            res.status(202).json({
                data : result
            })
        } catch (error) {
            res.send(error.message)            
        }
    }

    const GetOrderDetailById = async (req, res)=>{
        try {
            const result = await models.order_detail.findByPk(req.params.id)
            if(!result) throw new Error(" DATA TIDAK DITEMUKAN")
        } catch (error) {
            res.send(error.message)
        }
    }

    const UpdateOrderDetail = async(req,res)=>{
        try {
            const idbody = await models.order_detail.findByPk(req.params.id)
            if(!idbody) throw new Error('DATA TIDAK DITEMUKAN')
            
            const result = await models.order_detail.detail.update({
                order_id : req.body.order_id,
                product_id : req.body.product_id,
                quantity : req.body.quantity
            },{where:{id :idbody.id}})

            res.status(202).json({
                message : " Data berhasil di update",
                data : result
            })
        } catch (error) {
            res.send(error.message)
        }
    }

    const DeleteOrderDetail = async (req,res)=>{
        try {
            const idbody = await models.order_detail.findByPk(req.params.id)
            if(!idbody) throw new Error('DATA TIDAK DITEMUKAN')

            const result = await models.order_detail.destroy({
                where : { id : idbody.id}
            })

            res.status(202).json({
                message : "DATA BERHASIL DI HAPUS",
                data : result
            })
        } catch (error) {
            res.send(error.message)
        }
    }

    export default {
        CreateOrderDetail,
        GetAllOrderDetail,
        GetOrderDetailById,
        UpdateOrderDetail,
        DeleteOrderDetail
    }