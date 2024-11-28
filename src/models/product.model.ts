import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  productName: string;
  productPrice: number;
}

const ProductSchema: Schema = new Schema({
  productName: { type: String, require: true },
  productPrice: { type: Number, require: true },
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
