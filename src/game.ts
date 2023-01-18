class Game {
    private arena: Arena;
    private wallBlocks: WallBlock[];
    private players: Player [];
    private monsters: Monster[];
    private keys: Key[];
    private powerups: Powerup[];
    private timer: Timer;
    private scoreTable: ScoreTable;
    private spawnController: SpawnController;

  constructor() {
    this.arena = new Arena();
    this.spawnController = new SpawnController();
    this.wallBlocks = this.spawnController.createWalls();
    this.players = this.spawnController.createPlayers();
    this.monsters = this.spawnController.createMonsters();
    this.keys = this.spawnController.createKeys();
    this.powerups = this.spawnController.createPowerups();
    this.timer = new Timer();
    this.scoreTable = new ScoreTable();
  }

  public update() {
    this.updatePlayers();
    this.updateMonsters();
    this.updateKeys();
    this.updatePowerups();
    this.checkCollision();
  }

  public draw() {
    this.drawArena();
    this.drawWalls();
    this.drawPlayers();
    this.drawMonsters();
    this.drawKeys();
    this.drawPowerups();
  }

  private updatePlayers() {};
  private updateMonsters() {};
  private updateKeys() {};
  private updatePowerups() {};
  
  private drawArena() {};
  private drawWalls() {};
  private drawPlayers() {};
  private drawMonsters() {};
  private drawKeys() {};
  private drawPowerups() {};

  /**
   * Checks the positions off all game entities against player positions and compares them in order to detect collisions.
   * Calls collisionHandler sending which entities have collided as arguments.
   */
  checkCollision() {};

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
