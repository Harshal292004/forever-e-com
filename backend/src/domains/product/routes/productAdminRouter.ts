import { Router } from "express";
import productAdminController from "../controllers/productAdminRouter";
const router=Router()


router.put("/products/:id", (req, res) => {
  res.send(`Product ID ${req.params.id} updated`);
});

router.delete("/products/:id", (req, res) => {
  res.send(`Product ID ${req.params.id} deleted`);
});
  