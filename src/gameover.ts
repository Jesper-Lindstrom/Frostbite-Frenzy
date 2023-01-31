class Gameover extends MenuPage {
  public menu: Menu;
  private greenSnowman: p5.Image;
  private yellowSnowman: p5.Image;
  private key: p5.Image;
  private key2: p5.Image;
  private key3: p5.Image;
  private key4: p5.Image;
  private monsterPurple: p5.Image;
  private monsterBlue: p5.Image;
  private currentOption: number = 0;
  private options: string[] = ["New Game", "Scores"];
  private buttons: p5.Element[] = [];

  private winnerScore: number;
  private loserScore: number;


  public constructor(menu: Menu) {
    super()
    this.menu = menu;
    this.greenSnowman = images.greenSnowman;
    this.yellowSnowman = images.yellowSnowman;
    this.monsterPurple = images.purpleMonsterSingle;
    this.monsterBlue = images.monsterBlue;
    this.key = images.key;
    this.key2 = images.key2;
    this.key3 = images.key3;
    this.key4 = images.key4;
    this.drawButtons();

    this.winnerScore = 2;
    this.loserScore = 3;
  }

  public drawShapes() {
    push();
    strokeWeight(5); // frame thickness
    stroke(255, 255, 255); // set the "frame" color
    fill(74, 122, 167);
    rect(this.x, this.y, this.width, this.height); // "frame"
    line(this.x, height / 2, this.width + this.x, height /2);
    pop(); // restore previous styles and transformations
  }

  protected drawText() {

    push(); // save current styles and transformations
    textFont("Freckle Face");
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("The winner!!", width / 2, this.y + this.height * 0.05);
    text(this.winnerScore, width / 2, this.y + this.height * 0.4);
    pop(); // restore previous styles and transformations

    push(); // save current styles and transformations
    textFont("Freckle Face");
    fill(255, 0, 0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Defeated!", width / 2, this.y + this.height * 0.55);
    text(this.loserScore, width / 2, this.y + this.height * 0.9);
    pop(); // restore previous styles and transformations

}

public drawImages() {
  push();
  imageMode(CENTER);
  image(this.yellowSnowman, width / 2, this.y + this.height * 0.25, this.width * 0.12, this.width * 0.20);
  image(this.greenSnowman, width / 2, this.y + this.height * 0.75,  this.width * 0.12, this.width * 0.20);
  image(this.key, this.x + this.width * 0.1, this.y + this.height * 0.1, this.width * 0.1, this.width * 0.05);
  image(this.key2, this.x + this.width * 0.2, this.y + this.height * 0.2, this.width * 0.1, this.width * 0.05);
  image(this.key3, this.x + this.width * 0.8, this.y + this.height * 0.2, this.width * 0.1, this.width * 0.05);
  image(this.key4, this.x + this.width * 0.9, this.y + this.height * 0.1, this.width * 0.1, this.width * 0.05);
  image(this.monsterPurple, this.x + this.width * 0.25, height / 2 + this.height * 0.1, this.width * 0.1, this.width * 0.12);
  image(this.monsterBlue, this.x + this.width * 0.75, height / 2 + this.height * 0.1, this.width * 0.1, this.width * 0.12);
  pop();
}

  // Creates the buttons with a for loop based on the options array length
  private drawButtons() {
    for (let i = 0; i < this.options.length; i++) {
      let button = createButton(this.options[i]);
      button.position(this.x + this.width - 170, this.y + this.height - 160 + (i + 1) * 50);
      button.size(150, 40);
      // button.center("horizontal");
      button.style("color: #4A7AA7");
      button.style("border-radius: 1rem");
      button.style("border-style: none");
      button.style("font-size: 19px");
      button.style("font-family: Freckle Face");
      button.style("background-color: #D2ECF3");

      button.mouseOver(() => {
        this.currentOption = i;
        this.updateHover();
      });

      button.mouseOut(() => {
        this.currentOption = 0;
        this.updateHover();
      });

      button.mousePressed(() => {
        // callback function to call when the button is clicked
        if (i === 0) {
          gameFrame.newGame();
        } else if (i === 1) {
        } else if (i === 2) { 
        }
      });
      this.buttons.push(button);
    }
  }

  private updateHover() {
    // update hover effect on buttons
    for (let i = 0; i < this.options.length; i++) {
      if (i === this.currentOption) {
        this.buttons[i].style("background-color", "rgb(100, 190, 230)");
      } else {
        this.buttons[i].style("background-color", "#D2ECF3");
      }
      noLoop();
    }
  }

}

/* import { MenuPage } from '../src/menupage';

class GameOver extends MenuPage {
    
public constructor() {
    super();
} 

public draw() {
    super.draw();
}
    
    
} */

