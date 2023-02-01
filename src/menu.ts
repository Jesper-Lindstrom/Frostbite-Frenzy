class Menu {
  private activePage: MenuPage;

  public constructor(firstPage: string, scores?: Scores) {
    this.activePage = this.setActivePage(firstPage, scores);
  }

  private setActivePage(firstPage: string, scores?: Scores): MenuPage {
    let activePage: MenuPage = new StartPage(this);
    if (firstPage === "startpage") {
      this.activePage = new StartPage(this);
    } else if (firstPage === "gameover" && scores) {
      this.activePage = new Gameover(this, scores);
    }
    return activePage;
  }

  public update(): void {}

  public draw(): void {
    this.activePage.draw();
  }
  public openPage(page: MenuPage) {
    this.activePage = page;
  }
}
