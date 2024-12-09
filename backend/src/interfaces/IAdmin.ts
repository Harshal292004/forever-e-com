import mongoose, { Document } from "mongoose"

interface IAdminBase{
    // Personal Information
    name: {
      firstName: string;
      lastName?: string;
    };
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
  
    systemMetrics?: {
      totalUsers: number;
      totalStores: number;
      totalProducts: number;
      totalOrders: number;
      totalRevenue: number;
    };
  
    activityLog?: Array<{
      action: string;
      timestamp: Date;
      details: string;
    }>;
  
    // Contact Information
    contactDetails?: {
      officeEmail?: string;
      workPhoneNumber?: string;
      department?: string;
    };
  
    // Account Status
    accountStatus: 'ACTIVE' | 'SUSPENDED' | 'INACTIVE';
  
    // Security Features
    twoFactorAuthentication?: {
      enabled: boolean;
      secret?: string;
    };
  
    // Timestamps
    createdAt?: Date;
    updatedAt?: Date;
  }
export default interface IAdmin extends Document,IAdminBase{
    _id:mongoose.Schema.Types.ObjectId
}


