// models/productModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
