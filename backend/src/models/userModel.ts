import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/IUser';
const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String, // Phone number as string to allow leading zeros
    },
    address: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address', // Reference to Address model
      },
    ],
    wishlist: [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
      },
    ],
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItem', // Reference to CartItem model
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order', // Reference to Order model
      },
    ],
    paymentMethods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaymentMethod', // Reference to PaymentMethod model
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create the Mongoose model for User with the IUser interface
const User = mongoose.model<IUser>('User', userSchema);

export default User;
