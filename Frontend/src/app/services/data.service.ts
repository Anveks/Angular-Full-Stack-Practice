import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from "rxjs";
import CategoryModel from '../models/category-model';
import GameModel from '../models/game-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public async getAllCategories(): Promise<CategoryModel[]> {
        const observable = this.http.get<CategoryModel[]>(appConfig.categoriesURL);
        const categories = await firstValueFrom(observable);
        return categories;
    }

    public async getGamesByCategories(id: string): Promise<GameModel[]> {
        const observable = this.http.get<GameModel[]>(appConfig.gamesByCategoriesURL + id);
        const games = await firstValueFrom(observable);
        return games;
    }

    public async deleteGame(id: string): Promise<void> {
        const observable = this.http.delete<GameModel>(appConfig.gamesURL + id);
        await firstValueFrom(observable);
    }

    // public async getAll___(): Promise<MyModel[]> {
    //     const observable = this.http.get<MyModel[]>(appConfig.dataUrl);
    //     const data = await firstValueFrom(observable);
    //     return data;
    // }
    
}
