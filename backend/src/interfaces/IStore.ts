import mongoose,{ Document } from "mongoose";

interface IStoreBase{
    name:string;
    description?:string;
    seller:mongoose.Types.ObjectId[];
    logo?:string;
    GSTIN:string
    bannerImage?:string;
    contactEmail:string;
    phoneNumber?:string;
    address?:mongoose.Types.ObjectId;
    status:'PENDING'|'APPROVED'|'REJECTED';
    orderHistory:mongoose.Types.ObjectId[]
    products:mongoose.Types.ObjectId[]
    createdAt?:Date;
    updatedAt?:Date
    platformCommissionRate?: number;
    totalProductsListed?: number;
    totalSales?: number;
    acceptedPaymentMethods:mongoose.Types.ObjectId[]
    rating:number;
    reviews:mongoose.Types.ObjectId[]
    
}


export default interface IStore extends Document , IStoreBase{
    _id:mongoose.Types.ObjectId
}