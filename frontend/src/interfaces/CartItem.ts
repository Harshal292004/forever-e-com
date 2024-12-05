export default interface CartItem {
    productId: string;             // Unique identifier for the product
    name: string;                  // Name of the product (useful for displaying in cart UI)
    imageUrl: string;              // Image URL for a thumbnail in the cart
    price: number;                 // Price of the product at the time it was added to the cart
    quantity: number;              // Quantity of the product in the cart
    totalPrice: number;            // Derived field: price * quantity
    size:string;
    sellerId:string 
}
