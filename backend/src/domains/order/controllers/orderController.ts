import { Request,Response,NextFunction } from "express"
import Order from "../../../models/order/orderModel";
import throwError from "../../../core/utils/errorThrower";
class orderController{

    
    async placeOrder(req:Request,res:Response){
        try {
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
        } catch (error) {
            throwError(404,"something went wrong while placing order")
        }
    }

    async cancelOrder(req:Request,res:Response){
        try{
            const order= req.order
            order.orderState="Cancelled"
            await order.save()
            if(order.payment){
                //TODO initiate refund using admin 
            }
            res.status(200).json(
                {
                    success:true,
                    data:null,
                    message:"Order cancelled ,refund will be initiated in 3-5 working days"
                }
            )
        }catch(error){
            throwError(404,"Order wan't Canceled something went wrong")
        }
    }

    async payForTheOrder(req:Request,res:Response){
        try{
            const order=req.order
            if(order.paymentMethod==="COD"){
                return;
            }

            //add the payment method here 
            if(order.paymentMethod==="Razorpay"){
                //razorpay
            }else{
                //stripe
            }
            order.payment=true
            await order.save()
        }catch(error){
            throwError(404,"")
        }

    }

    async returnOrder(req:Request,res:Response){
        try{
            const order=req.order 
            order.orderState="Returned"
            await order.save()
        }catch(error){
            throwError(404,"")
        }
    }
}

export default orderController