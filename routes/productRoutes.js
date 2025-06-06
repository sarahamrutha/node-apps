import express from "express";
import Product from "../models/productModel.js"; // ✅ Corrected import path

const router = express.Router();

// GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/products
router.post("/", async (req, res) => {
  try {
    const { name, price, qty } = req.body;
    
    if (!name || !price || !qty) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const product = new Product({ name, price, qty });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
