import { GameModel } from "../2-models/game-model";
import { GenreModel } from "../2-models/genre-model";
import dal from "../4-utils/dal";
import { OkPacket } from "mysql";

async function getAllGenres(): Promise<GenreModel[]> {
    const sql = `SELECT * FROM genre`;
    const result = await dal.execute(sql);    
    return result;
}

async function getAllGames(): Promise<GameModel[]> {
    const sql = `SELECT * FROM videogames`;
    const result = await dal.execute(sql);    
    return result;
}

async function getGamesByGenres(genreId: number): Promise<GameModel[]>{
    const sql = `SELECT * FROM videogames WHERE genreId = ?`
    const result = await dal.execute(sql, [genreId]);
    return result;
}

async function addGame(game: GameModel): Promise<GameModel> {
    const sql = `INSERT INTO videogames VALUES(?,?,?,?,?)`;
    const result: OkPacket = await dal.execute(sql, [
        game.gameId, 
        game.description, 
        game.releaseDate, 
        game.price, 
        game.name
    ]);
    game.gameId = result.insertId;
    return game;
}

async function deleteGame(gameId: number): Promise<void>{
    const sql = `DELETE FROM videogames WHERE gameId = ?`;
    await dal.execute(sql, [gameId]);
}


export default {
    getAllGenres,
    getAllGames,
    getGamesByGenres,
    addGame,
    deleteGame
};

