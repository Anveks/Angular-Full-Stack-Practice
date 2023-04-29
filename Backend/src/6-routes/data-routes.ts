import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";
import { json } from "stream/consumers";
import { GameModel } from "../2-models/game-model";

const router = express.Router();
// http://localhost:4000/api/genres
router.get("/genres", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const genres = await dataService.getAllGenres();
        response.json(genres)
    }
    catch(err: any) {
        next(err);
    }
});

// http://localhost:4000/api/games
router.get("/games", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const games = await dataService.getAllGames();
        response.json(games)
    }
    catch(err: any) {
        next(err);
    }
});

// http://localhost:4000/api/games-by-genres/2
router.get("/games-by-genres/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const games = await dataService.getGamesByGenres(id);
        response.json(games)
    }
    catch(err: any) {
        next(err);
    }
});

// http://localhost:4000/api/add-game
router.post("/games", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const game = new GameModel(request.body);
        const addedGame = await dataService.addGame(game);
        response.status(201).json(addedGame);
    }
    catch(err: any) {
        next(err);
    }
});

// http://localhost:4000/api/add-game
router.delete("/games/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gameId = +request.params.id;
        await dataService.deleteGame(gameId);
        response.sendStatus(204);
    }
    catch(err: any) {
        next(err);
    }
});


export default router;
