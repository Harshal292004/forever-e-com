import mongoose,{ Document } from "mongoose";

interface IStoreBase{
    name:string;
    description?:string;
    seller:mongoose.Schema.Types.ObjectId[];
    logo?:string;
    GSTIN:string
    bannerImage?:string;
    contactEmail:string;
    phoneNumber?:string;
    address?:mongoose.Schema.Types.ObjectId;
    status:'PENDING'|'APPROVED'|'REJECTED';
    orderHistory:mongoose.Schema.Types.ObjectId[]
    products:mongoose.Schema.Types.ObjectId[]
    createdAt?:Date;
    updatedAt?:Date
    platformCommissionRate?: number;
    totalProductsListed?: number;
    totalSales?: number;
    acceptedPaymentMethods:mongoose.Schema.Types.ObjectId[]
}

export default interface IStore extends Document , IStoreBase{
    _id:mongoose.Schema.Types.ObjectId
}