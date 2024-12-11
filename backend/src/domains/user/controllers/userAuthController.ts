// auth controller
import  { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt';
import 'dotenv/config'
import User from "../../../models/user/userModel";
import generateToken from "../../../core/utils/tokenGenerator";
import Actor from "../../../interfaces/IActor";
import throwError from "../../../core/utils/errorThrower";
class userAuthController{
    //post
    //=>userAuthController=>generates token=>error handler=>sends response => update frontend on success
    //http://localhost:5000/users/signUpUser
    async signUpUser(req: Request, res: Response, next: NextFunction){
        try {
            const { name, email, password } = req.body;
    
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                throwError(404,"User already exists")
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
    
            res.cookie('user_access_token', token).status(201).json({
                success: true,
                data: newUser,
                message: `Welcome ${name}`
            });
        } catch (error) {
            next(error)
        } 
    };

    //post 
    //=>userAuthController=>generates token=>error handler =>sends response =>update frontend on success
    //http://localhost:5000/users/logInUser
    async logInUser(req: Request, res: Response, next: NextFunction){
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
    
            if (user) {
                
                const isPasswordValid = await bcrypt.compare(password, user.password);
                
                if (!isPasswordValid) {
                    throwError(401,"Invalid Credentials")
                }

                const actor: Actor = {
                    _id: user._id.toString(),
                    email,
                    password: user.password
                };

                const token = generateToken(actor);

                res.cookie('user_access_token', token).status(200).json({
                    success: true,
                    user,
                    message: `Welcome back ${user.name}`
                });

            }else{
                throwError(404,"User not found")
            }
    
        } catch (error) {
            next(error)
        } 
    };

    //post 
    //isUserLoggedIn=>verifyOwnerShip=>userAuthController=>session cleared => update frontend on success
    logOutUser(req:Request,res:Response,next:NextFunction){
        try{
            res.clearCookie('user_access_token',{
                httpOnly:true,
                secure:true,
                sameSite:'strict'
            })
            res.status(200).json(
                {
                    success:true,
                    data:null,
                    message:'Logged Out successfully'
                }
            )
        }catch(error){
            next(error)
        }
    };

    //delete
    async deleteUserAccount(req: Request, res: Response,next:NextFunction){
        try {
            // We already have the user from middleware
            const user = req.user;
            const { password } = req.body;
    
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throwError(401,"Invalid Credentials")
            }
    
            await user.deleteOne();
    
            res.clearCookie("user_access_token", {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            });
    
            res.status(200).json({
                success: true,
                data:null,
                message: "Account deleted successfully",
            });
        } catch (error) {
            next(error)
        }
    };
}


export default userAuthController