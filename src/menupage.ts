abstract class MenuPage {
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
  protected abstract drawImages(): void 
  protected abstract drawText(): void 
  protected abstract drawShapes(): void 

  public draw(): void {
    this.drawShapes();
    this.drawImages();
    this.drawText();
  }
}