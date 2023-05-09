import { CategoryModel, ICategoryModel } from "../2-models/category-model";
import { ResourceNotFoundError, ValidationError } from "../2-models/client-errors";
import { GameModel, IGameModel } from "../2-models/game-mode";

async function getAllCategories(): Promise<ICategoryModel[]> {
    const categories = await CategoryModel.find().exec();
    return categories;
}

async function getAllGamesByCategories(categoryId: string): Promise<IGameModel[]> {
    try {
      const games = await GameModel.find({ category: categoryId }, ["name", "price", "description", "category"]).exec();
      return games;
    } catch (error) {
      throw new Error("Failed to fetch games by category.");
    }
  }

async function addNewGame(game: IGameModel): Promise<IGameModel>{
    const errors = game.validateSync()
    if (errors) throw new ValidationError(errors.message);
    return game.save();
}

async function deleteGame(_id: string): Promise<void>{
    const gameToDelete = await GameModel.findByIdAndDelete(_id).exec();
    if(!gameToDelete) throw new ResourceNotFoundError(_id);
}

export default {
    getAllCategories,
    getAllGamesByCategories,
    addNewGame,
    deleteGame,
};

