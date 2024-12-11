import Address  from "../address/IAddress";
export default interface IOrder {
  id: string;                       
  image: string;                    
  name: string;                     
  price: number;                    
  quantity: number;                 
  size?: string;                    
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
  shippingAddress: Address;         
  paymentMethod: 'Stripe' | 'Razorpay' | 'COD';
  storeId: string;                 
}
