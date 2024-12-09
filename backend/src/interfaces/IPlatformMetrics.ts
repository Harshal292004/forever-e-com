// platformMetricsModel.ts
import mongoose, { Document} from 'mongoose';

interface IPlatformMetricsBase {
    totalUsers: number;
    totalStores: number;
    totalProducts: number;
    totalOrders: number;
    totalRevenue: number;
    dailyActiveUsers: number;
    averageOrderValue: number;
    transactionVolume: {
        daily: number;
        weekly: number;
        monthly: number;
    };
    platformHealthIndicators: {
        systemUptime: number;
        averageResponseTime: number;
        errorRate: number;
    };
    createdAt?:Date,
    updatedAt?:Date
}


export default interface IPlatformMetrics extends IPlatformMetricsBase ,Document{
    _id:mongoose.Schema.Types.ObjectId
}