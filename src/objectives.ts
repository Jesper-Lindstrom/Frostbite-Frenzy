class Objectives extends MenuPage {
  private menu: IMenu;
  private iceImage: p5.Image;
  private key: p5.Image;
  private monsterdescriptions: p5.Image;

  public constructor(menu: IMenu) {
    super();
    this.menu = menu;
    this.iceImage = images.ice;
    this.key = images.key;
    this.monsterdescriptions = images.monsterdescriptions;
    this.createBackButton();
    this.readMore();
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
    text("Objectives", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.15);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(31);
    text("Collect keys", this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.3);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "The player with most keys when the time runs out wins!",
      this.elementX + (this.rectWidth * 0.30),
      this.elementY + this.rectHeight * 0.35,
      this.rectWidth * 0.4
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Don't Get Caught", this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.5);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Watch out for monsters - they will freeze you!",
      this.elementX + (this.rectWidth * 0.30),
      this.elementY + this.rectHeight * 0.55,
      this.rectWidth * 0.4
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Get Advantages", this.elementX + this.rectWidth * 0.30, this.elementY + this.rectHeight * 0.7);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Pick up special items to get those keys quicker than your opponent!",
      this.elementX + (this.rectWidth * 0.3),
      this.elementY + this.rectHeight * 0.75,
      this.rectWidth * 0.45
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text("Faster than the blue one!", this.elementX + this.rectWidth * 0.75, this.elementY + this.rectHeight * 0.65, this.rectWidth * 0.2);
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

  private readMore() {
    let button = createButton("Read More");
    button.position(this.elementX + this.rectWidth / 2 - (this.rectWidth * 0.2) / 2, this.elementY + this.rectHeight - this.rectHeight * 0.11);
    button.size(this.rectWidth * 0.2, this.rectHeight * 0.1);

    button.style("color: #4A7AA7");
    button.style("border-radius: 1rem");
    button.style("border-style: none");
    button.style("font-size: 22px");
    button.style("font-family: Freckle Face");
    button.style("background-color: #D2ECF3");

    button.mousePressed(() => {
      removeElements();
      this.menu.openPage(new Advantages(this.menu));
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

    image(this.key,
      this.elementX + this.rectWidth * 0.75,
      this.elementY + this.rectHeight * 0.30,
      0.1 * this.rectWidth,
      0.1 * this.rectHeight);
    image(
      this.monsterdescriptions,
      this.elementX + this.rectWidth * 0.75,
      this.elementY + this.rectHeight * 0.42,
      0.2 * this.rectWidth,
      0.2 * this.rectHeight);
  }
}
