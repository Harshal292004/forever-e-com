import mongoose, { Document } from "mongoose";
interface ISellerBase{
    name:{
        firstName:string
        lastName?:string
    }
    email:string
    phoneNumber?:string
    storeName?:string
    businessType?: 'INDIVIDUAL' | 'COMPANY' | 'PARTNERSHIP';
    businessRegistrationNumber?: string;
    store?:mongoose.Types.ObjectId
    createdAt?: Date;
    updatedAt?: Date;
    notificationPreferences?: {
        email: boolean;
        sms: boolean;
        platformNotifications: boolean;
    };
    cardDetails?: {
        cardHolderName: string;   
        last4: string;       
        expiry: string;      
    };
    isVerified:boolean;
    address:mongoose.Types.ObjectId
    accountStatus: 'ACTIVE' | 'SUSPENDED' | 'PENDING_VERIFICATION';
}


export default interface ISeller extends Document , ISellerBase{
    _id:mongoose.Types.ObjectId
}