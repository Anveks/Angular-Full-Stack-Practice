import { Component, Input } from '@angular/core';
import { GameModel } from 'src/app/models/game-model';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent {
  @Input()
  public game: GameModel;
}
