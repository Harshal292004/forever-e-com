// auth controller
import  { Request, Response, NextFunction } from "express";
import orderController from "../../order/controllers/orderController";
import mongoose from "mongoose";
import throwError from "../../../core/utils/errorThrower";
import CartItem from "../../../models/user/cartModel";
import Address from "../../../models/user/addressModel";
import PaymentMethod from "../../../models/order/paymentMethodModel";
class userFunctionalityController{
    order=new orderController()
    //first order placed=> endpoint hit=>requestLogger=> isUserLoggedIn => verifyOwnerShip=> productVerification =>user placeOrder Controller=> order placeOrder Controller => errorHandler
    //http://localhost:5000/users/:uId/:pId/placeOrder
    async placeOrder(req:Request,res:Response,next:NextFunction){ 
        try{
            // the moment you come here inventory will take action and reduce the stock so that we can avoid competition for the same product and provide fair chance to each customer 
            await this.order.placeOrder(req,res)     
        }
        catch(error){
            next(error)
        }
    }

    //order cancel request => endpoint hit => requestLogger=> isUserLoggedIn=>verifyOwnerShip=> orderVerification=>user cancelOrder Controller=> order cancelOrder Controller=> errorHandler 
    //http://localhost:5000/users/:uId/:oId/cancelOrder
    async cancelOrder(req:Request,res:Response,next:NextFunction){
        try{
            await this.order.cancelOrder(req,res)
        }catch(error){
            next(error)
        }

    }

    
    //http://localhost:5000/users/:uId/:oId/payForTheOrder
    async payForTheOrder(req:Request,res:Response, next:NextFunction){
        try{
            await this.order.payForTheOrder(req,res)
        }catch(error){
            next(error)
        }
    }

    //http://localhost:5000/users/:uId/:oId/returnOrder
    async returnOrder(req:Request,res:Response, next:NextFunction){   
        try{
            await this.order.returnOrder(req,res)
        }catch(error){
            next(error)
        }
    }
    
    //http://localhost:5000/users/:uId/:pId/addToCart
    async addToCart(req:Request,res:Response,next:NextFunction){
        try{
            const user=req.user
            const{
                quantity
            }=req.body
            const cartItem=CartItem.create(
                {
                    productId:new mongoose.Schema.Types.ObjectId(req.params.pId),
                    quantity
                }
            )
            user.cart?.push((await cartItem)._id)
            await user.save()
            res.status(200).json(
                {
                    success:true,
                    data:null,
                    message:"Item Added to cart successfully"
                }
            )
        }catch(e){
            const error=throwError(404,"Item not added to Cart")
            next(error)
        }
    }

    
    //http://localhost:5000/users/:uId/:cId/removeFromCart
    async removeFromCart(req:Request,res:Response,next:NextFunction){
        try{
            const user=req.user
            const cId=req.params.cId
            await CartItem.findByIdAndDelete({_id:cId})
            user.cart = user.cart?.filter((cartId) => cartId.toString() !== cId)
            await user.save()
        }catch(e){
            const error=throwError(404,"Item not removed from the cart")
            next(error)
        }
    }

    //will handle both addition and removal of the wishlist item by liking the product 
    //http://localhost:5000/users/:uId/:pId/addToWishList
    async addToWishList(req:Request,res:Response,next:NextFunction){
        
        try{
            const user=req.user 
            if(user.wishlist?.includes(new mongoose.Schema.Types.ObjectId(req.params.pId))){
                //remove it
                user.wishlist=user.wishlist?.filter((pId)=>pId.toString()!==req.params.pId)
            }else{
                user.wishlist?.push(new mongoose.Schema.Types.ObjectId(req.params.pId))
            }
            await  user.save()
        }catch(e){
            const error=throwError(404,"Item not added to wishlist")
            next(error)
        }

    }

    
    //http://localhost:5000/users/:uId/addAddress
    async addAddress(req:Request,res:Response,next:NextFunction){
        try{
            const{
                name,
                email,
                street,
                city,
                state,
                postalCode,
                country,
                phone
            }=req.body
            const address=Address.create(
                {
                    name,
                    email,
                    street,
                    city,
                    state,
                    postalCode,
                    country,
                    phone
                }
            );

            const user=req.user
            user.address?.push((await address)._id)
            await user.save()
        }catch(e){
            next(e)
        }
    }
    
    //this wont be directly exposed as this will be internally called will placing order or should i keep it public HMMMMMMM......
    //http://localhost:5000/users/:uId/addPaymentMethod
    async addPaymentMethod(req:Request,res:Response,next:NextFunction){
        try{
            const{
                type,
                provider,
                cardDetails,
                upiId
            }=req.body

            const pM= PaymentMethod.create(
                {
                    type,
                    provider,
                    cardDetails,
                    upiId
                }
            )
            const user=req.user 
            user.paymentMethods?.push((await pM)._id)
            await user.save()
        }catch(e){
            next(e)
        }
    }
}

export default userFunctionalityController