import { Request,Response ,NextFunction} from "express";
import Product from "../../../models/product/productModel";
class productAdminController{
    
    async createProduct(req: Request, res: Response, next: NextFunction){
        try {
            const {
                name,
                description,
                price,
                image,
                category,
                subCategory,
                sizes,
                stock,
                policies,
            } = req.body;
            const storeId = req.params.storeId;

            const newProduct = await Product.create({
                name,
                description,
                price,
                image,
                category,
                subCategory,
                sizes,
                stock,
                storeId,
                policies,
            });

            res.status(201).json({
                success: true,
                data: newProduct,
                message: "You have added the product successfully",
            });
        } catch (error) {
            next(error); 
        }
    }

    async updateProduct(req:Request,res:Response,next:NextFunction){
        try {
            const productId = req.params.productId;
            const {
                name,
                description,
                image,
                category,
                subCategory
            } = req.body;

            const updatedProduct = await Product.findByIdAndUpdate(productId,{name,description,image,category,subCategory}, {
                new: true,
            });
            
            if (!updatedProduct) {
            const error = new Error(`Product with ID ${productId} not found`);
            error.status = 404;
            throw error;
            }
            res.status(200).json({
            success: true,
            data: updatedProduct,
            message: "Product updated successfully",
            });
        } catch (error) {
            next(error); 
        }

    }

    async deleteProduct(req:Request,res:Response,next:NextFunction){
        try {
            const productId = req.params.productId
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (!deletedProduct) {
                const error = new Error(`Product with ID ${productId} not found`);
                error.status = 404;
                throw error;
            }
            res.status(200).json({
                success: true,
                message: "Product deleted successfully",
            });
        } catch (error) {
            next(error); 
        }
    }

    async updateProductPolicies(req:Request,res:Response,next:NextFunction){
        try{
            const productId=req.params.productId
            const verifiedPoliciesThroughAdmin=res.locals.policies
            const updateProductPolicy= await Product.findByIdAndUpdate(
                productId,verifiedPoliciesThroughAdmin,{new:true}
            )
            if (!updateProductPolicy) {
                const error = new Error(`Product with ID ${productId} not found`);
                error.status = 404;
                throw error;
                }
                res.status(200).json({
                success: true,
                data: updateProductPolicy,
                message: "Product updated successfully",
                });
        } catch (error) {
            next(error); 
        }
    }

    async getProductReviews(req:Request,res:Response,next:NextFunction){
        
    }

}

export default productAdminController