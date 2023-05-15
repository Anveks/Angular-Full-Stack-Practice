import { Component, Input, EventEmitter, Output } from '@angular/core';
import GameModel from 'src/app/models/game-model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  public editMode: boolean = false;
  public updatedGame = new GameModel();

  @Input()
    public game: GameModel;

  @Output()
  public deleteMe = new EventEmitter<string>();

  public deleteGame(){
    this.deleteMe.emit(this.game._id);
  }

  public editGame(){
    this.editMode === false 
      ? this.editMode = true 
      : this.editMode = false;
    console.log(this.editMode);
  }
}
