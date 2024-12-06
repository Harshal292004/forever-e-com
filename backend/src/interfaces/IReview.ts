import mongoose from "mongoose";
export default interface IReview {
    productId: mongoose.Types.ObjectId;  
    userId: mongoose.Types.ObjectId; 
    rating: number;                 
    comment: string;                
    createdAt?: Date;
    updatedAt?: Date;                
}
