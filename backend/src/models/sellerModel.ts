import mongoose, { Schema } from "mongoose"
import ISeller from "../interfaces/ISeller"

const sellerModelSchema:Schema<ISeller>=new Schema(
    {
        orderHistory:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }]
    },{timestamps:true}
)



const Seller= mongoose.model<ISeller>('Seller',sellerModelSchema)

export default Seller