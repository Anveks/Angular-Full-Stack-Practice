import { Component, Input, EventEmitter, Output } from '@angular/core';
import GameModel from 'src/app/models/game-model';
import { DataService } from 'src/app/services/data.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  public constructor(
    private dataService: DataService, 
    private notifyService: NotifyService
    ) { }

  public editMode: boolean = false;
  public updatedGame = new GameModel();

  @Input()
    public game: GameModel;

  @Output()
  public deleteMe = new EventEmitter<string>();

  public deleteGame(){
    this.deleteMe.emit(this.game._id);
  }

  public async editGame(){
    if( this.editMode === false ){
      this.editMode = true;
    } else {
      this.updatedGame = { ...this.game };
      await this.dataService.updateGame(this.updatedGame);
      this.editMode = false;
    }      
  }
}
