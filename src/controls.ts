/// <reference path="menupage.ts" />

class Controls extends MenuPage {
  private rectWidth: number;
  private rectHeight: number;
  private elementX: number;
  private elementY: number;
  public menu: Menu;
  private img: p5.Image;
  private img1: p5.Image;
  private img2: p5.Image;
  private img3: p5.Image;
  private img4: p5.Image;
  private img5: p5.Image;

  public constructor(menu: Menu) {
    super();
    this.rectWidth = windowWidth * 0.6;
    this.rectHeight = windowHeight * 0.8;
    this.elementX = (windowWidth - this.rectWidth) / 2;
    this.elementY = (windowHeight - this.rectHeight) / 2;
    this.menu = menu;
    this.img = images.iceLower;
    this.img1 = images.iceUpper;
    this.img2 = images.wsadButtons;
    this.img3 = images.arrowButtons;
    this.img4 = images.ice;
    this.img5 = images.movement;
    this.drawShapes();
    this.drawText();
    this.drawImages();
    this.createBackButton();
  }

  public drawShapes() {
    fill(47, 78, 107);
    rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight); // larger rect
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


  public drawText() {
    push(); // save current styles and transformations
    fill(255);
    textFont(fontSansita);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Controls", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.15);
    pop(); // restore previous styles and transformations

    push();
    fill(255);
    textSize(20);
    text("Player1", this.elementX + this.rectWidth * 0.18, this.elementY + this.rectHeight * 0.35);
    textSize(20);
    text("Movement",this.elementX + this.rectWidth * 0.16, this.elementY + this.rectHeight * 0.73);
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

  public drawImages() {
    let imageWidth = this.rectWidth;
    let imageHeight = (imageWidth / this.img4.width) * this.img4.height;
    image(this.img4, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY, imageWidth, imageHeight);
    
    image(this.img2,
      this.elementX + this.rectWidth * 0.10,
      this.elementY + this.rectHeight / 2.5,
      0.25 * this.rectWidth,
      0.25 * this.rectHeight
      );
    
    image(this.img3,
      this.elementX + this.rectWidth * 0.90 - 0.25 * this.rectWidth,
      this.elementY + this.rectHeight / 2.5,
      0.25 * this.rectWidth,
      0.25 * this.rectHeight
      );
    
    
    image(this.img5, this.elementX + this.rectWidth * 0.35, this.elementY + this.rectHeight * 0.75);
      
      
      
      
      
  }
}
