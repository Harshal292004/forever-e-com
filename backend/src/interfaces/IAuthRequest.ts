import { Request } from "express";
import IUser from "./IUser";


export default interface IAuthRequest extends Request{
    user:IUser
}