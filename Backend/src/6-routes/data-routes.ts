import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import { GameModel } from "../2-models/game-mode";

const router = express.Router();

router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categories = await dataService.getAllCategories();
        response.json(categories);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/games-by-categories/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categoryId = request.params._id;       
        const games = await dataService.getAllGamesByCategories(categoryId);
        response.json(games);
    }
    catch(err: any) {
        next(err);
    }
});

router.post("/games", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const game = new GameModel(request.body);
        const newGame = await dataService.addNewGame(game);
        response.json(newGame);
    }
    catch(err: any) {
        next(err);
    }
});

router.delete("/games/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gameId = request.params._id;
        await dataService.deleteGame(gameId);
        response.json(200);
    }
    catch(err: any) {
        next(err);
    }
});


export default router;
