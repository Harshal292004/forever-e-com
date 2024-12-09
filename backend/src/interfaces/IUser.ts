import mongoose, { Document } from "mongoose";

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

export  default interface IUser extends IUserBase, Document {
    _id: mongoose.Types.ObjectId;
}