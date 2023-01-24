class Menu {
  private activePage: MenuPage;

  public constructor() {
      this.activePage = new StartPage();
  }

  public update(): void {}

  public draw(): void {
      this.activePage.draw();
  }

  public openPage(page: MenuPage): void {
      this.activePage = page;
  }
}