import IAddress from "../address/IAddress";
export default interface IOrder {
  oId: string;                       
  image: string;                    
  name: string;                     
  price: number;                    
  quantity: number;                 
  size: string;                    
  totalPrice: number;               
  orderState:                       
    | 'Placed'
    | 'Ready to Ship'
    | 'Shipped'
    | 'Reached Nearest Hub'
    | 'Out for Delivery'
    | 'Delivered'
    | 'Cancelled'
    | 'Returned';
  shippingAddress:IAddress, 
  paymentMethod: 'Stripe' | 'Razorpay' | 'COD';
  sId: string;                 
}
