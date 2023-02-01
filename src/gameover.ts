class Gameover extends MenuPage {
  private key: p5.Image;
  private key2: p5.Image;
  private key3: p5.Image;
  private key4: p5.Image;
  private monsterPurple: p5.Image;
  private monsterBlue: p5.Image;
  private currentOption: number = 0;
  private options: string[] = ["New Game"];
  private buttons: p5.Element[] = [];

  private winnerImage: p5.Image;
  private loserImage: p5.Image;
  private winnerScore: number;
  private loserScore: number;


  public constructor(scores: Scores) {
    super()
    this.monsterPurple = images.purpleMonsterSingle;
    this.monsterBlue = images.monsterBlue;
    this.key = images.key;
    this.key2 = images.key2;
    this.key3 = images.key3;
    this.key4 = images.key4;
    this.drawButtons();

    if (scores[1] > scores[2]) {
      this.winnerImage = images.yellowSnowman;
      this.winnerScore = scores[1];
      this.loserImage = images.greenSnowman;
      this.loserScore = scores[2];
    } else {
      this.winnerImage = images.greenSnowman;
      this.winnerScore = scores[2];
      this.loserImage = images.yellowSnowman;
      this.loserScore = scores[1];
    }
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
  image(this.winnerImage, width / 2, this.y + this.height * 0.25, this.width * 0.12, this.width * 0.20);
  image(this.loserImage, width / 2, this.y + this.height * 0.75,  this.width * 0.12, this.width * 0.20);
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
      button.position(this.x + this.width - 170, this.y + this.height - 110 + (i + 1) * 50);
      button.size(150, 40);
      button.style("color: #4A7AA7");
      button.style("border-radius: 1rem");
      button.style("border-style: none");
      button.style("font-size: 19px");
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
        } else if (i === 2) { 
        }
      });
      this.buttons.push(button);
    }
  }

}

