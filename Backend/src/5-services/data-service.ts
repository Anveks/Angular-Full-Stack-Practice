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

  async function getGamesBySearch(searchWord: string): Promise<IGameModel[]> {
    try {
      const games = await GameModel.find({ name: { $regex: searchWord, $options: "i" } }); // $regex to find matching names, $options to be case-insensitive
      return games;
    } catch (error) {
      throw new Error(`Failed to retrieve games by searching ${searchWord} : ` + error);
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

async function updateGame(game: IGameModel): Promise<IGameModel> {
  const errors = game.validateSync();
  if(errors) throw new ValidationError(errors.message);
  const updatedGame = await GameModel.findByIdAndUpdate(game._id, game, {returnOriginal: false}).exec();
  if(!updatedGame) throw new ResourceNotFoundError(game._id);
  return updatedGame;
}

export default {
    getAllCategories,
    getAllGamesByCategories,
    getGamesBySearch,
    addNewGame,
    deleteGame,
    updateGame
};

