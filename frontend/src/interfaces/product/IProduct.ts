export default interface IProduct {
    pId: string;                      // Product ID
    name: string;                     // Product name
    description: string;              // Product description
    price: number;                    // Price
    image: string[];                  // Image URLs
    category: string;                 // Primary category
    subCategory: string;              // Sub-category
    sizes: string[];                  // Available sizes
    bestseller: boolean;              // Bestseller flag
    sId: string;                 // New: Seller's ID
    stock: number;                    // New: Available stock quantity
    policies:{
        returnPolicy:string,
        refundPolicy:string,
        shippingPolicy:string
    }
}
