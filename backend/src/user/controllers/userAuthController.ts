// auth controller
import  { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt';
import 'dotenv/config';
import User from "../../models/userModel";
import generateToken from "../utils/generateToken";
import Actor from "../../interfaces/IActor";
import IAuthRequest from "../../interfaces/IAuthRequest";
const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'User with this email already exists'
            });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        const encrypted = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: encrypted
        });
       
        const actor: Actor = {
            _id: newUser._id.toString(),
            email,
            password: encrypted
        };

        const token = generateToken(actor);

        return res.cookie('user_access_token', token).status(201).json({
            success: true,
            user: newUser,
            message: `Welcome ${name}`
        });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        return res.status(500).json({
            success: false,
            message: errorMessage
        });
    } finally {
        next();
    }
};

const logInUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        const actor: Actor = {
            _id: user._id.toString(),
            email,
            password: user.password
        };

        const token = generateToken(actor);

        return res.cookie('user_access_token', token).status(200).json({
            success: true,
            user,
            message: `Welcome back ${user.name}`
        });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        return res.status(500).json({
            success: false,
            message: errorMessage
        });
    } finally {
        next();
    }
};

const logOut= async (req:Request,res:Response)=>{
    try{
        res.clearCookie('user_access_token',{
            httpOnly:true,
            secure:true,
            sameSite:'strict'
        })
        return res.status(200).json(
            {
                success:true,
                message:'Logged Out successfully'
            }
        )
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        return res.status(500).json({
            success: false,
            message: errorMessage
        });
    }
}
const deleteAccount = async (req: IAuthRequest, res: Response) => {
    try {
        // We already have the user from middleware
        const user = req.user;
        const { password } = req.body;

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        await user.deleteOne();

        res.clearCookie("user_access_token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });

        return res.status(200).json({
            success: true,
            message: "Account deleted successfully",
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
        return res.status(500).json({
            success: false,
            message: errorMessage,
        });
    }
};



export {logInUser,signUpUser,logOut,deleteAccount}