class GameModel {
  public gameId: number;
  public genreId: number;
  public description: string;
  public releaseDate: string;
  public price: number;
  public name: string;

  // constructor to add new games
  public constructor(game: GameModel){
    this.gameId = game.gameId;
    this.genreId = game.genreId;
    this.description = game.description;
    this.releaseDate = game.releaseDate;
    this.price = game.price;
    this.name = game.name;
  }
}

export default GameModel