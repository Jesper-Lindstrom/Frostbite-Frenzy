/// <reference path="menupage.ts" />

class Controls extends MenuPage {
  // public menu: Menu;
  private img: p5.Image;
  private img1: p5.Image;
  private img2: p5.Image;
  private img3: p5.Image;
  private img4: p5.Image;

  public constructor() {
    super();
    // this.menu = menu;
    this.img = images.iceLower;
    this.img1 = images.iceUpper;
    this.img2 = images.wsadButtons;
    this.img3 = images.arrowButtons;
  }

  public draw() {
    this.drawShapes();
    this.img4 = images.backarrow;
    this.drawShapes();
    this.drawText();
    this.drawImages();
  }

  public drawShapes() {
    push(); // save current styles and transformations
    rectMode(CENTER);
    rect(width / 2, height / 2, 700, 600); // larger rect
    pop();

    push();
    strokeWeight(5); // frame thickness
    stroke(255, 255, 255); // set the "frame" color
    fill(47, 78, 107);
    rectMode(CENTER);
    rect(width / 2, height / 2, 700, 600); // "frame"
    pop(); // restore previous styles and transformations
  }

  public drawText() {
    push(); // save current styles and transformations
    fill(255);
    textFont("Sansita");
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Game Controls", width / 2, height / 2.7);
    pop(); // restore previous styles and transformations
    push();
    fill(255);
    textSize(20);
    text("Player1", width * 0.445, height * 0.455);
    textSize(16);
    text("Movement", width * 0.443, height * 0.56);
    textFont("Sansita");
    pop();
    push();
    fill(255);
    textSize(20);
    text("Player2", width * 0.535, height * 0.455);
    textSize(16);
    text("Movement", width * 0.533, height * 0.56);
    textFont("Sansita");
    pop();
    push();
    fill(255);
    textSize(18);
    text("W | Arrow Up", width * 0.429, height * 0.6);
    text("S | Arrow Down", width * 0.43, height * 0.62);
    text("A | Arrow Left", width * 0.43, height * 0.64);
    text("D | Arrow Right", width * 0.43, height * 0.66);
    text("Move Up", width * 0.535, height * 0.6);
    text("Move Down", width * 0.535, height * 0.62);
    text("Move Left", width * 0.535, height * 0.64);
    text("Move Right", width * 0.535, height * 0.66);
    textFont("Sansita");
    pop();
  }

  public drawImages() {
    if (this.img.width > 0 && this.img.height > 0) {
      image(this.img1, width / 2 - 370, height / 2 - 342, 750, 150);
    }
    if (this.img1.width > 0 && this.img1.height > 0) {
      image(this.img, width / 2 - 355, height / 2 - -283, 710, 65);
    }
    if (this.img2.width > 0 && this.img2.height > 0) {
      image(this.img2, width / 2 - 180, height / 2 - 30, 140, 80);
    }
    if (this.img3.width > 0 && this.img3.height > 0) {
      image(this.img3, width / 2 - -50, height / 2 - 30, 140, 80);
    }
    if (this.img4.width > 0 && this.img4.height > 0) {
      rect(width / 2 - 305, height / 2 - -190, 60, 60);
      fill(47, 78, 107);
      image(this.img4, width / 2 - 320, height / 2 - -180, 90, 90);
      // image(this.img4, width / 2 - 320, height / 2 - -180, 90, 90);
    }
  }
}

function mousePressed() {
  if (
    mouseX > width / 2 - 320 &&
    mouseX < width / 2 - 320 + 90 &&
    mouseY > height / 2 - -180 &&
    mouseY < height / 2 - -180 + 90
  ) {
    handleMousePress();
  }
}

function handleMousePress() {
  // this.menu.openPage(new StartPage(this));
  console.log("Klick");
}
// function mousePressed() {
//   if (
//     mouseX > width / 2 - 320 &&
//     mouseX < width / 2 - 230 &&
//     mouseY > height / 2 - 270 &&
//     mouseY < height / 2 - 180
//   ) {
//     // Add desired behavior here, such as:
//     // window.location.href = "example.com"; or
//     console.log("arrow clicked");
//   }
// }
// public mouseClicked() {
//   if (
//     mouseX > width / 2 - this.img4.width / 2 &&
//     mouseX < width / 2 + this.img4.width / 2 &&
//     mouseY > height / 2 - this.img4.height / 2 &&
//     mouseY < height / 2 + this.img4.height / 2
//   ) {
//     console.log("img4 clicked");
//   }
