import { Document } from "mongoose";
export default interface IAddress extends Document{
    name?:string,
    lastName?:string,
    email?:string,
    street:string,
    city:string,
    state:string,
    zipcode:number,
    country:string,
    phone:number
}