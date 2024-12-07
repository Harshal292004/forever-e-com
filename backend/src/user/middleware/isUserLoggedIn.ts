import jwt from 'jsonwebtoken'
import User from '../../models/userModel'
import { Request, Response, NextFunction } from 'express'

const isUserLoggedIn = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const token = req.cookies.user_access_token

    if (!token) {
        res.status(401).json({
            success: false,
            message: "Unauthorized: No token provided"
        })
        return;
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_KEY!) as jwt.JwtPayload

        // Find user by email from decoded token
        const user = await User.findOne({ email: decoded.email }).select('-password')
        
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
            return;
        }

        // Attach user to request object for use in subsequent middleware/routes
        req.user = user
        next()

    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({
                success: false,
                message: "Invalid token"
            })
            return;
        }

        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
        return;
    }
}

export default isUserLoggedIn