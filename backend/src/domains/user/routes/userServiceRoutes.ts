import express, { NextFunction } from 'express';
import mongoose from 'mongoose';
const userServiceRouter = express.Router();
import { Response,Request } from 'express';
import Address from '../../../models/addressModel';
import User from '../../../models/userModel';
import isUserLoggedIn from '../middleware/isUserLoggedIn';
import verifyUserOwnership from '../middleware/verifyOwnerShip';
import Order from '../../../models/orderModel'
import Product from '../../../models/productModel';
import Seller from '../../../models/sellerModel';
import Review from '../../../models/reviewModel';
userServiceRouter.post('/:id/add-address',isUserLoggedIn,verifyUserOwnership, async (req: Request, res: Response):Promise<any> => {
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
userServiceRouter.post('/:id/:productId/add-cart-item',isUserLoggedIn,verifyUserOwnership, async (req:Request, res) => {
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
userServiceRouter.post('/:id/:productId/add-wish-list',isUserLoggedIn,verifyUserOwnership ,async (req, res) => {
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
userServiceRouter.post('/:id/:productId/place-order',isUserLoggedIn,verifyUserOwnership ,async(req, res) => {
  try{
    const product_id= new mongoose.Types.ObjectId(req.params.productId)
    const user= req.user
    const load_product= await  Product.findById(product_id)
    if(!load_product){
      res.status(409).json(
        {
          success:false,
          message:"Product not found"
        }
      )
      return;
    }
    const {
      size,
      quantity,
      shippingAddress,
      paymentMethod,
    }=req.body

    if(load_product.stock < quantity){
        const message= `` 
        if(load_product.stock <=0){
          message.concat(`Sorry for the inconvenience No stock left`)
        }  
        else {
          message.concat(`Sorry for the inconvenience  but only ${load_product.stock} items left`)
        }

        res.status(409).json(
        {
          success:false,
          message:message
        }
        )
      return;
    }
    
    const order= Order.create(
      {
        image:load_product.image[0],
        name:load_product.name ,
        price:load_product.price,
        quantity:quantity,
        size:size,
        totalPrice:quantity*load_product.price,
        orderState:'Placed',
        shippingAddress:shippingAddress,
        paymentMethod:paymentMethod,
        sellerId:load_product.sellerId  
      }
    )
    user.orderHistory?.push((await order)._id)
    await user.save()
    
    const seller=await  Seller.findById(product_id)

    seller?.orderHistory?.push((await order)._id)

    await seller?.save()
  }catch(error){
    console.log(`Hello you have a error : ${error}`)

  }
});

// Review product
userServiceRouter.post('/:id/:productId/review-product',isUserLoggedIn,verifyUserOwnership,async(req, res) => {
  try{
    //check whether the user have used the product then only allow him her to review the product
    
    const productId= new mongoose.Types.ObjectId(req.params.productId)
    const user= req.user 
    const userId=user._id
    if(user.orderHistory?.includes(productId)){
      
      const {
        rating ,
        comment
      }=req.body 
      try{
      const product=await Product.findById(productId)
      

      const review= await Review.create(
        {
          productId,
          userId,
          rating,
          comment
        }
      )
      user.review.push(review._id)
      product?.reviews.push(review._id)
      res.status(200).json(
        {
          success:true,
          message:"Yoo ! thanks for the review"
        }
      )
    }catch(error){
      res.status(409).json(
        {
          success:false,
          message:"Product not found "
        }
      )
    }
      

    }else{
      throw new Error("You can't review this product sadly")
    }
  }
  catch(error){
    const errorMsg= error  instanceof Error?error.message:"You suck "
    res.status(
      409
    ).json(
      {
        success:false,
        message:errorMsg
      }
    )
  }
});

// Update user account
userServiceRouter.post('/:id/update-account',isUserLoggedIn,verifyUserOwnership, async(req, res) => {
  try{
    const {
      name,
      phoneNumber
    }:{name:string|null,phoneNumber:string|null}=req.body
    const user= req.user
    const changedName:string= name?name:user.name 
    const changedPhoneNumber:string= phoneNumber?phoneNumber:user.phoneNumber

    await user.updateOne(
      {
        name:changedName,
        phoneNumber:changedPhoneNumber
      }
    )

    res.status(200).json(
      {
        success:true,
        message:"FUck you changed it "
      }
    )
    return;
  }catch(error){
    res.status(409).json(
      {
        success:false,
        message:"Fuck you didn't changed it "
      }
    )
  }
});

export default userServiceRouter;
