import mongoose, { Document, Schema } from 'mongoose';
import IReview from '../interfaces/IReview';


const reviewSchema: Schema<IReview> = new Schema(
  {
    productId: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0,
        required:true
    },
    comment:{
        type:String
    },
    date:{
        type:Number
    }
  }
);

// Create the Mongoose model for User with the IUser interface
const Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review;
