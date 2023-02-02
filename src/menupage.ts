class MenuPage {
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