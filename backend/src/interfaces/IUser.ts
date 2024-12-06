import mongoose from "mongoose";

export default interface IUser {
    name: string;                   
    email: string;                  
    password:string;
    phoneNumber?: string;           
    address?: mongoose.Schema.Types.ObjectId[];  //address need to be changing as well         
    wishlist?: mongoose.Schema.Types.ObjectId[]; //cause we need this to be changing with the change by the product manager              
    cart?:mongoose.Schema.Types.ObjectId[];              
    orderHistory?:mongoose.Schema.Types.ObjectId[];         
    paymentMethods?: mongoose.Schema.Types.ObjectId[]; 
    createdAt?: Date;                // Date when the user account was created
    updatedAt?: Date;               // Last updated timestamp (optional)
}
