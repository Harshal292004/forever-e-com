// express.d.ts
import { Request } from 'express';
import User from '../models/userModel';
import IUser from '../interfaces/IUser';
declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}

export {};