import models from '../models/init-models.js'
import multer from 'multer'


const CreateProduct = async (req,res)=>{

    try {

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './uploads/')
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname)
            }
        })
    
    //     const upload = multer({storage: storage,
    //     filefilter:function(req,file,cb){
    //         if (!file.originalname.match(/\.(jpg|jpge|png|gif)$/)){
    //             return cd(new Error('Only image file '))

    //         }cb(null,true)
    //     }
    // }).single('image')

    //     upload(req,res, async function(error){
    //         if (error instanceof multer.MulterError){
    //             return res.status(500).json({message : "error upload gambar"})
    //         }
        
        const result = await models.product.create({
            name : req.body.name,
            description : req.body.description,
            category_id : req.body.category_id,
            price : req.body.price,
            image : req.file.filename

        }) 

        res.status(202).json({
            data : result
        })
    // })

    } catch (error) {
        res.send(error.message)
    }
}

const GetAllProduct = async (req,res)=>{
    try {
        const result = await models.product.findAll()

        res.status(202).json ({
            data : result
        })

    } catch (error) {
        res.send(error.message)
        
    }
}

const GetProductByID = async ( req,res)=>{
    try {
        const result= await models.product.findByPk(req.params.id)
        if (!result) throw new Error('ID TIDAK DITEMUKAN')

        res.status(202).json({
            data : result
        })
    } catch (error) {
        res.send(error.message)
        
    }
}

const UpdateProduct = async (req,res)=> {
    try {
        const idbody = await models.product.findByPk(req.params.id)
        if (!idbody) throw new Error('ID TIDAK DITEMUKAN')

        const result = await models.product.update({
            name : req.body.name,
            description : req.body.description,
            category_id : req.body.category_id,
            price : req.body.price,
            image : req.body.image
        },{where : {id : idbody.id}})

        res.status(202).json({
            message : `ID ${req.params.id} Berhasil di Update`,
            data : result
        })
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteProduct = async ( req, res)=>{
    try {
        const idbody = await models.product.findByPk(req.params.id)
        if (!idbody) throw new Error('ID TIDAK DITEMUKAN')

        const result = await models.product.destroy({
            where :{id: idbody.id}
        })
        res.status(202).json({
            message : `ID ${req.params.id} Berhasil di Delete`,
            data : result
        })
    } catch (error) {
        res.send(error.message)
        
    }
}
export default{
    CreateProduct,
    GetAllProduct,
    GetProductByID,
    UpdateProduct,
    DeleteProduct
}