import jwt from 'jsonwebtoken'
import User from '../../models/userModel'
import { Request,Response,NextFunction } from 'express'
const isUserLoggedIn= async(req:Request,res:Response,next:NextFunction)=>{
    const token=req.cookies.user_access_token
    if(!token){
        return res.status(409).json(
            {
                success:false,
                message:"Unauthorized to use this route"
            }
        )
    }

    try{
        const decoded= jwt.verify(token,process.env.JWT_KEY!)
        const user= await User.findOne({email:decoded.email}).select('-password')
    }catch(error){

    }

}