import mongoose, { Schema } from "mongoose";
import  IPaymentMethod  from "../../interfaces/IPaymentMethod";
const paymentMethodSchema:Schema<IPaymentMethod>= new Schema(
    {
        type:{
            type:String,
            default:"cod"
        },
        provider:{
            type:String
        },
        cardDetails:{
            type:{
                cardHolderName:String,
                last4: String,
                expiry: String      
            },
            default:null
        },
        upiId:{
            type:String
        },
        codConfirmation:{
            type:Boolean,
            default:false
        }
    }
)


const PaymentMethod= mongoose.model<IPaymentMethod>('PaymentMethod',paymentMethodSchema)

export default PaymentMethod