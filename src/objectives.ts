/// <reference path="menupage.ts" />

class Objectives extends MenuPage {
  public menu: Menu;
  private img: p5.Image;
  private img1: p5.Image;
  private key: p5.Image;
  private monsterdescriptions: p5.Image;

  public constructor(menu: Menu) {
    super();
    this.menu = menu;
    this.img = images.iceLower;
    this.img1 = images.iceUpper;
    this.key = images.key;
    this.monsterdescriptions = images.monsterdescriptions;
    this.drawShapes();
    this.drawText();
    this.drawImages();
    this.createBackButton();
    this.ReadMore();
  }

  public drawShapes() {
    push(); // save current styles and transformations
    rectMode(CENTER);
    fill(47, 78, 107);
    rect(width / 2, height / 2, 700, 600); // larger rect
    pop(); // restore previous styles and transformations

    push();
    strokeWeight(5); // frame thickness
    stroke(255, 255, 255); // set the "frame" color
    fill(47, 78, 107);
    rectMode(CENTER);
    rect(width / 2, height / 2, 700, 600); // "frame"
    pop(); // restore previous styles and transformations
  }

  public drawText() {
    push(); // save current styles and transformations
    textFont(fontSansita);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Objectives", width / 2, height / 3.3);
    pop(); // restore previous styles and transformations

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(31);
    text("Collect keys", (width / 2) * 0.7, height / 2.52);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "The player with most keys when the time runs out wins!",
      (width / 2) * 0.7,
      height / 2.4,
      280
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Don't Get Caught", (width / 2) * 0.7, height / 1.97);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Watch out for monsters - they will freeze you!",
      (width / 2) * 0.7,
      height / 1.9,
      280
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Get Advantages", (width / 2) * 0.7, height / 1.6);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Pick up special items to get those keys quicker than your opponent!",
      (width / 2) * 0.7,
      height / 1.56,
      280
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text("Faster than the blue one!", (width / 2) * 1.27, height / 1.68, 100);
    pop();
  }

  protected createBackButton() {
    let button = createButton("Back");
    button.position(width / 2 - 315, height / 2 - -225);
    button.size(150, 40);
    button.style("color: #FFFFFF");
    button.style("border-radius: 1rem");
    button.style("border-style: none");
    button.style("font-size: 19px");
    button.style("font-family: Freckle Face");
    button.style("background: rgb(0,137,162)");
    button.style(
      "background: linear-gradient(90deg, rgba(0,137,162,1) 6%, rgba(124,172,222,1) 41%, rgba(14,141,235,1) 81%, rgba(9,70,209,1) 99%);"
    );
    button.mousePressed(() => {
      this.menu.openPage(new StartPage(this.menu));
    });
    button.mouseOver(() => {
      button.style("background: rgb(1,108,129);");
      button.style(
        "background: linear-gradient(90deg, rgba(1,108,129,1) 7%, rgba(55,120,189,1) 41%, rgba(11,110,184,1) 81%, rgba(0,48,158,1) 99%);"
      );
      button.style(
        "box-shadow: rgb(230,230,250) 0px 0px 0px 3px, rgb(0,191,255) 0px 0px 0px 6px, rgb(50, 217, 250) 0px 0px 0px 9px, rgb(100,149,237) 0px 0px 0px 12px, rgb(240,248,255) 0px 0px 0px 15px"
      );
    });
    button.mouseOut(() => {
      button.style("background: rgb(0,137,162)");
      button.style(
        "background: linear-gradient(90deg, rgba(0,137,162,1) 6%, rgba(124,172,222,1) 41%, rgba(14,141,235,1) 81%, rgba(9,70,209,1) 99%);"
      );
      button.style("box-shadow: none");
    });
  }

  protected ReadMore() {
    let button = createButton("Read More");
    button.position(width / 2 - 20, height / 2 - -210);
    button.size(60, 60);

    button.style("color: #FFFFFF");
    button.style("border-radius: 10rem");
    button.style("border-style: none");
    button.style("font-size: 19px");
    button.style("font-family: Freckle Face");
    button.style("background: rgb(0,137,162)");
    button.style(
      "background: linear-gradient(90deg, rgba(0,137,162,1) 6%, rgba(124,172,222,1) 41%, rgba(14,141,235,1) 81%, rgba(9,70,209,1) 99%);"
    );
    button.mousePressed(() => {
      removeElements();
      this.menu.openPage(new Advantages(this.menu));
    });
    button.mouseOver(() => {
      button.style("background: rgb(1,108,129);");
      button.style(
        "background: linear-gradient(90deg, rgba(1,108,129,1) 7%, rgba(55,120,189,1) 41%, rgba(11,110,184,1) 81%, rgba(0,48,158,1) 99%);"
      );
      button.style(
        "box-shadow: rgb(230,230,250) 0px 0px 0px 3px, rgb(0,191,255) 0px 0px 0px 6px, rgb(50, 217, 250) 0px 0px 0px 9px, rgb(100,149,237) 0px 0px 0px 12px, rgb(240,248,255) 0px 0px 0px 15px"
      );
    });
    button.mouseOut(() => {
      button.style("background: rgb(0,137,162)");
      button.style(
        "background: linear-gradient(90deg, rgba(0,137,162,1) 6%, rgba(124,172,222,1) 41%, rgba(14,141,235,1) 81%, rgba(9,70,209,1) 99%);"
      );
      button.style("box-shadow: none");
    });
  }

  public drawImages() {
    image(this.img1, width / 2 - 360, height / 2 - 330, 730, 130);
    image(this.img, width / 2 - 355, height / 2 - -283, 710, 65);
    image(this.key, width / 2 - -190, height / 2 - 90, 80, 40);
    image(
      this.monsterdescriptions,
      width / 2 - -165,
      height / 2 - 15,
      115,
      105
    );
  }
}
