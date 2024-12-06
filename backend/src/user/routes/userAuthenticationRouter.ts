// userRouter
import express from "express";
import { logInUser, signUpUser,logOut,deleteAccount } from "../controllers/userAuthController";

const router = express.Router();

router.post("/user/log-in", async (req, res, next) => {
    await logInUser(req, res, next);
});

router.post("/user/sign-up", async (req, res, next) => {
    await signUpUser(req, res, next);
});

router.post("/user/log-out",async (req,res,next)=>{
    await logOut(req,res,next)
})


router.post("/user/delete-account",async (req,res,next)=>{
    await deleteAccount(req,res,next)
})


export default router;