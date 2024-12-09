// adminModel.ts
import mongoose, { Schema } from 'mongoose';
import IAdmin from '../../interfaces/IAdmin';

const adminSchema = new Schema<IAdmin>({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    password: { 
        type: String, 
        required: true 
    },
    permissions: {
        manageUsers: { type: Boolean, default: false },
        manageStores: { type: Boolean, default: false },
        manageProducts: { type: Boolean, default: false },
        manageOrders: { type: Boolean, default: false },
        viewFinancial: { type: Boolean, default: false },
        systemConfiguration: { type: Boolean, default: false }
    },
    role: {
        type: String,
        enum: ['SUPER_ADMIN', 'STORE_APPROVER', 'CONTENT_MODERATOR', 'FINANCIAL_ADMIN'],
        required: true
    },
    activityLog: [
        {
            action: { 
                type: String, 
                required: true 
            },
            timestamp: { 
                type: Date, 
                default: Date.now 
            },
            details: { 
                type: String 
            }
        }
    ],
    accountStatus: {
        type: String,
        enum: ['ACTIVE', 'SUSPENDED', 'INACTIVE'],
        default: 'ACTIVE'
    }
}, { timestamps: true });

const Admin = mongoose.model<IAdmin>('Admin', adminSchema);
export default Admin;