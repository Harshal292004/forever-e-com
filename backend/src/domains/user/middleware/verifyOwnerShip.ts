// Middleware to verify user authentication and ownership
//this middle ware is used for checking if the user who is trying to access the resources is with the same id as the one we checked in the isUserLoggedIn middleware
import { Request,Response,NextFunction } from "express";
const verifyUserOwnership = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        res.status(401).json({ message: 'Unauthorized: User not logged in' });
        return;
    }
  
    // Check if the route parameter ID matches the logged-in user's ID
    const requestedUserId = req.params.id;
    if (requestedUserId !== req.user._id.toString()) {
      res.status(403).json({ message: 'Forbidden: Access denied' });
      return;
    }
    next();
  };

export default verifyUserOwnership