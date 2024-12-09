import mongoose, { Schema } from "mongoose";
import ICartItem from "../../interfaces/ICartItem";


const cartModelSchema:Schema<ICartItem>=new Schema(
    {
        productId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        quantity: {
            type: Number,
            default: 1, // Default quantity is 1 if not specified
            min: 1, // Quantity can't be less than 1
        }
    }
)

const CartItem=mongoose.model<ICartItem>("CartItem",cartModelSchema)
export default CartItem