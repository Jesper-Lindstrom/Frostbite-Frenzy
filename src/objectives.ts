class Objectives {
  private readMoreLink: string;
  private img: p5.Image;
  private img1: p5.Image;
  private key: p5.Image;
  private monsterdescriptions: p5.Image;

  public constructor() {
    this.readMoreLink = "Read More";
    this.img = images.iceLower;
    this.img1 = images.iceUpper;
    this.key = images.key;
    this.monsterdescriptions = images.monsterdescriptions;
  }

  public draw() {
    this.drawShape();
    this.drawText();
    this.drawImages();
    this.mousePressed();
  }

  private drawShape() {
    push(); // save current styles and transformations
    rectMode(CENTER);
    fill(47, 78, 107);
    rect(width / 2, height / 2, 700, 600); // larger rect
    pop(); // restore previous styles and transformations

    push();
    strokeWeight(5); // frame thickness
    stroke(255, 255, 255); // set the "frame" color
    fill(47, 78, 107);
    rectMode(CENTER);
    rect(width / 2, height / 2, 700, 600); // "frame"
    pop(); // restore previous styles and transformations
  }

  private drawText() {
    push(); // save current styles and transformations
    textFont(fontSansita);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Objectives", width / 2, height / 3.3);
    pop(); // restore previous styles and transformations

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(31);
    text("Collect keys", (width / 2) * 0.7, height / 2.52);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "The player with most keys when the time runs out wins!",
      (width / 2) * 0.7,
      height / 2.4,
      280
    );
    pop();

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(29);
    text("Don't Get Caught", (width / 2) * 0.7, height / 1.97);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Watch out for monsters - they will freeze you!",
      (width / 2) * 0.7,
      height / 1.9,
      280
    );
    pop();

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(29);
    text("Get Advantages", (width / 2) * 0.7, height / 1.6);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Pick up special items to get those keys quicker than your opponent!",
      (width / 2) * 0.7,
      height / 1.56,
      280
    );
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text("Faster than the blue one!", (width / 2) * 1.27, height / 1.68, 100);
    pop();

    push();
    textFont("Sansita");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text("Read more", (width / 2) * 0.9, height / 1.35, 100);
    pop();
  }

  private drawImages() {
    if (this.img.width > 0 && this.img.height > 0) {
      image(this.img1, width / 2 - 360, height / 2 - 330, 730, 130);
    }
    if (this.img1.width > 0 && this.img1.height > 0) {
      image(this.img, width / 2 - 355, height / 2 - -283, 710, 65);
    }
    if (this.key.width > 0 && this.key.height > 0) {
      image(this.key, width / 2 - -190, height / 2 - 90, 80, 40);
    }
    if (
      this.monsterdescriptions.width > 0 &&
      this.monsterdescriptions.height > 0
    ) {
      image(
        this.monsterdescriptions,
        width / 2 - -165,
        height / 2 - 15,
        115,
        105
      );
    }
  }

  public mousePressed() {
    if (
      mouseX > (width / 2) * 0.9 &&
      mouseX < (width / 2) * 0.9 + textWidth(this.readMoreLink) &&
      mouseY > height / 1.35 - textSize() &&
      mouseY < height / 1.35
    ) {
      // clear the canvas
      console.log("Klick klick");
      clear(47, 78, 107, 100);
      new Advantages().draw();
    }
  }
}

/* import { MenuPage } from '../src/menupage';

class Objectives extends MenuPage {
    
public constructor(content: PageContent) {
    super(content);
} 
    
    
} */
