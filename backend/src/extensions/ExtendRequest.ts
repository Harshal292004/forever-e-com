// express.d.ts
import { Request } from 'express';
import User from '../models/userModel';
import IUser from '../interfaces/IUser';
import IAddress from '../interfaces/IAddress';
declare global {
  namespace Express {
    interface Request {
      user: IUser;
      address:IAddress
    }
  }
}

export {};