import Address  from "./Address";
export default interface Order {
  id: string;                       // Unique identifier for the order
  image: string;                    // Image URL of the product
  name: string;                     // Name of the product
  price: number;                    // Price per unit
  quantity: number;                 // Quantity ordered
  size?: string;                    // Optional size
  date: Date;                       // Timestamp of order placement
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
  shippingAddress: Address;         // Shipping address
  paymentMethod: 'Stripe' | 'Razorpay' | 'COD'; // Payment method
  trackingId?: string;              // Optional tracking ID
  sellerId: string;                 // New: Seller associated with the order
}
