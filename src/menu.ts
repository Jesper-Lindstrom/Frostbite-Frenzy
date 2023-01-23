class Menu {
  private activePage: MenuPage;

  public constructor() {
    this.activePage = new StartPage();
  }

  public update() {}

  public draw() {
    this.activePage.draw();
  }

  public openPage(page: MenuPage) {
    this.activePage = page;
  }
}



/* class Menu {
  private startPage: StartPage;
  private objectives: Objectives;
  private controls: Controls;
  private gameOver: GameOver;

  public constructor() {
    this.startPage = new StartPage;
    this.objectives = new Objectives;
    this.controls = new Controls;
    this.gameOver = new GameOver;
  }


  update() {}


  public draw() {
    this.drawStartPage();
    this.drawObjectives();
    this.drawControls();
    this.drawGameOver();
  }

  public drawStartPage() {};

  public drawObjectives() {};
  
  public drawControls() {};

  public drawGameOver() {};

} */