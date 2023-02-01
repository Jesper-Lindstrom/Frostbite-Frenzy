/// <reference path="movingEntity.ts"/>
/// <reference path="key.ts"/>


class Player extends MovingEntity {
  public playerNumber: number;
  public name: string;
  private image: p5.Image;
  private isFrozen: boolean;
  private freezeTimer: number;
  private invertedTimer: number;
  public isImmortal: boolean;
  private immortalTimer: number;
  private isInverted: boolean;
  private playerScore: number;
  private isSpedUp: boolean;
  private speedUpTimer: number;
  /**
   * Keeps track of the time that a player powerup has been active.
   * Counts downwards in milliseconds.
   */
  private powerupTimer: number;

  private keyCodes: number[];

  private leftButton: number;
  private rightButton: number;
  private upButton: number;
  private downButton: number;

  public constructor(
    position: p5.Vector,
    cellSize: number,
    playerNumber: number
  ) {
    super(position, new p5.Vector(cellSize * 0.6, cellSize * 0.6), 7);
    this.position.x += cellSize * 0.15;
    this.position.y += cellSize * 0.15;
    this.playerNumber = playerNumber;
    this.name = "";
    this.image = this.getImages();
    this.isFrozen = false;
    this.freezeTimer = 0;
    this.isImmortal = false;
    this.immortalTimer = 0;
    this.isInverted = false;
    this.invertedTimer = 0;
    this.powerupTimer = 0;
    this.playerScore = 0;
    this.isSpedUp = false;
    this.speedUpTimer = 0;

    this.keyCodes = this.getKeyCodes();
    this.leftButton = this.keyCodes[0];
    this.rightButton = this.keyCodes[1];
    this.upButton = this.keyCodes[2];
    this.downButton = this.keyCodes[3];
  }

  /**
   * Returns which key codes to be assigned to playe controls.
   * @returns {number[]}
   */
  private getKeyCodes(): number[] {
    let keyCodes: number[] = [];
    if (this.playerNumber === 1) {
      keyCodes = [65, 68, 87, 83];
    } else if (this.playerNumber === 2) {
      keyCodes = [LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW];
    }
    return keyCodes;
  }

  /**
   * Returns the right images for the player number.
   * @returns {p5.Image}
   */
  private getImages(): p5.Image {
    let playerImages: p5.Image = images.yellowSnowman;
    if (this.playerNumber === 2) {
      playerImages = images.greenSnowman;
    }
    return playerImages;
  }

  public update() {

    
    /**
     * Here we record the player's starting position at each frame in order to
     * reset the new position on collision with a wall.
     */
    this.previousPosition = new p5.Vector(this.position.x, this.position.y);
    this.updateState();
    this.checkUserInput();
    this.updateBounds();
  }

  public draw() {
    push();
    if (this.isFrozen) {
      tint(0, 153, 204, 126);
    }
    image(
      this.image,
      this.position.x - this.size.x * 0.1,
      this.position.y - this.size.y * 0.7,
      this.size.x * 1.2,
      this.size.y * 1.7
      );
      pop();
  }


updateState() {
  switch (true) {
    case this.isFrozen:
      this.freezeTimer -= deltaTime;
      if (this.freezeTimer <= 0) {
        this.isFrozen = false;
      }
      break;
    case this.isInverted:
      this.invertedTimer -= deltaTime;
      if (this.invertedTimer <= 0) {
        this.isInverted = false;
      }
      break;
    case this.isImmortal:
      this.immortalTimer -= deltaTime;
      if (this.immortalTimer <= 0) {
        this.isImmortal = false;
      }
      break;
    case this.isSpedUp:
      this.speedUpTimer -= deltaTime;
      if (this.speedUpTimer <= 0) {
        this.isSpedUp = false;
      }
      break;
  }
}

  /**
   * Called from update. Checks keyboard input.
   */
  private checkUserInput() {
    if (!this.isFrozen)
    if (this.isInverted) {
      if (keyIsDown(this.leftButton)) {
        this.position.x += this.speed;
      }
      if (keyIsDown(this.rightButton)) {
        this.position.x -= this.speed;
      }
      if (keyIsDown(this.upButton)) {
        this.position.y += this.speed;
      }
      if (keyIsDown(this.downButton)) {
        this.position.y -= this.speed;
      }
    }
  else{
    if (keyIsDown(this.leftButton)) {
      this.position.x -= this.speed;
    }
    if (keyIsDown(this.rightButton)) {
      this.position.x += this.speed;
    }
    if (keyIsDown(this.upButton)) {
      this.position.y -= this.speed;
    }
    if (keyIsDown(this.downButton)) {
      this.position.y += this.speed;
    }
  }
  }

  /**
   * Called by collsionHandler if collsion detected with a wall.
   * Reverts to previous position to prevent movement before drawing.
   */
  public wallCollision() {
    this.position = this.previousPosition;
  }



  public invertControls(){
    if(!this.isInverted)
    this.invertedTimer = 15000;
    this.isInverted = true;
  }

  /**
   * Sets player to frozen, sets time limit.
   * Called by collisionHandler.
   */
  public freeze() {
    if (!this.isFrozen) {
    this.freezeTimer = 3000;
    this.isFrozen = true;
    }
  }

  /**
   * Increases player speed during limited time.
   * Called by collisionHandler.
   */
  public speedUp() {
    if (!this.isSpedUp){
      this.speedUpTimer = 15000;
      this.isSpedUp = true;
    }
  }

  /**
   * Set isImmortal to true for a limited time.
   * Called by collisionHandler.
   */
  public makeImmortal() {
    if (!this.isImmortal){
      this.immortalTimer = 15000;
      this.isImmortal = true
    }
    
  }
}
