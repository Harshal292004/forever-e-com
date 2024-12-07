import express, { NextFunction } from 'express';
import IUser from '../../interfaces/IUser';
import IAddress from '../../interfaces/IAddress';
const router = express.Router();
import { Response,Request } from 'express';
import Address from '../../models/addressModel';
import User from '../../models/userModel';
import isUserLoggedIn from '../middleware/isUserLoggedIn';
import verifyUserOwnership from '../middleware/verifyOwnerShip';
import ICartItem from '../../interfaces/ICartItem';

router.post('/user/:id/add-address',isUserLoggedIn,verifyUserOwnership, async (req: Request, res: Response):Promise<any> => {
    try {
      const address = await Address.create(req.body);
      const user = await User.updateOne(
        {_id:req.params.id},
        { $push: { address: address._id } },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({
            success:false,
            message: 'User not found' 
            }
        );
      }
  
      return res.status(200).json({ message: 'Address added successfully', user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error adding address' });
    }
  });


// Add item to user's cart
router.post('/user/:id/add-cart-item',isUserLoggedIn,verifyUserOwnership, (req:Request, res) => {
  try{

  }catch(error){

  }
});

// Add item to wishlist
router.post('/user/:id/add-wish-list', (req, res) => {
  // Add wishlist item logic here
  res.send('Item added to wishlist');
});

// Place order
router.post('/user/:id/place-order', (req, res) => {
  // Place order logic here
  res.send('Order placed');
});

// Review product
router.post('/user/:id/review-product', (req, res) => {
  // Review product logic here
  res.send('Product reviewed');
});

// Update user account
router.post('/user/:id/update-account', (req, res) => {
  // Update account logic here
  res.send('Account updated');
});

export default router;
