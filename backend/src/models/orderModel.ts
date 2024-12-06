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
        date:{
            type:Number
        },
        totalPrice:{
            type:Number
        },
        orderState:{
            type:String
        },
        shippingAddress:{
            type:mongoose.Schema.Types.ObjectId
        },
        paymentMethod:{
            type:String
        },
        trackingId:{
            type:String
        },
        sellerId:{
            type:String 
        }
    }
)



const Order= mongoose.model<IOrder>('Order',orderModelSchema)