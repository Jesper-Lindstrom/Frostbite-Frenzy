class Advantages {
  private img: p5.Image;
  private img1: p5.Image;
  private watch: p5.Image;
  private advantagessnowflake: p5.Image;
  private invertarrows: p5.Image;

  public constructor() {
    this.img = images.iceLower;
    this.img1 = images.iceUpper;
    this.watch = images.watch;
    this.advantagessnowflake = images.advantagessnowflake;
    this.invertarrows = images.invertarrows;
  }

  public draw() {
    this.drawShapes();
    this.drawText();
    this.drawImages();
  }

  private drawShapes() {
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
    text("Advantages", width / 2, height / 3.3);
    pop(); // restore previous styles and transformations

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(31);
    text("Get Faster", (width / 2) * 0.7, height / 2.52);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab a clock to become faster!",
      (width / 2) * 0.7,
      height / 2.4,
      150
    );
    pop();

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(29);
    text("Get Stronger", (width / 2) * 0.7, height / 1.93);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab a snowflake to be able to walk through the monsters!",
      (width / 2) * 0.7,
      height / 1.86,
      285
    );
    pop();

    push();
    textFont("Freckle Face");
    fill(173, 202, 220);
    textSize(29);
    textWrap(WORD);
    text("Mess With The Other Player", (width / 2) * 0.7, height / 1.61, 180);
    pop();

    push();
    textFont("Freckle Face");
    fill(255);
    textSize(22);
    textWrap(WORD);
    text(
      "Grab the arrows to invert the other player's controls!",
      (width / 2) * 0.7,
      height / 1.43,
      280
    );
    pop();
  }

  private drawImages() {
    if (this.img.width > 0 && this.img.height > 0) {
      image(this.img1, width / 2 - 360, height / 2 - 330, 730, 130);
    }
    if (this.img1.width > 0 && this.img1.height > 0) {
      image(this.img, width / 2 - 355, height / 2 - -283, 710, 65);
    }
    if (this.watch.width > 0 && this.watch.height > 0) {
      image(this.watch, width / 2 - -180, height / 2 - 120, 90, 70);
    }
    if (
      this.advantagessnowflake.width > 0 &&
      this.advantagessnowflake.height > 0
    ) {
      image(
        this.advantagessnowflake,
        width / 2 - -180,
        height / 2 - -12,
        90,
        70
      );
    }
    if (this.invertarrows.width > 0 && this.invertarrows.height > 0) {
      image(this.invertarrows, width / 2 - -180, height / 2 - -150, 85, 70);
    }
  }
}
