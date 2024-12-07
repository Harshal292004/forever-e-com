// userRouter
import express from "express";
import { logInUser, signUpUser,logOut,deleteAccount } from "../controllers/userAuthController";
import isUserLoggedIn from "../middleware/isUserLoggedIn";
import IAuthRequest from "../../interfaces/IAuthRequest";
const router = express.Router();

router.post("/user/log-in", async (req, res, next) => {
    await logInUser(req, res, next);
});

router.post("/user/sign-up", async (req, res, next) => {
    await signUpUser(req, res, next);
});

router.post("/user/log-out",isUserLoggedIn,async (req,res)=>{
    await logOut(req,res)
})


router.post("/user/delete-account",isUserLoggedIn,async (req,res)=>{
    await deleteAccount(req,res)
})


export default router;