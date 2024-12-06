import { Document } from "mongoose";

export default interface IPaymentMethod  extends Document{
    type: 'stripe' | 'razorpay' | 'cod'; // Payment type (gateway or COD)
    provider?: string;            // Optional: Provider name (e.g., "Stripe", "Razorpay")
    cardDetails?: {
        cardHolderName: string;   
        last4: string;       
        expiry: string;      
    };
    upiId?: string;               // UPI ID for Razorpay or similar services
    codConfirmation?: boolean;    // Optional: Confirmation of COD (e.g., user acknowledged)
}