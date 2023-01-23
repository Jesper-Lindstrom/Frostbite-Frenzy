//---- GLOBAL VARIABLES ----//
// let sound: p5.SoundFile
let gameFrame: GameFrame;
let controls: Controls;
let menu: Menu;

// let menuFont;

interface Images {
  iceUpper: p5.Image;
  iceLower: p5.Image;
  wsadButtons: p5.Image;
  arrowButtons: p5.Image;
}

let images: Images;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  images = {
    iceUpper: loadImage("/assets/images/ice1.png"),
    iceLower: loadImage("/assets/images/ice2.png"),
    wsadButtons: loadImage("/assets/images/wsadbuttons.png"),
    arrowButtons: loadImage("/assets/images/arrowbuttons.png"),
  }
  // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
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
  frameRate(1);
  gameFrame = new GameFrame(false);
  frameRate(60);
  //gameFrame = new GameFrame();
  controls = new Controls();
  menu = new Menu();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  gameFrame.update(); // What is the difference between update and draw?
  gameFrame.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
