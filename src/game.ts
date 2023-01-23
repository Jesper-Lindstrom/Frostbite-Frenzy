class Game {
    /**
     * The arena object is the square upon which the game will be rendered.
     * It will have a position desribed by a Vector and a height and width relative to the height of the canvas.
     * The arena's properties are sent to the spawnController's constructor in order for spawnController to place objects within it.
     */
    private players: Player[];
    private entities: GameEntity[];
    private timer: Timer;
    private scoreTable: ScoreTable;
    /**
     * SpawnController handles spawn/creation of every entity and where they will be spawned on the map layout.
     */
    private spawnController: SpawnController;

  constructor() {
    this.spawnController = new SpawnController([
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]);
    this.players = this.spawnController.createPlayers();
    this.entities = this.spawnController.createEntities();
    this.timer = new Timer();
    this.scoreTable = new ScoreTable();
  }

  public update() {
    this.updatePlayers();
    this.updateEntities();
    this.checkCollision();
  }

  public draw() {
    this.drawEntities();
    this.drawPlayers();
  }

  private updatePlayers() {}
  private updateEntities() {
    for (const entity of this.entities) {
      // if (entity instanceof MovableEntity) {
      //   entity.update();   
      // }
    }
  }
  
  private drawEntities() {
    for (const entity of this.entities) {
      entity.draw();
    }
  };
  private drawPlayers() {
    for (const player of this.players) {
      player.draw();
    }
  };
  private drawMonsters() {};
  private drawKeys() {};
  private drawPowerups() {};

  /**
   * Checks the positions off all game entities against player positions and compares them in order to detect collisions.
   * Calls collisionHandler sending which entities have collided as arguments.
   */
  checkCollision() {
    for (const entity of this.entities) {
      // 1. är det en kollision
      // 2. med vad??
      if (entity instanceof Key) {

      }
    }
  };

  /**
   * Takes colliding entities as arguments and calls appropriate function of collision.
   * Probably an if statement or switch/break.
   */
  collisionHandler() {};

  /**
   * Opens the Game Over screen by loading a new Menu object as activeState in gameFrame with GameOver as the active page.
   * This function will also need to send the players' scores to the GameOver constructor.
   */
  gameEnd() {};
  
  /**
   * Called by collisionHandler when a collision is detected between a player and a key.
   * Calls functions that spawn a new key (in spawnController) and that update the player's score (in scoreTable).
   */
  keyCollection() {};

  /**
   * Chcecks elapsed time using a getTime method in the timer object.
   * According to the time, timeCheck will call functions that spawn powerups (in spawnController) and end the game.
   */
  timeCheck() {};
}
 