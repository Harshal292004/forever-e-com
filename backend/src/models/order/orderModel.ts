import mongoose, { Schema } from "mongoose"
import IOrder from "../../interfaces/IOrder"

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
            type:String,
            enum:['Placed','Ready to Ship','Shipped','Reached Nearest Hub','Out for Delivery','Delivered','Cancelled','Returned']
        },
        shippingAddress:{
            type:mongoose.Types.ObjectId,
            ref:'Address'
        },
        // this will depend on the product listed 
        paymentMethod:{
            type:String,
            default:"COD"
        },
        trackingId:{
            type:mongoose.Types.ObjectId,
            ref:"Tracking"
        },
        storeId:{
            type:mongoose.Types.ObjectId,
            ref:"Store"
        }
    },{timestamps:true}
)



const Order= mongoose.model<IOrder>('Order',orderModelSchema)

export default Order