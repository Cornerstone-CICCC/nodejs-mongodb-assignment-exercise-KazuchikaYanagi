import { Request, Response } from "express";
import { Product } from "../models/product.model";

// Get all students
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to get all products" });
  }
};

// Get student by id
const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product does not exist" });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to get product by id" });
  }
};

// Add new student
const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to add product" });
  }
};

// Update student by id
const updateProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      res.status(404).json({ error: "Product does not exist" });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to update product" });
  }
};

// Delete student by id
const deleteProductById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ error: "Product does not exist" });
      return;
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to delete product" });
  }
};

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
};
