import IAddress  from "./IAddress";
import mongoose, { Document } from "mongoose";
export default interface IOrder extends Document {
  image: string;                    // Image URL of the product
  name: string;                     // Name of the product
  price: number;                    // Price per unit
  quantity: number;                 // Quantity ordered
  size?: string;                    // Optional size
  date:number;                       // Timestamp of order placement
  totalPrice: number;               // Total price
  orderState:                       // Current status
    | 'Placed'
    | 'Ready to Ship'
    | 'Shipped'
    | 'Reached Nearest Hub'
    | 'Out for Delivery'
    | 'Delivered'
    | 'Cancelled'
    | 'Returned';
  shippingAddress: mongoose.Schema.Types.ObjectId         // Shipping address
  paymentMethod: 'Stripe' | 'Razorpay' | 'COD'; // Payment method
  trackingId?: string;              // Optional tracking ID
  sellerId: string;                 // New: Seller associated with the order
}
