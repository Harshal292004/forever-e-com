import mongoose, { Document } from "mongoose"

interface IAdminBase{
    name: string;
    password: string;
    permissions: {
      manageUsers: boolean;
      manageStores: boolean;
      manageProducts: boolean;
      manageOrders: boolean;
      viewFinancial: boolean;
      systemConfiguration: boolean;
    };
    role: 'SUPER_ADMIN' | 'STORE_APPROVER' | 'CONTENT_MODERATOR' | 'FINANCIAL_ADMIN';
    activityLog?: Array<{
      action: string;
      timestamp: Date;
      details: string;
    }>;
    accountStatus: 'ACTIVE' | 'SUSPENDED' | 'INACTIVE';
    createdAt?: Date;
    updatedAt?: Date;
  }
export default interface IAdmin extends Document,IAdminBase{
    _id:mongoose.Types.ObjectId
}


