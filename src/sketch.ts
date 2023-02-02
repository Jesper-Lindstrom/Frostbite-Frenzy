//---- GLOBAL VARIABLES ----//
let gameFrame: GameFrame;
let fontFreckleFace: p5.Font;
let fontSansita: p5.Font;
let gameMusic: p5.SoundFile;
let gameOver: p5.SoundFile;
let keySound: p5.SoundFile;
let frozenSound: p5.SoundFile;
let powerupsSound: p5.SoundFile;

interface Images {
  wallblock: p5.Image;
  wsadButtons: p5.Image;
  arrowButtons: p5.Image;
  yellowSnowman: p5.Image;
  greenSnowman: p5.Image;
  blueMonster: p5.Image;
  purplemonster: p5.Image;
  characters: p5.Image;
  key: p5.Image;
  monsterdescriptions: p5.Image;
  watch: p5.Image;
  snowflake: p5.Image;
  invertarrows: p5.Image;
  purpleMonsterSingle: p5.Image;
  monsterBlue: p5.Image;
  fallingsnow: p5.Image;
  trophy: p5.Image;
  ice: p5.Image;
  movement: p5.Image;
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
  gameMusic = loadSound("/assets/sounds/gamemusic.mp3");
  gameOver = loadSound("/assets/sounds/gameOver.mp3");
  keySound = loadSound("/assets/sounds/key.mp3");
  frozenSound = loadSound("/assets/sounds/frozen.mp3");
  powerupsSound = loadSound("/assets/sounds/powerups.mp3");

  images = {
    wallblock: loadImage("/assets/images/wallblock.png"),
    wsadButtons: loadImage("/assets/images/wsadbuttons.png"),
    arrowButtons: loadImage("/assets/images/arrowbuttons.png"),
    yellowSnowman: loadImage("/assets/images/yellowsnowman.png"),
    greenSnowman: loadImage("/assets/images/greensnowman.png"),
    blueMonster: loadImage("/assets/images/bluemonster.png"),
    purplemonster: loadImage("/assets/images/purplemonster.png"),
    characters: loadImage("/assets/images/characters.png"),
    fallingsnow: loadImage("/assets/images/fallingsnow.gif"),
    key: loadImage("/assets/images/key.png"),
    monsterdescriptions: loadImage("/assets/images/monsterdescriptions.png"),
    watch: loadImage("/assets/images/watch.png"),
    snowflake: loadImage("/assets/images/advantagessnowflake.png"),
    invertarrows: loadImage("/assets/images/invertarrows.png"),
    purpleMonsterSingle: loadImage("/assets/images/purpleMonsterSingle.png"),
    monsterBlue: loadImage("/assets/images/monsterBlue.png"),
    trophy: loadImage("/assets/images/trophy.gif"),
    ice: loadImage("assets/images/ice.png"),
    movement: loadImage("assets/images/movement.png"),
  };
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
  gameFrame = new GameFrame();
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
