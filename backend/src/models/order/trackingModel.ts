import mongoose,{ Schema } from "mongoose";
import ITracking from "../../interfaces/ITracking";
const trackingSchema = new Schema<ITracking>({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },
    currentLocation: {
        type: {
            lat: { type: Number },
            lng: { type: Number },
        },
        default: null,
    },
    orderState: {
        type: String,
        enum: [
            "Placed",
            "Ready to Ship",
            "Shipped",
            "Reached Nearest Hub",
            "Out for Delivery",
            "Delivered",
            "Cancelled",
            "Returned",
        ],
        default: "Placed",
    },
    events: [
        {
            status: { type: String },
            timestamp: { type: Date, default: Date.now },
            location: {
                type: {
                    lat: { type: Number },
                    lng: { type: Number },
                },
                default: null,
            },
            message: { type: String },
        },
    ],
});

const Tracking = mongoose.model<ITracking>("Tracking", trackingSchema);

export default Tracking;