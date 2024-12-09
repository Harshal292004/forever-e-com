// userRouter
import express from "express";
import { logInUser, signUpUser,logOut,deleteAccount } from "../controllers/userAuthController";
import isUserLoggedIn from "../middleware/isUserLoggedIn";
const userAuthenticationRoutes = express.Router();

userAuthenticationRoutes.post("/log-in", async (req, res, next) => {
    await logInUser(req, res, next);
});

userAuthenticationRoutes.post("/sign-up", async (req, res, next) => {
    await signUpUser(req, res, next);
});

userAuthenticationRoutes.post("/log-out",isUserLoggedIn,async (req,res)=>{
    await logOut(req,res)
})


userAuthenticationRoutes.post("/delete-account",isUserLoggedIn,async (req,res)=>{
    await deleteAccount(req,res)
})


export default userAuthenticationRoutes;