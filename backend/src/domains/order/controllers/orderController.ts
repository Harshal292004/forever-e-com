import { Request,Response,NextFunction } from "express"
import mongoose from "mongoose";
import IUser from "../../../interfaces/IUser";
import User from "../../../models/user/userModel";
import Product from "../../../models/product/productModel";
import Order from "../../../models/order/orderModel";
import throwError from "../../../core/utils/errorThrower";
import IProduct from "../../../interfaces/IProduct";

class orderController{

    
    async placeOrder(req:Request,res:Response){
        const {
            quantity,
            size,
            shippingAddress,
            paymentMethod,
        }=req.body
        const user=req.user
        const product= req.product
        const order= Order.create(
            {
                image:product.image[0],
                name:product.name,
                price:product.price,
                orderState:"Placed",
                quantity,
                size,
                totalPrice:quantity*product.price,
                shippingAddress,
                paymentMethod,
                storeId:product.storeId
            }
        )
        user.orderHistory?.push((await order)._id)
        res.status(200).json(
            {
                success:true,
                data:order,
                message:`Order placed for the product ${product.name} . Please proceed to choose the payment option`
            }
        )
    }

}

export default orderController