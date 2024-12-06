export default interface IProduct {
    name: string;                     // Product name
    description: string;              // Product description
    price: number;                    // Price
    image: string[];                  // Image URLs
    category: string;                 // Primary category
    subCategory: string;              // Sub-category
    sizes: string[];                  // Available sizes
    bestseller: boolean;              // Bestseller flag
    sellerId: string;                 // New: Seller's ID
    stock: number;                    // New: Available stock quantity
    createdAt?: Date;
    updatedAt?: Date;
}
