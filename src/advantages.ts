/// <reference path="menupage.ts" />

class Advantages extends MenuPage {
  private menu: IMenu;
  private iceImage: p5.Image;
  private watchImage: p5.Image;
  private snowflakeImage: p5.Image;
  private invertarrowsImage: p5.Image;

  public constructor(menu: IMenu) {
    super();
    this.menu = menu;
    this.iceImage = images.ice;
    this.watchImage = images.watch;
    this.snowflakeImage = images.snowflake;
    this.invertarrowsImage = images.invertarrows;
    this.createBackButton();
  }

  protected drawShapes() {
    fill(47, 78, 107);
    rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight);
  }

  protected drawText() {
    push();
    textFont(fontSansita);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Advantages", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.15);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(31);
    text("Get faster", this.elementX + this.rectWidth * 0.3, this.elementY + this.rectHeight * 0.3);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab a clock and outrun your opponent!",
      this.elementX + (this.rectWidth * 0.3),
      this.elementY + this.rectHeight * 0.35,
      this.rectWidth * 0.4
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Get stronger", this.elementX + this.rectWidth * 0.3, this.elementY + this.rectHeight * 0.5);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab a snowflake to be able to walk through the monsters!",
      this.elementX + (this.rectWidth * 0.3),
      this.elementY + this.rectHeight * 0.55,
      this.rectWidth * 0.4
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Mess with the other player", this.elementX + this.rectWidth * 0.3, this.elementY + this.rectHeight * 0.7);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab the arrows to invert your opponent's controls!",
      this.elementX + (this.rectWidth * 0.3),
      this.elementY + this.rectHeight * 0.75,
      this.rectWidth * 0.45
    );
    pop();
  }

  private createBackButton() {
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

  protected drawImages() {
    let imageWidth = this.rectWidth;
    let imageHeight = (imageWidth / this.iceImage.width) * this.iceImage.height;
    image(this.iceImage, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY, imageWidth, imageHeight);

    image(this.watchImage,
      this.elementX + this.rectWidth * 0.75,
      this.elementY + this.rectHeight * 0.3,
      0.1 * this.rectWidth,
      0.1 * this.rectHeight
    );
    image(
      this.snowflakeImage,
      this.elementX + this.rectWidth * 0.75,
      this.elementY + this.rectHeight * 0.5,
      0.1 * this.rectWidth,
      0.1 * this.rectHeight
    );
    image(
      this.invertarrowsImage,
      this.elementX + this.rectWidth * 0.75,
      this.elementY + this.rectHeight * 0.7,
      0.1 * this.rectWidth,
      0.1 * this.rectHeight
    );
  }
}
