// auth controller
import  { Request, Response, NextFunction } from "express";
import orderController from "../../order/controllers/orderController";
import mongoose from "mongoose";
class userFunctionalityController{
    order=new orderController()
    //first order placed=> endpoint hit=>requestLogger=> isUserLoggedIn => verifyOwnerShip=> productVerification =>user placeOrder Controller=> order placeOrder Controller => errorHandler
    //http://localhost:5000/users/:uId/:pId/placeOrder
    async placeOrder(req:Request,res:Response,next:NextFunction){
        try{
            // the moment you come here inventory will take action and reduce the stock so that we can avoid competition for the same product and provide fair chance to each customer 
            this.order.placeOrder(req,res)     
        }
        catch(error){
            next(error)
        }
    }
    
    //http://localhost:5000/users/:uId/:oId/cancelOrder
    async cancelOrder(){

    }

    
    //http://localhost:5000/users/:uId/:oId/payForTheOrder
    async payForTheOrder(){

    }

    //http://localhost:5000/users/:uId/:oId/returnOrder
    async returnOrder(){   
    }
    
    //http://localhost:5000/users/:uId/:pId/addToCart
    async addToCart(){

    }

    
    //http://localhost:5000/users/:uId/:pId/removeFromCart
    async removeFromCart(){

    }

    //will handle both addition and removal of the wishlist item by liking the product 
    //http://localhost:5000/users/:uId/:pId/addToWishList
    async addToWishList(){

    }

    
    //http://localhost:5000/users/:uId/addAddress
    async addAddress(){

    }

    //http://localhost:5000/users/:uId/:aId/updateAddress
    async updateAddress(){

    }
    
    //http://localhost:5000/users/:uId/:aId/deleteAddress
    async deleteAddress(){

    }

    //http://localhost:5000/users/:uId/updateProfile
    async updateProfile(){

    }

    //this wont be directly exposed as this will be internally called will placing order or should i keep it public HMMMMMMM......
    //http://localhost:5000/users/:uId/addPaymentMethod
    async addPaymentMethod(){

    }

    //for simplicity the user isn't allowed to add multiple products in a single order as of now 
    //http://localhost:5000/users/:uId/:oId/review
    async addReview(){

    }
}

export default userFunctionalityController