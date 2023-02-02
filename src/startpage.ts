class StartPage extends MenuPage {
  private rectWidth: number;
  private rectHeight: number;
  private elementX: number;
  private elementY: number;
  public menu: Menu;
  private characters: p5.Image;
  // private fallingsnow: p5.Image;
  // private currentOption: number = 0;
  private options: string[] = ["New Game", "Objectives", "Controls"];
  private buttons: p5.Element[] = [];

  public constructor(menu: Menu) {
    super();
    this.rectWidth = windowWidth * 0.6;
    this.rectHeight = windowHeight * 0.8;
    this.elementX = (windowWidth - this.rectWidth) / 2;
    this.elementY = (windowHeight - this.rectHeight) / 2;
    this.menu = menu;
    this.characters = images.characters;
    //this.fallingsnow = images.fallingsnow;
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
    rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight); // larger rect
    pop(); // restore previous styles and transformations
  }

   // Creates the buttons with a for loop based on the options array length
    private drawButtons() {
    for (let i = 0; i < this.options.length; i++) {
      let button = createButton(this.options[i]);
      button.size(this.rectWidth * 0.2, this.rectHeight * 0.1);
      button.center("horizontal");
      button.position(this.elementX + this.rectWidth / 2 - (this.rectWidth * 0.2) / 2, this.elementY + this.rectHeight / 2 - (this.rectHeight * 0.6) / 2 + (i * this.rectHeight * 0.14));
      button.style("color: #4A7AA7");
      button.style("border-radius: 1rem");
      button.style("border-style: none");
      button.style("font-size: 22px");
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
    textSize(60);
    textAlign(CENTER, CENTER);
    text("Frostbite Frenzy", this.elementX + this.rectWidth / 2, this.elementY + this.rectHeight * 0.1);
    stroke(255, 204, 0);
    pop(); // restore previous styles and transformations
  }

  public drawImages(): void {
    let imageWidth = this.rectWidth;
    let imageHeight = (imageWidth / this.characters.width) * this.characters.height;
    image(this.characters, (this.elementX + this.rectWidth * 0.5) - (imageWidth / 2), this.elementY + this.rectHeight - imageHeight, imageWidth, imageHeight);
  }
}
