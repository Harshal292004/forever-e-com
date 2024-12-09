import mongoose, { Document } from "mongoose";
interface ICartItemBase{
    productId: mongoose.Schema.Types.ObjectId;   
    quantity:number
}

export default interface ICartItem extends ICartItemBase,Document{
    _id:mongoose.Schema.Types.ObjectId
}