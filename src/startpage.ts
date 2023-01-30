class StartPage extends MenuPage {
  public menu: Menu;
  private characters: p5.Image;
  private fallingsnow: p5.Image;
  // private currentOption: number = 0;
  private options: string[] = ["New Game", "Objectives", "Game Controls"];
  private buttons: p5.Element[] = [];
  private rectWidth: number;
  private rectHeight: number;
  private rectX: number;
  private rectY: number;

  public constructor(menu: Menu) {
    super();
    this.menu = menu;
    this.characters = images.characters;
    this.fallingsnow = images.fallingsnow;
    this.drawShapes();
    removeElements();
    this.drawButtons();
    this.drawShapes();
    this.drawImages();
    this.drawText();
  }

  public drawShapes() {
    push(); // save current styles and transformations
    // rectMode(CENTER);
    fill(47, 78, 107);
    rect(this.rectX, this.rectY, this.rectWidth, this.rectHeight); // larger rect
    pop(); // restore previous styles and transformations
  }

  // Creates the buttons with a for loop based on the options array length
  private drawButtons() {
    for (let i = 0; i < this.options.length; i++) {
      let button = createButton(this.options[i]);
      button.size(150, 40);
      button.center("horizontal");
      button.position(this.rectX + (this.rectWidth - 150) / 2, this.rectY + (i + 1 + 3) * 50);
      button.style("color: #4A7AA7");
      button.style("border-radius: 1rem");
      button.style("border-style: none");
      button.style("font-size: 19px");
      button.style("font-family: Freckle Face");
      button.style("background-color: #D2ECF3");

      button.mouseOver(() => {
        // this.currentOption = i;
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
    textSize(42);
    textAlign(CENTER, CENTER);
    text("Frostbite Frenzy", width / 2, height / 2.6);
    stroke(255, 204, 0);

    pop(); // restore previous styles and transformations
}

 

  public drawImages() {
    image(this.characters, width / 2 - 350, height / 2 - -50, 700, 250);
    image(this.fallingsnow, width / 2 - 342, height / 2 - 295, 684, 245);
  }
}
