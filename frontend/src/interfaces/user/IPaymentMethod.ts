export default interface IPaymentMethod {
    id: string;                   // Unique identifier for the payment method (e.g., "stripe", "razorpay", "cod")
    type: 'stripe' | 'razorpay' | 'cod'; // Payment type (gateway or COD)
    provider?: string;            // Optional: Provider name (e.g., "Stripe", "Razorpay")
    cardDetails?: {
        cardHolderName: string;   // Name on the card (if applicable)
        last4: string;           // Last 4 digits of the card number
        expiry: string;          // Expiry date (MM/YY)
    };
    upiId?: string;               // UPI ID for Razorpay or similar services
    codConfirmation?: boolean;    // Optional: Confirmation of COD (e.g., user acknowledged)
}
