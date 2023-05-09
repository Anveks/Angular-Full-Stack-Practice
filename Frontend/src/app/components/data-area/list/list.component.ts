import { Component, OnInit } from '@angular/core';
import CategoryModel from 'src/app/models/category-model';
import GameModel from 'src/app/models/game-model';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public constructor(private dataService: DataService, private notifyService: NotifyService) { }

    public categories: CategoryModel[] = [];
    public games: GameModel[] = [];

    public async ngOnInit() {
        try {
            this.categories = await this.dataService.getAllCategories();
        } catch(err: any) {
            this.notifyService.error(err);
        }
    };

    public async handleChange(e: any){
        try {
            this.games = await this.dataService.getGamesByCategories(e.value);
            console.log(this.games);
        } catch(err: any) {
            this.notifyService.error(err);
        }
    };

    public async deleteThisGame(id: string) {
        try {
            await this.dataService.deleteGame(id);
            this.notifyService.success("Game has been deleted.");
            const index = this.games.findIndex((g) => g._id === id);
            this.games.splice(index, 1);
        } catch(err: any){
            this.notifyService.error(err.message);
        }
    }
    
}
