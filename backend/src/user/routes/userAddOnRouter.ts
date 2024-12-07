import express, { NextFunction } from 'express';
import IUser from '../../interfaces/IUser';
import IAddress from '../../interfaces/IAddress';
import mongoose from 'mongoose';
const router = express.Router();
import { Response,Request } from 'express';
import Address from '../../models/addressModel';
import User from '../../models/userModel';
import isUserLoggedIn from '../middleware/isUserLoggedIn';
import verifyUserOwnership from '../middleware/verifyOwnerShip';
import ICartItem from '../../interfaces/ICartItem';
import Order from '../../models/orderModel'
import IOrder from '../../interfaces/IOrder';
import Product from '../../models/productModel';
import IProduct from '../../interfaces/IProduct';
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
router.post('/user/:id/:productId/add-cart-item',isUserLoggedIn,verifyUserOwnership, async (req:Request, res) => {
  try{
    const product_id=new  mongoose.Types.ObjectId(req.params.productId)
    const user=req.user
    user.cart?.push(product_id)
    await user.save()
    res.status(200).json(
      {
        success:true,
        message:"Product added to the cart"
      }
    )
    return;
  }catch(error){
    res.status(409).json(
      {
        success:false,
        message:"Something went wrong"
      }
    )
    return;
  }
});

// Add item to wishlist
router.post('/user/:id/:productId/add-wish-list',isUserLoggedIn,verifyUserOwnership ,async (req, res) => {
  try{
    const product_id= new mongoose.Types.ObjectId(req.params.productId)
    const user= req.user
    user.wishlist?.push(product_id)
    await user.save()
    res.status(200).json(
      {
        success:true,
        message:"Product is added to wish list"
      }
    )
    return;
  }catch(error){
    res.status(409).json(
      {
        success:false,
        message:"Something went wrong"
      }
    )
    return;
  }
});

// Place order
router.post('/user/:id/:productId/place-order',isUserLoggedIn,verifyUserOwnership ,async(req, res) => {
  try{
    const product_id= new mongoose.Types.ObjectId(req.params.productId)
    const user= req.user
    const load_product= Product.findById(product_id)
    if(!load_product){
      res.status(409).json(
        {
          success:false,
          message:"Product not found"
        }
      )
      return;
    }
    if(load_product.stock<quantity){
        const message= `` 
        if(load_product.stock <=0){
          message.concat(`Sorry for the inconvineince No stock left`)
        }  
        else {
          message.concat(`Sorry for the inconvinience  but only ${load_product.stock} items left`s)
        }

        res.status(409).json(
        {
          success:false,
          message:message
        }
        return;
      )
    }

    const order= Order.create(
      {
        
      }
    )
    user.orderHistory?.push()
  }catch(error){
    
  }
});

// Review product
router.post('/user/:id/review-product', (req, res) => {
  try{

  }catch(error){
    
  }
});

// Update user account
router.post('/user/:id/update-account', (req, res) => {
  try{

  }catch(error){
    
  }
});

export default router;
