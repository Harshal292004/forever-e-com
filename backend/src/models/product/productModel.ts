import mongoose, {  Schema } from 'mongoose'
import IProduct from '../../interfaces/IProduct'

const productSchema:Schema<IProduct>=new Schema(
    {
        name:{
            type:String
        },
        description:{
            type:String
        },
        price:{
            type:Number
        },
        image:[{
            type:String
        }],
        category:{type:String},
        subCategory:{type:String},
        sizes:[
            {
                type:String
            }
        ],
        bestseller:{
            type:Boolean,
            default:false
        },
        storeId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Store"
        },
        stock:{
            type:Number
        },
        reviews:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }],
        policies: {
            returnPolicy:{
                type:String ,
                default:  "No returns after 15 days" 
            },
            refundPolicy:{
                type:String,
                default:"Refund processed within 7 days" 
            },
            shippingPolicy:{
                type:String, 
                default:"Ships in 3-5 business days" 
            }
        },
        payment:{
            type:Boolean
        }
    },{timestamps:true}
)


const Product=mongoose.model<IProduct>('Product',productSchema)

export default Product