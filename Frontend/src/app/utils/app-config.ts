class AppConfig {
    // get categories
    public categoriesURL = "http://localhost:4000/api/categories/";

    // get games by categories
    public gamesByCategoriesURL = "http://localhost:4000/api/games-by-categories/";

    // add-delete games
    public gamesURL = "http://localhost:4000/api/games/";
}

export const appConfig = new AppConfig();
