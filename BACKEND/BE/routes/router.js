import { Router } from "express";
import userController from '../controllers/userController.js'
import customerController from "../controllers/customerController.js";
import ordersController from "../controllers/ordersController.js";
import product from "../models/product.js";
import productCategoryController from "../controllers/productCategoryController.js";
import productController from "../controllers/productController.js";
import orderDetailController from "../controllers/orderDetailController.js";
const router = Router()


    
    router.get("/",(request,response)=>{
        response.send("Selamat Belajar BackEnd")
        
    })

export default router //agar bisa di akses file lain

router.post('/user',userController.CreateUser)
router.get('/user/:id',userController.GetUserID)
router.get('/user',userController.GetUser)
router.patch('/user/:id',userController.UpdateUsers)
router.delete('/user/:id',userController.DeleteUser)


router.post('/customer',customerController.CreateCustomer)
router.get('/customer',customerController.GetAllCustomer)
router.get('/customer/:id',customerController.GetCustomerByID)
router.patch('/customer/:id',customerController.UpdateCustomer)
router.delete('/customer/:id',customerController.DeleteCustomer)

router.post('/orders',ordersController.CreateOrders)
router.get('/orders',ordersController.GetAllOrders)
router.get('/orders/:id',ordersController.GetOrdersByID)
router.patch('/orders/:id',ordersController.UpdateOrders)
router.delete('/orders/:id',ordersController.DeleteOrders)

router.post('/category',productCategoryController.CreateProductCategory)
router.get('/category',productCategoryController.GetAllCategory)
router.get('/category/:id',productCategoryController.GetCategoryByID)
router.patch('/category/:id',productCategoryController.UpdateCategory)
router.delete('/category/:id',productCategoryController.DeleteCategory)

router.post('/product',productController.CreateProduct)
router.get('/product',productController.GetAllProduct)
router.get('/product/:id',productController.GetProductByID)
router.patch('/product/:id',productController.UpdateProduct)
router.delete('/product/:id',productController.DeleteProduct)

router.post('/orderdetail',orderDetailController.CreateOrderDetail)
router.get('/orderdetail',orderDetailController.GetAllOrderDetail)
router.get('/orderdetail',orderDetailController.GetOrderDetailById)
router.patch('/orderdetail',orderDetailController.UpdateOrderDetail)
router.delete('/orderdetail',orderDetailController.DeleteOrderDetail)