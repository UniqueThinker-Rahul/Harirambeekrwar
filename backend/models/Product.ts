import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  categoryId: { type: String },
  imageUrl: { type: String, required: true },
  benefits: [String],
  stock: { type: Number, default: 10 },
}, { timestamps: true });

export const Product = mongoose.model("Product", ProductSchema);
