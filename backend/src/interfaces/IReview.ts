import mongoose, { Document } from "mongoose";
interface IReviewBase extends Document{
    productId: mongoose.Types.ObjectId;  
    userId: mongoose.Types.ObjectId; 
    rating: number;                 
    comment: string;               
    createdAt?: Date;
    updatedAt?: Date;                
}

export default interface IReview extends IReviewBase{
    _id:mongoose.Types.ObjectId
}

