/// <reference path="menupage.ts" />

class Controls extends MenuPage {
  public menu: Menu;
  private img: p5.Image;
  private img1: p5.Image;
  private img2: p5.Image;
  private img3: p5.Image;

  public constructor(menu: Menu) {
    super();
    this.menu = menu;
    this.img = images.iceLower;
    this.img1 = images.iceUpper;
    this.img2 = images.wsadButtons;
    this.img3 = images.arrowButtons;
    this.drawShapes();
    this.drawText();
    this.drawImages();
    this.createBackButton();
  }

  public drawShapes() {
    push(); // save current styles and transformations
    rectMode(CENTER);
    rect(width / 2, height / 2, 700, 600); // larger rect
    pop();

    push();
    strokeWeight(5); // frame thickness
    stroke(255, 255, 255); // set the "frame" color
    fill(47, 78, 107);
    rectMode(CENTER);
    rect(width / 2, height / 2, 700, 600); // "frame"
    pop(); // restore previous styles and transformations
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

  public drawText() {
    push(); // save current styles and transformations
    fill(255);
    textFont(fontSansita);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Game Controls", width / 2, height / 2.7);
    pop(); // restore previous styles and transformations

    push();
    fill(255);
    textSize(20);
    text("Player1", width * 0.445, height * 0.455);
    textSize(16);
    text("Movement", width * 0.443, height * 0.56);
    textFont(fontSansita);

    pop();
    push();
    fill(255);
    textSize(20);
    text("Player2", width * 0.535, height * 0.455);
    textSize(16);
    text("Movement", width * 0.533, height * 0.56);
    textFont(fontSansita);
    pop();

    push();
    fill(255);
    textSize(18);
    text("W | Arrow Up", width * 0.429, height * 0.6);
    text("S | Arrow Down", width * 0.43, height * 0.62);
    text("A | Arrow Left", width * 0.43, height * 0.64);
    text("D | Arrow Right", width * 0.43, height * 0.66);
    text("Move Up", width * 0.535, height * 0.6);
    text("Move Down", width * 0.535, height * 0.62);
    text("Move Left", width * 0.535, height * 0.64);
    text("Move Right", width * 0.535, height * 0.66);
    textFont(fontSansita);
    pop();
  }

  public drawImages() {
    image(this.img1, width / 2 - 370, height / 2 - 342, 750, 150);
    image(this.img, width / 2 - 355, height / 2 - -283, 710, 65);
    image(this.img2, width / 2 - 180, height / 2 - 30, 140, 80);
    image(this.img3, width / 2 - -50, height / 2 - 30, 140, 80);
  }
}
