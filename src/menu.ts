class Menu {
  private activePage: Gameover;

  public constructor() {
    this.activePage = new StartPage(this);
  }

  public update(): void {}

  public draw(): void {
    this.activePage.draw();
  }

  public openPage(newPage: MenuPage): void {
    this.activePage = newPage;
  }
}
