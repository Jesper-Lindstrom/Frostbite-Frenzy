class Gameover {
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


  public constructor() {
    this.greenSnowman = images.greenSnowman;
    this.yellowSnowman = images.yellowSnowman;
    this.monsterPurple = images.purpleMonsterSingle;
    this.monsterBlue = images.monsterBlue;
    this.key = images.key;
    this.key2 = images.key2;
    this.key3 = images.key3;
    this.key4 = images.key4;
  }

  public draw() {
    this.drawShapes();
    this.drawText();
    this.drawImages();
    this.drawButtons();
  }

  public drawShapes() {
    push(); // save current styles and transformations
    rectMode(CENTER);
    fill(74, 122, 167);
    rect(width / 2, height / 2, 700, 600); // larger rect
    pop();

    push();
    strokeWeight(5); // frame thickness
    stroke(255, 255, 255); // set the "frame" color
    fill(74, 122, 167);
    rectMode(CENTER);
    rect(width / 2, height / 2, 700, 600); // "frame"
    line(1033, 350, 338, 350);
    pop(); // restore previous styles and transformations
  }

  private drawText() {

    // push();
    // textFont("Sansita");
    // fill(173, 202, 220);
    // textSize(31);
    // textAlign(CENTER, CENTER);
    // text("Congratulations!!", (width / 2), height / 8);
    // pop();

    push(); // save current styles and transformations
    textFont("Freckle Face");
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("The winner!!", width / 2, height / 5.5);
    pop(); // restore previous styles and transformations

    push(); // save current styles and transformations
    textFont("Freckle Face");
    fill(255, 0, 0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Defeated!", width / 2, height / 1.8);
    pop(); // restore previous styles and transformations

}

private drawImages() {
  if (this.yellowSnowman.width > 0 && this.yellowSnowman.height > 0) {
    image(this.yellowSnowman, width / 2 - 80, height / 2 - 180, 150, 170);
  }
  if (this.greenSnowman.width > 0 && this.greenSnowman.height > 0) {
    image(this.greenSnowman, width / 2 - 80, height / 2 - -80, 150, 170);
  }
  if (this.key.width > 0 && this.key.height > 0) {
    image(this.key, width / 2 - -180, height / 2 - 190, 70, 50);
  }
  if (this.key2.width > 0 && this.key2.height > 0) {
    image(this.key2, width / 2 - -120, height / 2 - 100, 70, 50);
  }
  if (this.key3.width > 0 && this.key3.height > 0) {
    image(this.key3, width / 2 - 200, height / 2 - 100, 70, 50);
  }
  if (this.key4.width > 0 && this.key4.height > 0) {
    image(this.key4, width / 2 - 250, height / 2 - 190, 70, 50);
  }
  if (this.monsterPurple.width > 0 && this.monsterPurple.height > 0) {
    image(this.monsterPurple, width / 2 - -130, height / 2 - -40, 50, 50);
  }
  if (this.monsterBlue.width > 0 && this.monsterBlue.height > 0) {
    image(this.monsterBlue, width / 2 - 200, height / 2 - -40, 50, 50);
  }
 
}

  // Creates the buttons with a for loop based on the options array length
  private drawButtons() {
    for (let i = 0; i < this.options.length; i++) {
      let button = createButton(this.options[i]);
      button.position(width / 2, height / 1.4 + (i + 1) * 50);
      button.size(150, 40);
      button.center("horizontal");
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
          showObjectives();
        } else if (i === 2) {
          showGameControls();
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
        console.log("Hover effect");
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

