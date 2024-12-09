import mongoose, { Document } from "mongoose";

interface IUserBase {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    address?: mongoose.Schema.Types.ObjectId[];
    wishlist?: mongoose.Schema.Types.ObjectId[];
    cart?: mongoose.Schema.Types.ObjectId[];
    orderHistory?: mongoose.Schema.Types.ObjectId[];
    paymentMethods?: mongoose.Schema.Types.ObjectId[];
    review:mongoose.Schema.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

export  default interface IUser extends IUserBase, Document {
    _id: mongoose.Schema.Types.ObjectId;
}