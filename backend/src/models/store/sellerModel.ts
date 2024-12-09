import mongoose, { Schema } from "mongoose"
import ISeller from "../../interfaces/ISeller"
const sellerModelSchema:Schema<ISeller>=new Schema(
    {
        firstName:{
            type:String
        },
        lastName:{
            type:String 
        },
        email:{
            type:String 
        },
        phoneNumber:{
            type:String 
        },
        storeName:{
            type:String 
        },
        businessType: {
            type:String,
            enum:['INDIVIDUAL','COMPANY','PARTNERSHIP']
        },
        businessRegistrationNumber: {
            type:String 
        },
        store:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Store"
        },
        notificationPreferences:{
            type:{
                email: Boolean,
                sms: Boolean,
                platformNotifications: Boolean
            }
        },
        cardDetails: {
            type:{
                cardHolderName: String,   
                last4: String,
                expiry:String
            }
        },
        isVerified:{
            type:Boolean
        },
        address:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address"
        },
        accountStatus: {
            type:String,
            enum:['ACTIVE' , 'SUSPENDED' , 'PENDING_VERIFICATION']
        }
    },{timestamps:true}
)



const Seller= mongoose.model<ISeller>('Seller',sellerModelSchema)

export default Seller