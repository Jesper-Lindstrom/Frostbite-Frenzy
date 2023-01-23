class Gameover {
  public constructor() {}

  public draw() {
    this.drawShape();
  }

  private drawShape() {
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
    line(1310, 490, 610, 490);
    pop(); // restore previous styles and transformations
  }
}

/* import { MenuPage } from '../src/menupage';

class GameOver extends MenuPage {
    
public constructor(content: PageContent) {
    super(content);
} 
    
    
} */
