class MenuPage {
  protected rectWidth: number;
  protected rectHeight: number;
  protected elementX: number;
  protected elementY: number;

  public constructor() {
    this.rectWidth = windowWidth * 0.6;
    this.rectHeight = windowHeight * 0.8;
    this.elementX = (windowWidth - this.rectWidth) / 2;
    this.elementY = (windowHeight - this.rectHeight) / 2;
  }
  public drawImages(): void {}
  public drawText(): void {}
  public drawShapes(): void {}

  public draw(): void {
    this.drawShapes();
    this.drawImages();
    this.drawText();
  }
}