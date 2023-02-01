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
    fill(47, 78, 107);
    rect(this.x, this.y, this.width, this.height);
    pop(); // restore previous styles and transformations
  }

  public drawText() {
    push(); // save current styles and transformations
    textFont(fontSansita);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Objectives", this.x + this.width / 2, this.y + this.height / 2 - 150);
    pop(); // restore previous styles and transformations

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(31);
    text("Collect keys", this.x + (this.width / 2) - 200, this.y + (this.height / 2) - 75);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "The player with most keys when the time runs out wins!",
      this.x + (this.width / 2) - 200,
      this.y + (this.height / 2) - 50,
      this.width - (this.width / 2) - 100
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Don't Get Caught", this.x + (this.width / 2) - 200, this.y + (this.height / 2) + 20);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Watch out for monsters - they will freeze you!",
      this.x + (this.width / 2) - 200,
      this.y + (this.height / 2) + 45,
      this.width - (this.width / 2) - 100
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(173, 202, 220);
    textSize(29);
    text("Get Advantages", this.x + (this.width / 2) - 200, this.y + (this.height / 2) + 115);
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Pick up special items to get those keys quicker than your opponent!",
      this.x + (this.width / 2) - 200,
      this.y + (this.height / 2) + 140,
      this.width * 0.3
    );
    pop();

    push();
    textFont(fontFreckleFace);
    fill(255);
    textSize(22);
    textWrap(WORD);
    text("Faster than the blue one!", this.x + (this.width / 2) + 175, this.y + (this.height / 2) + 120, this.width * 0.2);
    pop();
  } 

  protected createBackButton() {
    let button = createButton("Back");
    button.position(this.x + (this.width / 2) - 370, this.y + (this.height / 2) + 200);
    button.size(100, 40);
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
    button.position(this.x + (this.width / 2) + 50, this.y + (this.height / 2) + 130);
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
      image(this.img1, this.width * 0.33, this.height / 2 - this.img1.height * 1.5, this.width * 1.03, this.img1.height);
  
    image(this.key, this.x + (this.width / 2) + 175, this.y + (this.height / 2) - 60, 80, 40);
    image(
      this.monsterdescriptions,
      this.x + (this.width / 2) + 175,
      this.y + (this.height / 2), 115, 105);
  } 
}
