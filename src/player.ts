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

  public constructor(position: p5.Vector, cellSize: number, playerNumber: number) {
    super(
      position,
      new p5.Vector(cellSize * 0.7, cellSize * 0.7),
      10
    );
    this.position.x += cellSize * 0.15;
    this.position.y += cellSize * 0.15;
    this.playerNumber = playerNumber;
    this.images = []; // Character image currently unassigned. Assign later.
    this.isFrozen = false;
    this.isImmortal = false;
    this.isInverted = false;
    this.powerupTimer = 0;

  }

  public update() {};

  public draw() {
    push();
    fill("blue");
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  };

  /**
   * Called from update. Checks keyboard input.
   */
  private checkUserInput() {};

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
