class Menu {
  private activePage: MenuPage;

  public constructor(firstPage: string, scores?: Scores) {
    this.activePage = this.setActivePage(firstPage, scores);
  }

  private setActivePage(firstPage: string, scores?: Scores): MenuPage {
    let activePage: MenuPage;
    if (firstPage === "gameover" && scores) {
      activePage = new Gameover(this, scores);
    } else {
      activePage = new Gameover(this, {1: 1, 2: 2});
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
