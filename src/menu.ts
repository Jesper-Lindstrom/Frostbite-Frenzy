class Menu {
  private activePage: MenuPage;

  public constructor() {
    this.activePage = new Objectives(this);
  }

  public update(): void {}

  public draw(): void {
    this.activePage.draw();
  }

  public openPage(newPage: any): void {
    this.activePage = newPage;
  }
}
