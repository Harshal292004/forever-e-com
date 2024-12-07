import mongoose, { Schema } from "mongoose"
import IOrder from "../interfaces/IOrder"


const orderModelSchema:Schema<IOrder>=new Schema(
    {
        image:{
            type:String
        },
        name:{
            type:String
        },
        price:{
            type:Number
        },
        quantity:{
            type:Number
        },
        size:{
            type:String
        },
        totalPrice:{
            type:Number
        },
        orderState:{
            type:String
        },
        shippingAddress:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Address'
        },
        paymentMethod:{
            type:String,
            default:"COD"
        },
        trackingId:{
            type:String
        },
        sellerId:{
            type:String 
        }
    },{timestamps:true}
)



const Order= mongoose.model<IOrder>('Order',orderModelSchema)

export default Order