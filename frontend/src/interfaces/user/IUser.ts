import IAddress from '../address/IAddress.ts';
import IOrder from './IOrder.ts';
import ICart from './ICart.ts';
import IPaymentMethod from './IPaymentMethod.ts'
export default interface IUser {
    uId: string;                     
    name: string;                   
    email: string;                  
    phone: string; 
    addressIds?:string[]          
    address?: IAddress[]
    wishlist?: string[];           
    wishlistIds?:string[]
    cart?: ICart[];            
    cartIds?:string[]
    orderHistory?: IOrder[];         
    orderIds?:string[]
    paymentMethods?: IPaymentMethod[]; 
    paymentMethodsIds?:string[]
}
