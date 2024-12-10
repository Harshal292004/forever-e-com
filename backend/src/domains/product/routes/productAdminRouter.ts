import { Router, Request, Response, NextFunction } from "express";
import Product from "../../../models/product/productModel";
import {
  isSellerLoggedIn,
  verifyStoreOwnerShip,
  verifyAdminPrivilegeOfSeller,
} from "../../store/middleware/sellerAuthMiddleware";

const router = Router();

router.post(
  "/products/:sellerId/:storeId",
  isSellerLoggedIn,
  verifyStoreOwnerShip,
  verifyAdminPrivilegeOfSeller,
);

router.put(
  "/products/:id",
  isSellerLoggedIn,
  verifyStoreOwnerShip,
  verifyAdminPrivilegeOfSeller,
);

router.delete(
  "/products/:id",
  isSellerLoggedIn,
  verifyStoreOwnerShip,
  verifyAdminPrivilegeOfSeller,
);

export default router;
