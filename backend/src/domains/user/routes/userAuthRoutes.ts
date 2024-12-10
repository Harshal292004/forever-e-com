// userRouter
import express from "express";
import isUserLoggedIn from "../middleware/isUserLoggedIn";
import userController from "../controllers/userAuthController";
const userAuthenticationRoutes = express.Router();

userAuthenticationRoutes.post("/log-in", async (req, res, next) => {
    await userController.logInUser(req, res, next);
});

userAuthenticationRoutes.post("/sign-up", async (req, res, next) => {
    await userController.signUpUser(req, res, next);
});

userAuthenticationRoutes.post("/log-out",isUserLoggedIn,async (req,res)=>{
    await userController.logOut(req,res)
})


userAuthenticationRoutes.post("/delete-account",isUserLoggedIn,async (req,res)=>{
    await userController.deleteAccount(req,res)
})


export default userAuthenticationRoutes;