import { Router } from "express";
const router = Router();
import productUserController from "../controllers/productUserController";

router.get("/products", (req, res) => {
  res.send("List of all products");
});

router.get("/products/:id", (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});

// Fetch reviews for a product by product ID
router.get("/products/:id/reviews", (req, res) => {
  // Logic for fetching reviews related to a specific product
  res.send(`Reviews for Product ID: ${req.params.id}`);
});

// Add a review to a product by product ID (can be handled by users)
router.post("/products/:id/review", (req, res) => {
  // Logic for adding a review to a specific product
  res.send(`Review added for Product ID: ${req.params.id}`);
});


export default router;
