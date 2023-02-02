/// <reference path="menupage.ts" />
class Advantages extends MenuPage {
  public menu: Menu;
  private img: p5.Image;
  private img1: p5.Image;
  private img2: p5.Image;
  private watch: p5.Image;
  private advantagessnowflake: p5.Image;
  private invertarrows: p5.Image;

  public constructor(menu: Menu) {
    super();
    this.menu = menu;
    this.img = images.iceLower;
    this.img1 = images.iceUpper;
    this.img2 = images.ice;
    this.watch = images.watch;
    this.advantagessnowflake = images.advantagessnowflake;
    this.invertarrows = images.invertarrows;
    this.drawShapes();
    this.drawImages();
    this.drawText();
    this.createBackButton();
  }

  public drawShapes() {
    fill(47, 78, 107);
    rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight); // larger rect
  }

  public drawText() {
    push(); // save current styles and transformations
    textFont(fontSansita);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Advantages", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.15);
    pop(); // restore previous styles and transformations

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(31);
    text("Get faster", this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.3);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab a clock and outrun your opponent!",
      this.elementX + (this.rectWidth * 0.30),
      this.elementY + this.rectHeight * 0.35,
      this.rectWidth * 0.4
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Get stronger",  this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.5);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab a snowflake to be able to walk through the monsters!",
      this.elementX + (this.rectWidth * 0.30),
      this.elementY + this.rectHeight * 0.55,
      this.rectWidth * 0.4
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Mess with the other player", this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.7);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab the arrows to invert your opponent's controls!",
      this.elementX + (this.rectWidth * 0.30),
      this.elementY + this.rectHeight * 0.75,
      this.rectWidth * 0.45
    );
    pop();
  }

  protected createBackButton() {
    let button = createButton("Back");
    button.size(this.rectWidth * 0.2, this.rectHeight * 0.1);
    button.position(this.elementX + this.rectWidth * 0.05, this.elementY + this.rectHeight - this.rectHeight * 0.11);
    button.style("color: #4A7AA7");
    button.style("border-radius: 1rem");
    button.style("border-style: none");
    button.style("font-size: 22px");
    button.style("font-family: Freckle Face");
    button.style("background-color: #D2ECF3");

    button.mousePressed(() => {
      this.menu.openPage(new Objectives(this.menu));
    });

    button.mouseOver(() => {
      button.style("color", "rgb(255, 255, 255)");
      button.style("background-color", "rgb(15, 82, 186");
    });

    button.mouseOut(() => {
      button.style("background: #D2ECF3");
      button.style("color: #4A7AA7");
    });
  }

   public drawImages() {
    let imageWidth = this.rectWidth;
    let imageHeight = (imageWidth / this.img2.width) * this.img2.height;
    image(this.img2, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY, imageWidth, imageHeight);
     
    image(this.watch, 
      this.elementX + this.rectWidth * 0.75, 
      this.elementY + this.rectHeight * 0.3, 
      0.1 * this.rectWidth, 
      0.1 * this.rectHeight
      );
    image(
      this.advantagessnowflake,
      this.elementX + this.rectWidth * 0.75,
      this.elementY + this.rectHeight * 0.5, 
      0.1 * this.rectWidth, 
      0.1 * this.rectHeight
      );
    image(
      this.invertarrows, 
      this.elementX + this.rectWidth * 0.75,
      this.elementY + this.rectHeight * 0.70, 
      0.1 * this.rectWidth, 
      0.1 * this.rectHeight
      ); 
  } 
}
