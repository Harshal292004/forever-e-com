import mongoose, { Document } from "mongoose";
export default interface ICartItem extends Document {
    productId: mongoose.Schema.Types.ObjectId;             // Unique identifier for the product
}
