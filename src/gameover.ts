class Gameover {
  private greenSnowman: p5.Image;
  private yellowSnowman: p5.Image;
  private key: p5.Image;
  private key2: p5.Image;
  private key3: p5.Image;
  private key4: p5.Image;
  private monsterPurple: p5.Image;
  private monsterBlue: p5.Image;


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

