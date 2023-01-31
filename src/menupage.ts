abstract class MenuPage {
  abstract drawImages(): void
  protected abstract drawText(): void
  abstract drawShapes(): void

  public draw(): void {
    this.drawShapes();
    this.drawImages();
    this.drawText();
  }

  public openPage(): void {}
}
