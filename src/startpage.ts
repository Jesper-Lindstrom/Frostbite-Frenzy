/// <reference path="menupage.ts" />

class StartPage extends MenuPage {
  public menu: Menu;
  private characters: p5.Image;
  // private fallingsnow: p5.Image;
  private options: string[] = ["New Game", "Objectives", "Game Controls"];
  private buttons: p5.Element[] = [];

  public constructor(menu: Menu) {
    super();
    this.menu = menu;
    this.characters = images.characters;
    // this.fallingsnow = images.fallingsnow;
    this.drawShapes();
    removeElements();
    this.drawButtons();
    this.drawShapes();
    this.drawImages();
    this.drawText();
  }

  public drawShapes() {
    push(); // save current styles and transformations
    fill(47, 78, 107);
    rect(this.x, this.y, this.width, this.height); // larger rect
    pop(); // restore previous styles and transformations
  }

  // Creates the buttons with a for loop based on the options array length
  private drawButtons() {
    for (let i = 0; i < this.options.length; i++) {
      let button = createButton(this.options[i]);
      button.size(this.width * 0.25, this.height * 0.08);
      button.center("horizontal");
      button.position(
        this.x + this.width / 2.7,
        this.y + this.height / 4.2 + i * 60
      );
      button.style("color: #4A7AA7");
      button.style("border-radius: 1rem");
      button.style("border-style: none");
      button.style("font-size: 22px");
      button.style("font-family: Freckle Face");
      button.style("background-color: #D2ECF3");

      button.mouseOver(() => {
        this.buttons[i].style("color", "rgb(255, 255, 255)");
        this.buttons[i].style("background-color", "rgb(15, 82, 186");
      });

      button.mouseOut(() => {
        this.buttons[i].style("background: #D2ECF3");
        this.buttons[i].style("color: #4A7AA7");
      });
      button.mousePressed(() => {
        // callback function to call when the button is clicked
        if (i === 0) {
          gameFrame.newGame();
        } else if (i === 1) {
          redraw();
          removeElements();
          this.menu.openPage(new Objectives(this.menu));
        } else if (i === 2) {
          redraw();
          removeElements();
          this.menu.openPage(new Controls(this.menu));
        }
      });
      this.buttons.push(button);
    }
  }

  public drawText() {
    push(); // save current styles and transformations
    textFont(fontFreckleFace);
    fill(255);
    textSize(60);
    textAlign(CENTER, CENTER);
    text(
      "Frostbite Frenzy",
      this.x + this.width / 2,
      this.y + this.height / 6.5
    );
    stroke(255, 204, 0);
    pop(); // restore previous styles and transformations
  }

  public drawImages(): void {
    let imageWidth = this.width;
    let imageHeight =
      (imageWidth / this.characters.width) * this.characters.height;
    image(
      this.characters,
      this.x + this.width * 0.5 - imageWidth / 2,
      this.y + this.height - imageHeight,
      imageWidth,
      imageHeight
    );
  }
}
