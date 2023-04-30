import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameModel } from 'src/app/models/game-model';
import { GenreModel } from 'src/app/models/genre-model';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public genres: GenreModel[];
    public games: GameModel[];
    public constructor(private dataService: DataService, private notifyService: NotifyService) { }

    public async ngOnInit() {
        try {
            this.genres = await this.dataService.getAllGenres();
        }
        catch(err: any) {
            this.notifyService.error(err);
        }
    }

    // handle change function that also triggers a data request:
    public async handleChange(id: number){
        try {
            this.games = await this.dataService.getGames(id);
            console.log(this.games);
        } catch(err: any){
            console.log(err);
        }  
    }
}
