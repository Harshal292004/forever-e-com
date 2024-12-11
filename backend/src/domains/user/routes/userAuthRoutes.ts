// userRouter
import express from "express";
import { isUserLoggedIn,verifyUserOwnership } from "../middleware/userAuthMiddleWare";
import userAuthController from "../controllers/userAuthController";

const userAuthenticationRoutes = express.Router();
const authController=new userAuthController()

//http://localhost:5000/users/signUpUser
userAuthenticationRoutes.post("/signUpUser",async (req,res,next)=>{await authController.logInUser(req,res,next)});


//http://localhost:5000/users/logInUser
userAuthenticationRoutes.post("/logInUser",async (req, res, next) => {await authController.logInUser(req,res,next)});


//http://localhost:/5000/users/:uId/logOutUser
userAuthenticationRoutes.post("/logOutUser",isUserLoggedIn,(req,res,next)=>{ authController.logOutUser(req,res,next)})

//http://localhost:/5000/users/:uId/deleteUserAccount
userAuthenticationRoutes.delete("/deleteUserAccount",isUserLoggedIn,verifyUserOwnership,async (req,res,next)=>{await authController.deleteUserAccount(req,res,next)})


export default userAuthenticationRoutes;