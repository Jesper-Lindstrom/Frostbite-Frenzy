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
    // this.countdown();
  }

  public update() {
    this.updatePlayers();
    this.updateMonsters();
    this.updateKeys();
    this.updatePowerups();
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

}
