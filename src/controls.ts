/// <reference path="menupage.ts" />

class Controls extends MenuPage {
  private menu: IMenu;
  private wsadButtonsImage: p5.Image;
  private arrowButtonsImage: p5.Image;
  private iceImage: p5.Image;
  private movementTextImage: p5.Image;

  public constructor(menu: IMenu) {
    super();
    this.menu = menu;
    this.wsadButtonsImage = images.wsadButtons;
    this.arrowButtonsImage = images.arrowButtons;
    this.iceImage = images.ice;
    this.movementTextImage = images.movement;
    this.createBackButton();
  }

  protected drawShapes() {
    fill(47, 78, 107);
    rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight);
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
      this.menu.openPage(new StartPage(this.menu));
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

  protected drawText() {
    push();
    fill(255);
    textFont(fontSansita);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Controls", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.15);
    pop();

    push();
    fill(255);
    textSize(20);
    text("Player1", this.elementX + this.rectWidth * 0.18, this.elementY + this.rectHeight * 0.35);
    textSize(20);
    text("Movement", this.elementX + this.rectWidth * 0.16, this.elementY + this.rectHeight * 0.73);
    textFont(fontSansita);

    pop();
    push();
    fill(255);
    textSize(20);
    text("Player2", this.elementX + this.rectWidth * 0.90 - 0.17 * this.rectWidth, this.elementY + this.rectHeight * 0.35);
    textSize(20);
    text("Movement", this.elementX + this.rectWidth * 0.90 - 0.18 * this.rectWidth, this.elementY + this.rectHeight * 0.73);
    textFont(fontSansita);
    pop();

  }

  protected drawImages() {
    let imageWidth = this.rectWidth;
    let imageHeight = (imageWidth / this.iceImage.width) * this.iceImage.height;
    image(this.iceImage, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY, imageWidth, imageHeight);

    image(this.wsadButtonsImage,
      this.elementX + this.rectWidth * 0.1,
      this.elementY + this.rectHeight / 2.5,
      0.25 * this.rectWidth,
      0.25 * this.rectHeight
    );

    image(this.arrowButtonsImage,
      this.elementX + this.rectWidth * 0.90 - 0.25 * this.rectWidth,
      this.elementY + this.rectHeight / 2.5,
      0.25 * this.rectWidth,
      0.25 * this.rectHeight
    );

    image(this.movementTextImage,
      this.elementX + this.rectWidth * 0.35,
      this.elementY + this.rectHeight * 0.75
    );
  }
}
