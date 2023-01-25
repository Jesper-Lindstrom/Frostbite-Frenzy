/// <reference path="movingEntity.ts"/>


class Player extends MovingEntity {

  private color: string; // Testing purposes.

  public playerNumber: number;
  private images: p5.Image[];
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

  public constructor(position: p5.Vector, cellSize: number, playerNumber: number) {
    super(
      position,
      new p5.Vector(cellSize * 0.7, cellSize * 0.7),
      7
    );
    this.color = 'blue'; // Testing purposes.
    this.position.x += cellSize * 0.15;
    this.position.y += cellSize * 0.15;
    this.playerNumber = playerNumber;
    this.images = []; // Character image currently unassigned. Assign later.
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

  public update() {
    this.color = 'blue'; // Testing purposes
    this.previousPosition = new p5.Vector(this.position.x, this.position.y);
    this.checkUserInput();
    this.updateBounds();
  };

  public draw() {
    push();
    fill(this.color);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  };

  private getKeyCodes(): number[] {
    let keyCodes: number[]= []; // David fråga. Bättre sätt att typa?
    if (this.playerNumber === 1) {
      keyCodes = [65, 68, 87, 83]
    } else if (this.playerNumber === 2) {
      keyCodes = [LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW]
    }
    return keyCodes;
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

  };

  /**
   * Called by collsionHandler if collsion detected with a wall.
   * Reverts to previous position to prevent movement before drawing.
   */
  public wallCollsion() {
    this.position = this.previousPosition;
    this.color = 'yellow'; // Testing purposes
  }

  /**
   * Increases the playerscore after picking up a key
   */
  public keyCollection() {
    this.playerScore += 1;
    this.color ='black';
    console.log(this.playerScore)
  }

  /**
   * Sets player to frozen, sets time limit.
   * Called by collisionHandler.
   */
  public freeze() {};

  /**
   * Increases player speed during limited time.
   * Called by collisionHandler.
   */
  public speedUp() {};

  /**
   * Set isImmortal to true for a limited time.
   * Called by collisionHandler.
   */
  public makeImmortal() {};

  /**
   * Sets key controls to opposite sides during limited time.
   * Called by collisionHandler.
   */
  public invertKeys() {};

}
