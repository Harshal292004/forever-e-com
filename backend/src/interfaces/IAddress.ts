import mongoose, { Document } from "mongoose";
interface IAddressBase{
    name:string,
    email?:string,
    street:string,
    city:string,
    state:string,
    postalCode:number,
    country:string,
    phone:number
}

export default interface IAddress extends IAddressBase,Document{
    _id:mongoose.Types.ObjectId
}