import mongoose from "mongoose";

// interface
export interface ICategoryModel extends mongoose.Document {
  name: string;
}

// schema
export const CategorySchema = new mongoose.Schema<ICategoryModel>({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: [ true, "Category name is required." ],
    minlength: [2, "Category name too short."],
    maxlength: [100, "Category name too long."]
  }
}, {
  versionKey: false
})

// model
export const CategoryModel = mongoose.model<ICategoryModel>("CategoryModel", CategorySchema, "categories");