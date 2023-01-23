/// <reference path="movingEntity.ts"/>


class Player extends MovingEntity {

  public playerNumber: number;
  private images: p5.Image[];
  private isFrozen: boolean;
  private isImmortal: boolean;
  private isInverted: boolean;
  /**
   * Keeps track of the time that a player powerup has been active.
   * Counts downwards in milliseconds.
   */
  private powerupTimer: number;

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
    this.position.x += cellSize * 0.15;
    this.position.y += cellSize * 0.15;
    this.playerNumber = playerNumber;
    this.images = []; // Character image currently unassigned. Assign later.
    this.isFrozen = false;
    this.isImmortal = false;
    this.isInverted = false;
    this.powerupTimer = 0;

    // if (playerNumber === 1) {
    //   this.leftButton = 65;
    //   this.rightButton = 68;
    //   this.upButton = 87;
    //   this.downButton = 83;
    // } else if (playerNumber === 2) {
    //   this.leftButton = LEFT_ARROW;
    //   this.rightButton = RIGHT_ARROW;
    //   this.upButton = UP_ARROW;
    //   this.downButton = DOWN_ARROW;
    // }

  }

  public update() {
    this.checkUserInput();
  };

  public draw() {
    push();
    fill("blue");
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  };

  // Create function that returns what each key should be. Depends onkey and player number.
  // Take required key as argument
  // Set empty variable to contain key value.

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
