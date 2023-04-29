export class GameModel {
  public gameId: number;
  public name: string;
  public description: string;
  public releaseDate: Date;
  public price: number;

  // constructor to add new games
  public constructor(game: GameModel){
    this.gameId = game.gameId;
    this.name = game.name;
    this.description = game.description;
    this.releaseDate = game.releaseDate;
    this.price = game.price;
  }
}