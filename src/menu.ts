interface IMenu {
  openPage(page: MenuPage): void;
}

class Menu implements IMenu {
  private activePage: MenuPage;

  public constructor(firstPage: string, scores?: Scores) {
    this.activePage = this.setActivePage(firstPage, scores);
  }

  private setActivePage(firstPage: string, scores?: Scores): MenuPage {
    let activePage: MenuPage;
    if (firstPage === "gameover" && scores) {
      activePage = new Gameover(this, scores);
    } else {
      activePage = new StartPage(this);
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
