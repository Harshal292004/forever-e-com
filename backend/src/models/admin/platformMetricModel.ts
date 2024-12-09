import { Schema } from "mongoose"
import mongoose from "mongoose"
import IPlatformMetrics from "../../interfaces/IPlatformMetrics"

const platformMetricsModelSchema = new Schema<IPlatformMetrics>({
    totalUsers: { type: Number, default: 0 },
    totalStores: { type: Number, default: 0 },
    totalProducts: { type: Number, default: 0 },
    totalOrders: { type: Number, default: 0 },
    totalRevenue: { type: Number, default: 0 },
    dailyActiveUsers: { type: Number, default: 0 },
    averageOrderValue: { type: Number, default: 0 },
    transactionVolume: {
        daily: { type: Number, default: 0 },
        weekly: { type: Number, default: 0 },
        monthly: { type: Number, default: 0 }
    },
    platformHealthIndicators: {
        systemUptime: { type: Number, default: 100 },
        averageResponseTime: { type: Number, default: 0 },
        errorRate: { type: Number, default: 0 }
    }
}, { timestamps: true });

const PlatformMetrics = mongoose.model<IPlatformMetrics>('PlatformMetrics', platformMetricsModelSchema);
export default PlatformMetrics;