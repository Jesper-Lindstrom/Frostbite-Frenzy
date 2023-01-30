class MenuPage {
  protected x: number;
  protected y: number;
  protected width: number;
  protected height: number;

  public constructor() {
    this.width = windowWidth * 0.6;
    this.height = windowHeight * 0.9;
    this.x = (windowWidth - this.width) / 2;
    this.y = (windowHeight - this.height) / 2;
  }

  public drawImages(): void {}
  public drawText(): void {}
  public drawShapes(): void {}

  public draw(): void {
    this.drawShapes();
    this.drawImages();
    this.drawText();
  }

  public openPage(): void {}
}