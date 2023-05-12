import {Router} from 'express'
import userController from '../controller/userController.js'
import authLoginController from '../controller/authLoginController.js'

const router = Router()

router.get('/',(req,res)=>{
    res.send('halaman utama')
})

router.post('/user',userController.CreateUsers)
router.post('/userSP',userController.CreateUserWithSP)

router.get('/userxcustomer',authLoginController.chkToken,userController.getUserCustomer)

router.post('/loginpage',authLoginController.genToken)

export default router
