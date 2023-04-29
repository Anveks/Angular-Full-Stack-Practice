import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from "rxjs";
import { GenreModel } from '../models/genre-model';

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
   
}
