import mongoose, { Document } from "mongoose";

export default interface ISeller extends Document{
    orderHistory?:mongoose.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}