import Address from "./Address";
export default interface Order {
    id: string;                       // Unique identifier for the order
    image: string;                    // Image URL of the product
    name: string;                     // Name of the product
    price: number;                    // Price per unit of the product
    quantity: number;                 // Quantity of the product ordered
    size?: string;                    // Optional: Size of the product (useful for clothing or similar items)
    date: Date;                       // Timestamp of when the order was placed
    totalPrice: number;               // Total price (price * quantity)
    orderState:                       // Current status of the order
      | 'Placed'
      | 'Ready to Ship'
      | 'Shipped'
      | 'Reached Nearest Hub'
      | 'Out for Delivery'
      | 'Delivered'
      | 'Cancelled'
      | 'Returned';
    shippingAddress: Address;         // Shipping address for the order
    paymentMethod: 'Stripe' | 'Razorpay' | 'COD'; // Payment method used for the order
    trackingId?: string;              // Optional: Tracking ID for shipment
}
