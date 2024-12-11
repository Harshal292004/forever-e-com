// userRouter
import express from "express";
import { isUserLoggedIn,verifyUserOwnership } from "../middleware/userAuthMiddleWare";
import userFunctionalityController from "../controllers/userFunctionalityController";
const userFunctionalityRoutes = express.Router();
const functionalityController=new userFunctionalityController()

//http://localhost:5000/users/:uId/:pId/placeOrder
userFunctionalityRoutes.post("/:uId/:pId/placeOrder",isUserLoggedIn,verifyUserOwnership,async (req,res,next)=>{await functionalityController.placeOrder(req,res,next)});


//http://localhost:5000/users/:uId/:oId/cancelOrder
userFunctionalityRoutes.post("/:uId/:oId/cancelOrder",isUserLoggedIn,verifyUserOwnership,async (req, res, next) => {await functionalityController.cancelOrder(req,res,next)});


//http://localhost:5000/users/:uId/:oId/payForTheOrder
userFunctionalityRoutes.post("/:uId/:oId/payForTheOrder",isUserLoggedIn,verifyUserOwnership,(req,res,next)=>{ functionalityController.payForTheOrder(req,res,next)})

//http://localhost:5000/users/:uId/:oId/returnOrder
userFunctionalityRoutes.delete("/:uId/:oId//returnOrder",isUserLoggedIn,verifyUserOwnership,async (req,res,next)=>{await functionalityController.returnOrder(req,res,next)})

//http://localhost:5000/users/:uId/:pId/addToCart
userFunctionalityRoutes.put("/:uId/:pId/addToCart",isUserLoggedIn,verifyUserOwnership,async (req,res,next)=>{await functionalityController.addToCart(req,res,next)})

//http://localhost:5000/users/:uId/:cId/removeFromCart
userFunctionalityRoutes.put("/:uId/:cId/removeFromCart",isUserLoggedIn,verifyUserOwnership,async (req,res,next)=>{await functionalityController.removeFromCart(req,res,next)})

//http://localhost:5000/users/:uId/:pId/addToWishList
userFunctionalityRoutes.put("/:uId/:pId/addToWishList",isUserLoggedIn,verifyUserOwnership,async (req,res,next)=>{await functionalityController.addToWishList(req,res,next)})


//http://localhost:5000/users/:uId/adAddress
userFunctionalityRoutes.put("/:uId/addToCart",isUserLoggedIn,verifyUserOwnership,async (req,res,next)=>{await functionalityController.addAddress(req,res,next)})

//http://localhost:5000/users/:uId/addPaymentMethod
userFunctionalityRoutes.put("/:uId/addPaymentMethod",isUserLoggedIn,verifyUserOwnership,async (req,res,next)=>{await functionalityController.addPaymentMethod(req,res,next)})

export default userFunctionalityRoutes;