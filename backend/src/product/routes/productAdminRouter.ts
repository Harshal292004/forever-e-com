import { Router } from "express";

const router=Router()

// Add a new product (for store admins or authorized users)
router.post("/products", (req, res) => {
    // Logic to create a new product
    res.send("New product added");
  });
  
  // Update an existing product (for store admins or authorized users)
  router.put("/products/:id", (req, res) => {
    // Logic to update an existing product by its ID
    res.send(`Product ID ${req.params.id} updated`);
  });
  
  // Delete a product (for store admins or authorized users)
  router.delete("/products/:id", (req, res) => {
    // Logic to delete a product by its ID
    res.send(`Product ID ${req.params.id} deleted`);
  });
  