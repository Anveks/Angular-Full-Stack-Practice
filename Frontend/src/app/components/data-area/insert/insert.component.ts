import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from 'src/app/models/game-model';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-insert',
    templateUrl: './insert.component.html',
    styleUrls: ['./insert.component.css']
})
export class InsertComponent {

    public game = new GameModel();
    public constructor(
        private dataService: DataService, 
        private notifyService: NotifyService,
        private router: Router
        ) { }

    public async handleSubmit(){
       try {
        await this.dataService.addGame(this.game);
        this.notifyService.success("A new game has been added.")
        this.router.navigateByUrl('/list')
       } catch (err:any){
        this.notifyService.error(err);
        console.log(err);
       }
    }


}
