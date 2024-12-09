import mongoose, { Schema } from 'mongoose';
import IUser from '../../interfaces/IUser';

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
        },
        address: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address',
        }],
        wishlist: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }],
        cart: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CartItem',
        }],
        orderHistory: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order',
        }],
        paymentMethods: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PaymentMethod',
        }],
        review:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Review'
            }
        ]
    },
    { timestamps: true }
);

// Create the Mongoose model for User with the IUser interface
const User = mongoose.model<IUser>('User', userSchema);

export default User;
