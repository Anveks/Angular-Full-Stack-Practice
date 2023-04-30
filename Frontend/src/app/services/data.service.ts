import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from "rxjs";
import { GenreModel } from '../models/genre-model';
import { GameModel } from '../models/game-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public async getAllGenres(): Promise<GenreModel[]>{
        const observable = this.http.get<GenreModel[]>(appConfig.genresURL);
        const genres = await firstValueFrom(observable);
        return genres;
    }

    public async getGames(id: number): Promise<GameModel[]>{
        const observable = this.http.get<GameModel[]>(appConfig.getGamesByGenresURL + id);
        const games = await firstValueFrom(observable);
        return games;
    }

    public async addGame(game: GameModel): Promise<void>{
        // using formData to create an object:
        const formData = new FormData();
        formData.append("description", game.description);
        formData.append("releaseDate", game.releaseDate.toString());
        formData.append("price", game.price.toString());
        formData.append("name", game.name);
        console.log(formData);
        

        const observable = this.http.post<GameModel>(appConfig.gamesURL, formData);

        const addedGame = await firstValueFrom(observable);
        console.log(addedGame);
        
    }
}
