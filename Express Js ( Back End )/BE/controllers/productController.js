import models from '../models/init-models.js'
import multer from 'multer'
import product from '../models/product.js'
import fs from 'fs'
import { promisify } from 'util'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
    }
})

const upload = multer({storage: storage,
filefilter:function(req,file,cb){
    if (!file.originalname.match(/\.(jpg|jpge|png|gif)$/)){
        return cd(new Error('Only image file '))

    }cb(null,true)
}
}).single('image')

const CreateProduct = async (req,res)=>{

    try {


        upload(req,res, async function(error){

            const checkProduct= await models.product.findOne({
                where: { name: req.body.name }
            });

            if (checkProduct) {
                return res.status(400).json({ 
                    message : 'Produk sudah ada', 
                });
            }
            
            const categoryBody = await req.body.category_id
            
            if(categoryBody == '') {
                return res.status(500).json({
                    message: 'Category tidak boleh kosong!'
                })
            }

            if (error instanceof multer.MulterError){
                return res.status(500).json({message : "error upload gambar"})
            }
        
        
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
    })

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
        // upload(req,res, async function(error){
        //     if (error instanceof multer.MulterError){
        //         return res.status(500).json({message : "error upload gambar"})
        //     }

        const idbody = await models.product.findByPk(req.params.id)
        if (!idbody) throw new Error('ID TIDAK DITEMUKAN')


        const oldImage = `./uploads/` + product.image
        if (fs.existsSync(oldImage)){
            fs.unlinkSync(oldImage)
        }
    
        const result = await models.product.update({
            name : req.body.name,
            description : req.body.description,
            category_id : req.body.category_id,
            price : req.body.price,
            image : req.file.filename
        },{where : {id : idbody.id}})

        res.status(202).json({
            message : `ID ${req.params.id} Berhasil di Update`,
            data : result
        })

    // })
    } catch (error) {
        res.send(error.message)
    }
}

const DeleteProduct = async ( req, res)=>{
    try {
        const idbody = await models.product.findByPk(req.params.id)
        if (!idbody) throw new Error('ID TIDAK DITEMUKAN')
        const namaFile = idbody.image
        const path = `./uploads/${namaFile}`
        const unlink = promisify(fs.unlink)
        await unlink(path)
        await models.product.destroy({
            where :{id: idbody.id}
        })
        
        res.status(202).json({
            message : `ID ${req.params.id} Berhasil di Delete`,
        })
    } catch (error) {
        res.send(error.message)
        
    }
}


const GetImage = async(req,res)=>{
   res.sendFile(join(process.cwd(),'uploads/' + req.param.image))
}


export default{
    CreateProduct,
    GetImage,
    GetAllProduct,
    GetProductByID,
    UpdateProduct,
    DeleteProduct
}