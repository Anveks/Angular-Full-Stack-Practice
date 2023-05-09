import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CategoryModel from 'src/app/models/category-model';
import GameModel from 'src/app/models/game-model';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-insert',
    templateUrl: './insert.component.html',
    styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit{

    public constructor(
        private dataService: DataService, 
        private notifyService: NotifyService,
        private router: Router
        ) { }

    public categories: CategoryModel[] = [];
    public game = new GameModel();

    public async ngOnInit() {
        try {
            this.categories = await this.dataService.getAllCategories();
        } catch(err: any){
            this.notifyService.error(err.message);
        }
    }

    public async send(){
        try {
            await this.dataService.addGame(this.game);
            this.notifyService.success("A new game has been added!");
            this.router.navigateByUrl('/list');
        } catch(err: any) {
            this.notifyService.error(err.message);
        }
    }

}
