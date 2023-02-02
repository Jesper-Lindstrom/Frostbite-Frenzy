/// <reference path="movingEntity.ts"/>
/// <reference path="key.ts"/>

class Player extends MovingEntity {
  public playerNumber: number;
  private image: p5.Image;

  /**
   * Properties that control powerups.
   */
  public isFrozen: boolean;
  private freezeTimer: number;
  private invertedTimer: number;
  public isImmortal: boolean;
  private immortalTimer: number;
  private isInverted: boolean;
  private isSpedUp: boolean;
  private speedUpTimer: number;
  private tintTimer: number;
  private tintOn: boolean;

  /**
   * Properties for setting movement controls.
   */
  private keyCodes: number[];
  private leftButton: number;
  private rightButton: number;
  private upButton: number;
  private downButton: number;

  private wallBlocksCollided: WallBlock[];

  public constructor(
    position: p5.Vector,
    cellSize: number,
    playerNumber: number
  ) {
    super(position, new p5.Vector(cellSize * 0.6, cellSize * 0.6), 7);
    this.position.x += cellSize * 0.2;
    this.position.y += cellSize * 0.2;
    this.playerNumber = playerNumber;
    this.image = this.getImages();

    this.isFrozen = false;
    this.freezeTimer = 0;
    this.isImmortal = false;
    this.immortalTimer = 0;
    this.isInverted = false;
    this.invertedTimer = 0;
    this.isSpedUp = false;
    this.speedUpTimer = 0;
    this.tintTimer = 0;
    this.tintOn = false;

    this.keyCodes = this.getKeyCodes();
    this.leftButton = this.keyCodes[0];
    this.rightButton = this.keyCodes[1];
    this.upButton = this.keyCodes[2];
    this.downButton = this.keyCodes[3];

    this.wallBlocksCollided = [];
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
    this.tintBlink();
  }

  public draw() {
    push();
    if (this.isFrozen) {
      tint(0, 153, 204, 126);
    }
    if (this.isImmortal && this.tintOn) {
      tint(243, 250, 142);
    }
    if (this.isSpedUp && !this.isFrozen && this.tintOn) {
      tint(154, 252, 172);
    }
    if (this.isInverted && !this.isFrozen && this.tintOn) {
      tint(250, 151, 147);
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

  /**
   * Controls player's active powerups and freezing.
   */
  private updateState() {
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
          this.speed = this.speed / 1.5;
          this.isSpedUp = false;
        }
        break;
    }
  }

  private tintBlink() {
    if (
      (this.isInverted || this.isSpedUp || this.isImmortal) &&
      !this.isFrozen
    ) {
      this.tintTimer -= deltaTime;
      if (this.tintTimer > 500) {
        this.tintOn = true;
      } else {
        this.tintOn = false;
      }
      if (this.tintTimer <= 0) {
        this.tintTimer = 1000;
      }
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
      } else {
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
   * Adds wallblocks with with collision has been detected to wallBlocksCollided[]
   * @param wallBock
   */
  public registerWallCollision(wallBock: WallBlock) {
    this.wallBlocksCollided.push(wallBock);
  }

  /**
   * Checks how many wall blocks player has collided with.
   * Calls right resolution logic.
   */
  public resolveWallCollision() {
    if (this.wallBlocksCollided.length === 1) {
      this.singleWallCollision();
    } else if (this.wallBlocksCollided.length === 2) {
      this.doubleWallCollision();
    } else if (this.wallBlocksCollided.length === 3) {
      this.position = this.previousPosition;
    }
    this.wallBlocksCollided = [];
  }

  /**
   * Resolves collisions with an individual wall block.
   * Allows for 'sliding'.
   */
  private singleWallCollision() {
    const wall = this.wallBlocksCollided[0];

    /**
     * This if statement contains code for sliding along the edge of single blocks.
     */
    if (
      this.position.x !== this.previousPosition.x &&
      this.position.y !== this.previousPosition.y
    ) {
      let previousBottom: number = this.previousPosition.y + this.size.x;
      let previousRight: number = this.previousPosition.x + this.size.y;
      let previousBounds: bounds = {
        top: this.previousPosition.y,
        bottom: previousBottom,
        left: this.previousPosition.x,
        right: previousRight,
      };

      let topDistance: number = Math.abs(
        previousBounds.top - wall.bounds.bottom
      );
      let bottomDistance: number = Math.abs(
        previousBounds.bottom - wall.bounds.top
      );
      let leftDistance: number = Math.abs(
        previousBounds.left - wall.bounds.right
      );
      let rightDistance: number = Math.abs(
        previousBounds.right - wall.bounds.left
      );

      let collisionSide: number = Math.min(
        topDistance,
        bottomDistance,
        leftDistance,
        rightDistance
      );

      switch (collisionSide) {
        case topDistance:
          this.position.y = this.previousPosition.y;
          break;

        case bottomDistance:
          this.position.y = this.previousPosition.y;
          break;

        case leftDistance:
          this.position.x = this.previousPosition.x;
          break;

        case rightDistance:
          this.position.x = this.previousPosition.x;
          break;

        default:
          break;
      }
    } else {
      this.position = this.previousPosition;
    }
  }

  /**
   * Resolves collisions with two wall blocks.
   * Allows for sliding.
   */
  private doubleWallCollision() {
    if (
      this.wallBlocksCollided[0].bounds.left ===
      this.wallBlocksCollided[1].bounds.left
    ) {
      this.position.x = this.previousPosition.x;
    }
    if (
      this.wallBlocksCollided[0].bounds.top ===
      this.wallBlocksCollided[1].bounds.top
    ) {
      this.position.y = this.previousPosition.y;
    }
  }

  /**
   * Sets player to frozen, sets time limit.
   * Called by collisionHandler.
   */
  public freeze() {
    this.freezeTimer = 3000;
    this.isFrozen = true;
  }

  /**
   * Increases player speed during limited time.
   * Called by collisionHandler.
   */
  public speedUp() {
    if (this.isSpedUp) {
      this.speedUpTimer = 10000;
    } else {
      this.resetPowerups();
      this.speedUpTimer = 10000;
      this.speed = this.speed * 1.5;
      this.isSpedUp = true;
    }
  }

  /**
   * Set isImmortal to true for a limited time.
   * Called by collisionHandler.
   */
  public makeImmortal() {
    if (this.isImmortal) {
      this.immortalTimer = 10000;
    } else {
      this.resetPowerups();
      this.immortalTimer = 10000;
      this.isImmortal = true;
    }
  }

  /**
   * Temporarily reverts the movement keys.
   * Called by collisionHandler.
   */
  public invertControls() {
    this.resetPowerups();
    this.invertedTimer = 10000;
    this.isInverted = true;
  }

  /**
   * Removes all powerup effects.
   * Calls on collection of spped and immortal.
   */
  private resetPowerups() {
    this.isImmortal = false;
    this.immortalTimer = 0;
    this.isInverted = false;
    this.invertedTimer = 0;
    this.isSpedUp = false;
    this.speedUpTimer = 0;
  }
}
