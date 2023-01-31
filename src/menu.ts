class Menu {
  private activePage: MenuPage;

  public constructor(openingPage: MenuPage) {  
    this.activePage = openingPage;
  }

  public update(): void {}

  public draw(): void {
    this.activePage.draw();
  }

  public openPage(newPage: any): void {
    this.activePage = newPage;
  }
}
