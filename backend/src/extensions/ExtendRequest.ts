
import IUser from '../interfaces/IUser';
import IAddress from '../interfaces/IAddress';
import IProduct from '../interfaces/IProduct';
declare global {
  namespace Express {
    interface Request {
      user: IUser;
      product: IProduct;
      address:IAddress
    }
  }
}

export {};