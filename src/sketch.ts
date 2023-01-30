//---- GLOBAL VARIABLES ----//
// let sound: p5.SoundFile
let gameFrame: GameFrame;
let controls: Controls;
let fontFreckleFace: p5.Font;
let fontSansita: p5.Font;
// let menuFont;

interface Images {
  iceUpper: p5.Image;
  iceLower: p5.Image;
  wsadButtons: p5.Image;
  arrowButtons: p5.Image;
  yellowSnowman: p5.Image;
  greenSnowman: p5.Image;
  blueMonster: p5.Image;
  purplemonster: p5.Image;
  characters: p5.Image;
  snowflakes: p5.Image;
  key: p5.Image;
  monsterdescriptions: p5.Image;
  watch: p5.Image;
  advantagessnowflake: p5.Image;
  invertarrows: p5.Image;
  backarrow: p5.Image;
}

let images: Images;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  fontFreckleFace = loadFont("/assets/fonts/FreckleFace.ttf");
  fontSansita = loadFont("/assets/fonts/Sansita.ttf");

  images = {
    iceUpper: loadImage("/assets/images/ice1.png"),
    iceLower: loadImage("/assets/images/ice2.png"),
    wsadButtons: loadImage("/assets/images/wsadbuttons.png"),
    arrowButtons: loadImage("/assets/images/arrowbuttons.png"),
    yellowSnowman: loadImage("/assets/images/yellowsnowman.png"),
    greenSnowman: loadImage("/assets/images/greensnowman.png"),
    blueMonster: loadImage("/assets/images/bluemonster.png"),
    purplemonster: loadImage("/assets/images/purplemonster.png"),
    characters: loadImage("/assets/images/characters.png"),
    snowflakes: loadImage("/assets/images/snowflakes.png"),
    key: loadImage("/assets/images/key.png"),
    monsterdescriptions: loadImage("/assets/images/monsterdescriptions.png"),
    watch: loadImage("/assets/images/watch.png"),
    advantagessnowflake: loadImage("/assets/images/advantagessnowflake.png"),
    invertarrows: loadImage("/assets/images/invertarrows.png"),
    backarrow: loadImage("/assets/images/backarrow.png"),
  };
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
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  gameFrame.update();
  gameFrame.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
