import {Router} from "express";
import userController from "../controller/userController.js";


const router = Router()

router.get("/",(req,res)=>{
    res.send(`Halaman Utama`)
})

export default router

router.post('/user',userController.CreateUser)

