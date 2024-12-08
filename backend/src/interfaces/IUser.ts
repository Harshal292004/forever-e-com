// IUser.ts
import mongoose, { Document, Schema } from "mongoose";

// First, let's create a base interface for user properties
interface IUserBase {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    address?: mongoose.Types.ObjectId[];
    wishlist?: mongoose.Types.ObjectId[];
    cart?: mongoose.Types.ObjectId[];
    orderHistory?: mongoose.Types.ObjectId[];
    paymentMethods?: mongoose.Types.ObjectId[];
    review:mongoose.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

// Then extend it with Document to create the model interface
export  default interface IUser extends IUserBase, Document {
    _id: mongoose.Types.ObjectId;
}