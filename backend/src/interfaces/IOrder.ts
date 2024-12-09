import mongoose, { Document } from "mongoose";
interface IOrderBase  {
  image: string;                    // Image URL of the product
  name: string;                     // Name of the product
  price: number;                    // Price per unit
  quantity: number;                 // Quantity ordered
  size?: string;                    // Optional size                     // Timestamp of order placement
  totalPrice: number;               // Total price
  orderState:                       // Current status
    'Placed'
    | 'Ready to Ship'
    | 'Shipped'
    | 'Reached Nearest Hub'
    | 'Out for Delivery'
    | 'Delivered'
    | 'Cancelled'
    | 'Returned';
  shippingAddress: mongoose.Types.ObjectId;         
  paymentMethod: 'Stripe' | 'Razorpay' | 'COD'; 
  trackingId?: mongoose.Types.ObjectId;              
  storeId?:mongoose.Types.ObjectId;          
  createdAt?: Date;
  updatedAt?: Date;
}


export default  interface IOrder extends IOrderBase,Document{
  _id:mongoose.Types.ObjectId;
}