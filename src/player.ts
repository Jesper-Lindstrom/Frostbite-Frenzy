/// <reference path="movingEntity.ts"/>
/// <reference path="key.ts"/>


class Player extends MovingEntity {
  public playerNumber: number;
  private image: p5.Image;
  private isFrozen: boolean;
  private isImmortal: boolean;
  private isInverted: boolean;
  private playerScore: number;
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
    this.image = this.getImages();
    this.isFrozen = false;
    this.isImmortal = false;
    this.isInverted = false;
    this.powerupTimer = 0;
    this.playerScore = 0;

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
    this.checkUserInput();
    this.updateBounds();
  }

  public draw() {
    push();
    fill(0, 0, 0, 0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
    image(
      this.image,
      this.position.x - this.size.x * 0.1,
      this.position.y - this.size.y * 0.7,
      this.size.x * 1.2,
      this.size.y * 1.7
    );
  }

  /**
   * Called from update. Checks keyboard input.
   */
  private checkUserInput() {
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

  /**
   * Called by collsionHandler if collsion detected with a wall.
   * Reverts to previous position to prevent movement before drawing.
   */
  public wallCollsion() {
    this.position = this.previousPosition;
  }

  /**
   * Increases the playerscore after picking up a key
   */
  public keyCollection() {
    this.playerScore += 1;
    console.log('Player ' + this.playerNumber + ' is ' + this.playerScore)
  }

  /**
   * Sets player to frozen, sets time limit.
   * Called by collisionHandler.
   */
  public freeze() {}

  /**
   * Increases player speed during limited time.
   * Called by collisionHandler.
   */
  public speedUp() {}

  /**
   * Set isImmortal to true for a limited time.
   * Called by collisionHandler.
   */
  public makeImmortal() {}

  /**
   * Sets key controls to opposite sides during limited time.
   * Called by collisionHandler.
   */
  public invertKeys() {}
}
