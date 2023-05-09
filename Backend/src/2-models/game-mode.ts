import mongoose from "mongoose";
import { CategoryModel } from "./category-model";

export interface IGameModel extends mongoose.Document {
  name: string,
  category: mongoose.Schema.Types.ObjectId,
  price: number,
  description: string
}

export const GameSchema = new mongoose.Schema<IGameModel>({
  name: {
    type: String,
    trim: true, // deletes white spaces, same trim()
    unique: true, // check if exists
    required: [true, "Missing name."], // 
    minlength: [2, "Name too short."],
    maxlength: [100, "Name too long."]
  },
  category: mongoose.Schema.Types.ObjectId,
  price: {
    type: Number,
    required: [true, "Price missing."],
    min: [0, "Price cannot be neagtive."],
    max: [1000, "Price cannot exceed 1000."]
  },
  description: {
    type: String,
    trim: true, 
    required: [true, "Missing description."], 
    minlength: [20, "description too short."],
    maxlength: [1000, "description too long."]
  }
}, {
  versionKey: false,
  toJSON: { virtuals: true },
  id: false
});

GameSchema.virtual("categoryRef", {
  ref: CategoryModel,
  localField: "category",
  foreignField: "_id",
  justOne: true,
});

export const GameModel = mongoose.model<IGameModel>("GameModel", GameSchema, "games");