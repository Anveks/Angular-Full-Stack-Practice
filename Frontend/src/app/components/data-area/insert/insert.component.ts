import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from 'src/app/models/game-model';
import { GenreModel } from 'src/app/models/genre-model';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-insert',
    templateUrl: './insert.component.html',
    styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

    public game = new GameModel();
    public genres: GenreModel[] = [];

    public constructor(
        private dataService: DataService, 
        private notifyService: NotifyService,
        private router: Router
        ) { }

    public async ngOnInit() {
        this.genres = await this.dataService.getAllGenres();
    }

    public async handleSubmit(){
       try {
        console.log(this.game);
        
        await this.dataService.addGame(this.game);
        this.notifyService.success("A new game has been added.")
        this.router.navigateByUrl('/list')
       } catch (err:any){
        this.notifyService.error(err);
        console.log(err);
       }
    }


}
