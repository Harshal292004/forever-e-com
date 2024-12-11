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
  shippingAddress: mongoose.Schema.Types.ObjectId;         
  paymentMethod: 'Stripe' | 'Razorpay' | 'COD'; 
  payment:boolean;
  trackingId?: mongoose.Schema.Types.ObjectId;              
  storeId?:mongoose.Schema.Types.ObjectId;          
  createdAt?: Date;
  updatedAt?: Date;
}


export default  interface IOrder extends IOrderBase,Document{
  _id:mongoose.Schema.Types.ObjectId;
}