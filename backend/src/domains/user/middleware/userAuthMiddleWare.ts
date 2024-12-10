import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import User from '../../../models/user/userModel';

const isUserLoggedIn = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const token = req.cookies.user_access_token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        const error = new Error('Token not found');
        error.status = 404;
        throw error;
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_KEY!) as jwt.JwtPayload

        // Find user by email from decoded token
        const user = await User.findOne({ email: decoded.email }).select('-password')
        
        if (!user) {
            const error= new Error('User not found')
            error.status=404
            throw error
        }

        req.user = user
    } catch (error) {
        next(error)
    }
}

// Middleware to verify user authentication and ownership
//this middle ware is used for checking if the user who is trying to access the resources is with the same id as the one we checked in the isUserLoggedIn middleware
const verifyUserOwnership = (req: Request, res: Response, next: NextFunction) => {
    try{
        if (!req.user) {
            const error= new Error('Unauthorized : User not logged in')
            error.status=401
            throw error
        }
    
        // Check if the route parameter ID matches the logged-in user's ID
        const requestedUserId = req.params.id;
        if (requestedUserId !== req.user._id.toString()) {
            const error= new Error('Forbidden Access')
            error.status=401
            throw error
        }
    }catch(error){
        next(error)
    }
  };



export {isUserLoggedIn,verifyUserOwnership}