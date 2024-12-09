import mongoose, { Document } from "mongoose";
interface IReviewBase extends Document{
    productId: mongoose.Schema.Types.ObjectId;  
    userId: mongoose.Schema.Types.ObjectId; 
    rating: number;                 
    comment: string;               
    createdAt?: Date;
    updatedAt?: Date;                
}

export default interface IReview extends IReviewBase{
    _id:mongoose.Schema.Types.ObjectId
}

