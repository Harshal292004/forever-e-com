import { Router } from "express";
const router = Router();
import productUserController from "../controllers/productUserController";


router.get("/products", (req, res) => {
  res.send("List of all products");
});

router.get("/products/:id", (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});


router.get("/products/:id/reviews", (req, res) => {
  res.send(`Reviews for Product ID: ${req.params.id}`);
});

router.post("/products/:id/review", (req, res) => {
  res.send(`Review added for Product ID: ${req.params.id}`);
});


export default router;
