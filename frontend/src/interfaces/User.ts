import Address from './Address.ts';
import Order from './Order.ts';
import CartItem from './CartItem.ts';
import PaymentMethod from './PaymentMethod.ts'
export default interface User {
    id: string;                     // Unique identifier for the user
    name: string;                   // Full name of the user
    email: string;                  // Email address (for communication and authentication)
    phoneNumber?: string;           // Optional phone number for contact
    address?: Address[];             // List of addresses (billing and shipping)
    wishlist?: string[];            // Array of product IDs the user has added to their wishlist
    cart?: CartItem[];              // Items currently in the user's shopping cart
    orderHistory?: Order[];         // List of completed orders
    paymentMethods?: PaymentMethod[]; // Saved payment methods
    createdAt: Date;                // Date when the user account was created
    updatedAt?: Date;               // Last updated timestamp (optional)
}
