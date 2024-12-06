import mongoose, { Schema } from "mongoose";
import IAddress from "../interfaces/IAddress";

const addressModelSchema:Schema<IAddress>=new Schema(
    {
        name:{
            type:String
        },
        lastName:{
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
        zipcode:{
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