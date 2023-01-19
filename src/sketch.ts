//---- GLOBAL VARIABLES ----//
// let sound: p5.SoundFile
// let gameFrame: GameFrame;
let controls: Controls;
let img: p5.Image;
let img1: p5.Image;
let img2: p5.Image;
let img3: p5.Image;
// let menuFont;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
  img = loadImage("/assets/images/ice1.png");
  img1 = loadImage("/assets/images/ice2.png");
  img2 = loadImage("/assets/images/wsadbuttons.png");
  img3 = loadImage("/assets/images/arrowbuttons.png");
  // menuFont = loadFont(
  //   "https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;1,400&display=swap"
  // );
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  //gameFrame = new GameFrame();
  controls = new Controls(img, img1, img2, img3);
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  //game.update(); // What is the difference between update and draw?
  //game.draw();
  controls.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
