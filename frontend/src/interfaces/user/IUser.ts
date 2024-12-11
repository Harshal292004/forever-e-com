import Address from '../address/IAddress.ts';
import Order from './IOrder.ts';
import CartItem from './ICart.ts';
import PaymentMethod from './IPaymentMethod.ts'
export default interface IUser {
    id: string;                     // Unique identifier for the user
    name: string;                   // Full name of the user
    email: string;                  // Email address (for communication and authentication)
    phoneNumber?: string; 
    addressIds?:string[]          
    address?: Address[]
    wishlist?: string[];           
    wishlistIds?:string[]
    cart?: CartItem[];            
    cartIds?:string[]
    orderHistory?: Order[];         
    orderIds?:string[]
    paymentMethods?: PaymentMethod[]; // Saved payment methods
    paymentMethodsIds?:string[]
    createdAt: Date;                // Date when the user account was created
    updatedAt?: Date;               // Last updated timestamp (optional)
}
