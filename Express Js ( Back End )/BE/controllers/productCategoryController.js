import models from '../models/init-models.js'
import product_category from '../models/product_category.js'


const CreateProductCategory = async (req,res)=>{
try {
    const result = await models.product_category.create({
        name : req.body.name,
        description : req.body.description
    })

    res.status(202).json({
        message :"berhasil",
        data : result
    })
} catch (error) {
    res.send(error.message)
}
}

const GetAllCategory = async (req,res)=>{
    try {
        const result = await models.product_category.findAll()
        res.status(202).json({
            message : "berhasil",
            data : result
        })
    } catch (error) {
        res.send(error.message)
        
    }
}

const GetCategoryByID = async (req,res)=>{
    try {
        const result = await models.product_category.findByPk(req.params.id)
        if(!result) throw new Error('ID TIDAK DITEMUKAN')

        res.status(202).json({
            message : 'Berhasil',
            data : result
        })
        
    } catch (error) {
        res.send(error.message)
    }
}

const UpdateCategory = async ( req,res)=>{
    try {
        const idbody = await models.product_category.findByPk(req.params.id)
        if(!idbody) throw new Error('ID TIDAK DITEMUKAN')
        const result = await models.product_category.update({
            name : req.body.name,
            description : req.body.description  
        },{where : {id:idbody.id}})
        res.status(202).json({
            message : "update berhasil",
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteCategory = async ( req,res)=> {
    const idbody = await models.product_category.findByPk(req.params.id)
    if(!idbody) throw new Error('ID TIDAK DITEMUKAN')

    const result = await models.product_category.destroy({
        where :{ id : idbody.id}
    })
    res.status(202).json({
        message : `Data dengan ID ${idbody.id} telah terhapus`,
        data : result
    })
}

export default {
    CreateProductCategory,
    GetAllCategory,
    GetCategoryByID,
    UpdateCategory,
    DeleteCategory
}
