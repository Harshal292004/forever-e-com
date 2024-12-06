import IAddress from './IAddress.js';
import IOrder from './IOrder.js';
import ICartItem from './ICartItem.js';
import IPaymentMethod from './IPaymentMethod.js'
import IProduct from './IProduct.js';
export default interface IUser {
    name: string;                   
    email: string;                  
    password:string;
    phoneNumber?: string;           
    address?: IAddress[];  //address need to be changing as well         
    wishlist?: IProduct[]; //cause we need this to be changing with the change by the product manager              
    cart?: ICartItem[];              
    orderHistory?: IOrder[];         
    paymentMethods?: IPaymentMethod[]; 
    createdAt?: Date;                // Date when the user account was created
    updatedAt?: Date;               // Last updated timestamp (optional)
}
