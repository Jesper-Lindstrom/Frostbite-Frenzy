/// <reference path="menupage.ts" />
class Advantages extends MenuPage {
  public menu: Menu;
  private img: p5.Image;
  private img1: p5.Image;
  private watch: p5.Image;
  private advantagessnowflake: p5.Image;
  private invertarrows: p5.Image;

  public constructor(menu: Menu) {
    super();
    this.menu = menu;
    this.img = images.iceLower;
    this.img1 = images.iceUpper;
    this.watch = images.watch;
    this.advantagessnowflake = images.advantagessnowflake;
    this.invertarrows = images.invertarrows;
    this.drawShapes();
    this.drawImages();
    this.drawText();
    this.createBackButton();
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
    text("Advantages", width / 2, height / 3.5);
    pop(); // restore previous styles and transformations

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(31);
    text("Get Faster", (width / 2) * 0.7, height / 2.6);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab a clock to become faster!",
      (width / 2) * 0.7,
      height / 2.5,
      150
    );
    pop();

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(29);
    text("Get Stronger", (width / 2) * 0.7, height / 2);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab a snowflake to be able to walk through the monsters!",
      (width / 2) * 0.7,
      height / 1.94,
      285
    );
    pop();

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(29);
    textWrap(WORD);
    text("Mess With The Other Player", (width / 2) * 0.7, height / 1.7, 180);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab the arrows to invert the other player's controls!",
      (width / 2) * 0.7,
      height / 1.51,
      280
    );
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
      this.menu.openPage(new Objectives(this.menu));
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
    image(this.watch, width / 2 - -180, height / 2 - 120, 90, 70);
    image(this.advantagessnowflake, width / 2 - -180, height / 2 - -12, 90, 70);
    image(this.invertarrows, width / 2 - -180, height / 2 - -150, 85, 70);
  }
}
