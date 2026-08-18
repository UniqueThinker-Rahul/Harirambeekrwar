import { Request, Response } from "express";
import { Product } from "../models";
import mongoose from "mongoose";

const mockProducts = [
  { _id: "1", name: "Gemstone Ring", description: "Natural lucky gemstone ring for prosperity.", price: 50, category: "Gemstones", imageUrl: "https://images.unsplash.com/photo-1599643478514-4a888c3a1e0b?auto=format&fit=crop&w=800", benefits: ["Prosperity", "Peace"] },
  { _id: "2", name: "Rudraksha Mala", description: "Authentic 108 beads mala for meditation.", price: 30, category: "Mala", imageUrl: "https://images.unsplash.com/photo-1620021612051-77b5a864d4b3?auto=format&fit=crop&w=800", benefits: ["Focus", "Health"] },
  { _id: "3", name: "Vastu Yantra", description: "Corrective yantra for home energy balance.", price: 40, category: "Vastu", imageUrl: "https://images.unsplash.com/photo-1608670783478-f716d1f9cc18?auto=format&fit=crop&w=800", benefits: ["Harmony", "Wealth"] },
];

export const getProducts = async (req: Request, res: Response) => {
  try {
     if (mongoose.connection.readyState !== 1) {
      return res.json(mockProducts);
    }
    const products = await Product.find({});
    res.json(products.length ? products : mockProducts);
  } catch (error) {
    console.error(error);
    res.json(mockProducts);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const mock = mockProducts.find(p => p._id === req.params.id);
      if(mock) return res.json(mock);
      return res.status(404).json({ message: "Product not found" });
    }
    let product;
    if(mongoose.Types.ObjectId.isValid(req.params.id)) {
        product = await Product.findById(req.params.id);
    }
    if (!product) {
       const mock = mockProducts.find(p => p._id === req.params.id);
       if(mock) return res.json(mock);
       return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    const mock = mockProducts.find(p => p._id === req.params.id);
    if(mock) return res.json(mock);
    res.status(500).json({ message: "Server error" });
  }
};

// Admin
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
}
