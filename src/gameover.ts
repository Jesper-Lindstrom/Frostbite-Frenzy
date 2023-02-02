class Gameover extends MenuPage {
  private menu: IMenu;
  private key: p5.Image;
  private monsterPurple: p5.Image;
  private monsterBlue: p5.Image;
  private options: string[] = ["New Game", "Back to Menu"];
  private buttons: p5.Element[] = [];
  private winnerImage: p5.Image;
  private loserImage: p5.Image;
  private winnerScore: number;
  private loserScore: number;
  private trophy: p5.Image;

  public constructor(menu: IMenu, scores: Scores) {
    super();
    this.menu = menu;
    this.monsterPurple = images.purpleMonsterSingle;
    this.monsterBlue = images.monsterBlue;
    this.trophy = images.trophy;
    this.key = images.key;
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

  protected drawShapes() {
    push();
    strokeWeight(5); 
    stroke(255, 255, 255); 
    fill(47, 78, 107);
    rect((windowWidth - this.rectWidth) / 2, (windowHeight - this.rectHeight) / 2, this.rectWidth, this.rectHeight);
    line(this.elementX, height / 2, this.rectWidth + this.elementX, height / 2);
    pop(); 
  }

  protected drawText() {
    push(); 
    textFont("Freckle Face");
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("The winner!!", width / 2, this.elementY + this.rectHeight * 0.05);
    text(this.winnerScore, width / 2, this.elementY + this.rectHeight * 0.45);
    pop(); 

    push(); 
    textFont("Freckle Face");
    fill(255, 0, 0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Defeated!", width / 2, this.elementY + this.rectHeight * 0.55);
    text(this.loserScore, width / 2, this.elementY + this.rectHeight * 0.95);
    pop(); 
  }

  protected drawImages() {
    push();
    imageMode(CENTER);
    image(
      this.winnerImage,
      width / 2,
      this.elementY + this.rectHeight * 0.25,
      this.rectWidth * 0.12,
      this.rectWidth * 0.2
    );
    image(
      this.loserImage,
      width / 2,
      this.elementY + this.rectHeight * 0.75,
      this.rectWidth * 0.12,
      this.rectWidth * 0.2
    );
    image(
      this.key,
      this.elementX + this.rectWidth * 0.1,
      this.elementY + this.rectHeight * 0.1,
      this.rectWidth * 0.1,
      this.rectWidth * 0.05
    );
    image(
      this.key,
      this.elementX + this.rectWidth * 0.2,
      this.elementY + this.rectHeight * 0.2,
      this.rectWidth * 0.1,
      this.rectWidth * 0.05
    );
    image(
      this.trophy,
      this.elementX + this.rectWidth * 0.2,
      this.elementY + this.rectHeight * 0.37,
      this.rectWidth * 0.2,
      this.rectWidth * 0.2
    );
    image(
      this.trophy,
      this.elementX + this.rectWidth * 0.8,
      this.elementY + this.rectHeight * 0.37,
      this.rectWidth * 0.2,
      this.rectWidth * 0.2
    );
    image(
      this.key,
      this.elementX + this.rectWidth * 0.8,
      this.elementY + this.rectHeight * 0.2,
      this.rectWidth * 0.1,
      this.rectWidth * 0.05
    );
    image(
      this.key,
      this.elementX + this.rectWidth * 0.9,
      this.elementY + this.rectHeight * 0.1,
      this.rectWidth * 0.1,
      this.rectWidth * 0.05
    );
    image(
      this.monsterPurple,
      this.elementX + this.rectWidth * 0.25,
      height / 2 + this.rectHeight * 0.1,
      this.rectWidth * 0.1,
      this.rectWidth * 0.12
    );
    image(
      this.monsterBlue,
      this.elementX + this.rectWidth * 0.75,
      height / 2 + this.rectHeight * 0.1,
      this.rectWidth * 0.1,
      this.rectWidth * 0.12
    );
    pop();
  }

  private drawButtons() {
    for (let i = 0; i < this.options.length; i++) {
      let button = createButton(this.options[i]);
      button.position(
        this.elementX + this.rectWidth - 170,
        this.elementY + this.rectHeight - 110 + (i - 0.5) * 50
      );
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
        if (i === 0) {
          gameFrame.newGame();
        } else if (i === 1) {
          this.menu.openPage(new StartPage(this.menu));
        }
      });
      this.buttons.push(button);
    }
  }
}
