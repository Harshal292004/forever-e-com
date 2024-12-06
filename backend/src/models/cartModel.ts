import mongoose, { Schema } from "mongoose";
import ICartItem from "../interfaces/ICartItem";


const cartModelSchema:Schema<ICartItem>=new Schema(
    {
        productId:{
            type: mongoose.Schema.Types.ObjectId
        }
    }
)

const CartItem=mongoose.model<ICartItem>("CartItem",cartModelSchema)