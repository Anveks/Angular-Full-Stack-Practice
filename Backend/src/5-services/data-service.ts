import { CategoryModel, ICategoryModel } from "../2-models/category-model";

async function getAllCategories(): Promise<ICategoryModel[]> {
    const categories = await CategoryModel.find().exec();
    return categories;
}


export default {
    getAllCategories,
};

