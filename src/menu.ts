class Menu {
  private activePage: StartPage | Objectives | Advantages | Controls;

  public constructor() {
    this.activePage = new StartPage(this);
  }

  public update(): void {}

  public draw(): void {
    this.activePage.draw();
  }

  public openPage(): void {}

  public openStartPage(): void {
    this.activePage = new StartPage(this);
    redraw();
  }
  public openObjectives(): void {
    this.activePage = new Objectives(this);
  }
  public openControls(): void {
    this.activePage = new Controls(this);
  }

  public openAdvantages(): void {
    this.activePage = new Advantages(this);
  }
}
