import mongoose, { Schema } from "mongoose";
import IStore from "../../interfaces/IStore";

const storeModelSchema= new Schema<IStore>(
    {
        name:{
            type:String
        },
        description:{
            type:String
        },
        seller:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Seller"
            }
        ],
        logo:{
            type:String
        },
        GSTIN:{
            type:String
        },
        bannerImage:{
            type:String
        },
        contactEmail:{
            type:String
        },
        phoneNumber:{
            type:String
        },
        address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
        },
        status:{
            type:String,
            enum:['PENDING','APPROVED','REJECTED']
        },
        orderHistory:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }],
        products:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
            }
        ],
        platformCommissionRate:{
            type:Number
        },
        totalProductsListed:{
            type:Number
        },
        totalSales:{
            type:Number
        },
        acceptedPaymentMethods:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"PaymentMethod"
        }],
        rating:{
            type:Number,
            default:0
        },
        reviews:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }]
    },{timestamps:true}
)

const Store=mongoose.model<IStore>("Store",storeModelSchema)

export default Store