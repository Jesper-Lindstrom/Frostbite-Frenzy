class Menu {
  private activePage: MenuPage;

  public constructor(scores: Scores | undefined) {  
    if (scores) {
      this.activePage = new Gameover(scores)
    } else {
      this.activePage = new StartPage(this)
    }
  }

  public update(): void {}

  public draw(): void {
    this.activePage.draw();
  }
   public openPage(page: MenuPage) {
    this.activePage = page;
   }
}
