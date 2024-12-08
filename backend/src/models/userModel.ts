import mongoose, { Model, Schema } from 'mongoose';
import IUser from '../interfaces/IUser';

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
            type: Schema.Types.ObjectId,
            ref: 'Address',
        }],
        wishlist: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }],
        cart: [{
            type: Schema.Types.ObjectId,
            ref: 'CartItem',
        }],
        orderHistory: [{
            type: Schema.Types.ObjectId,
            ref: 'Order',
        }],
        paymentMethods: [{
            type: Schema.Types.ObjectId,
            ref: 'PaymentMethod',
        }],
        review:[
            {
                type:Schema.Types.ObjectId,
                ref:'Review'
            }
        ]
    },
    { timestamps: true }
);

// Create the Mongoose model for User with the IUser interface
const User = mongoose.model<IUser>('User', userSchema);

export default User;
