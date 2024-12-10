import mongoose, { Document } from "mongoose";
interface IProductBase{
    name: string;                     // Product name
    description: string;              // Product description
    price: number;                    // Price
    image: string[];                  // Image URLs
    category: string;                 // Primary category
    subCategory: string;              // Sub-category
    sizes: string[];                  // Available sizes
    bestseller: boolean;              
    storeId: mongoose.Schema.Types.ObjectId;                 
    stock: number;                   
    reviews:mongoose.Schema.Types.ObjectId[]
    policies: {
        returnPolicy:string |  "No returns after 15 days" 
        refundPolicy:string |  "Refund processed within 7 days" 
        shippingPolicy:string | "Ships in 3-5 business days" 
    };
    createdAt?: Date;
    updatedAt?: Date;
    payment:boolean
}

export default interface IProduct extends IProductBase, Document{
    _id:mongoose.Schema.Types.ObjectId
}
