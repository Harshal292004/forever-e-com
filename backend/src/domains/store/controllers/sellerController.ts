import { Request, Response, NextFunction } from "express";

class sellerController {
    async createSeller(req: Request, res: Response, next: NextFunction) {
        // Create a new seller
    }

    async loginSeller(req: Request, res: Response, next: NextFunction) {
        // Seller login 
    }

    async updateSellerProfile(req: Request, res: Response, next: NextFunction) {
        // Update seller's personal and business information
    }

    async getSellerDetails(req: Request, res: Response, next: NextFunction) {
        // Retrieve detailed information about a specific seller
    }

    async updateSellerNotificationPreferences(req: Request, res: Response, next: NextFunction) {
    
    }

    async addSellerToStore(req: Request, res: Response, next: NextFunction) {
    
    }

    async suspendSellerAccount(req: Request, res: Response, next: NextFunction) {
        
    }

    async verifySellerAccount(req: Request, res: Response, next: NextFunction) {
        // Verify seller's account and update verification status
    }

    async updateSellerCardDetails(req: Request, res: Response, next: NextFunction) {
        // Update or add seller's payment card information
    }

    async getSellerStores(req: Request, res: Response, next: NextFunction) {
        // Retrieve all stores associated with a seller
    }
    
}

export default sellerController;