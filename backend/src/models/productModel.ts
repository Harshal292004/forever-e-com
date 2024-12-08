import mongoose, {  Schema } from 'mongoose'
import IProduct from '../interfaces/IProduct'

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
        sellerId:{
            type:String
        },
        stock:{
            type:Number
        },
        reviews:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }]
    },{timestamps:true}
)


const Product=mongoose.model<IProduct>('Product',productSchema)

export default Product