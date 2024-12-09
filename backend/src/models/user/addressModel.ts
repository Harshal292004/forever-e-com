import mongoose, { Schema } from "mongoose";
import IAddress from "../../interfaces/IAddress";

const addressModelSchema:Schema<IAddress>=new Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        street:{
            type:String 
        },
        city:{
            type:String 
        },
        state:{
            type:String
        },
        postalCode:{
            type:Number
        },
        country:{
            type:String
        },
        phone:{
            type:Number
        }
    }
)
const Address=mongoose.model<IAddress>("Address",addressModelSchema)

export default Address