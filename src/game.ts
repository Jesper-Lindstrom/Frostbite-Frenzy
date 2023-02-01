class Game {
    private mapSize: number;
    private players: Player[];
    private entities: GameEntity[];

    private timer: Timer;
    private scoreTable: ScoreTable;
    /**
     * SpawnController handles spawn/creation of every entity and where they will be spawned on the map layout.
     */
    private spawnController: SpawnController;
    private purpleMonsterSpawned: boolean;

  constructor() {
    this.mapSize = height * 0.9;
    this.spawnController = new SpawnController([
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ], this.mapSize);
    this.players = this.spawnController.createPlayers();
    this.entities = this.spawnController.createEntities();
    this.timer = new Timer(this.mapSize);
    this.scoreTable = new ScoreTable(this.mapSize);
    this.purpleMonsterSpawned = false;
  }

  public update() {
    this.updatePlayers();
    this.updateEntities();
    this.checkCollision();
    this.timer.update();
    this.timeCheck();
  }

  public draw() {
    this.drawEntities();
    this.drawPlayers();
    this.timer.draw();
    this.scoreTable.draw();
  }

  private updatePlayers() {
    for (const player of this.players) {
      player.update();
    }
  }

  private updateEntities() {
    for (const entity of this.entities) {
      if (entity instanceof MovingEntity) {
        entity.update();   
      }
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

  /**
   * Checks the positions off all game entities against player positions and compares them in order to detect collisions.
   * Calls collisionHandler sending which entities have collided as arguments.
   */
  public checkCollision() {
      for (const player of this.players) {
        for (const entity of this.entities) {
          if(player.bounds.left > entity.bounds.right ||
            player.bounds.right < entity.bounds.left ||
            player.bounds.top > entity.bounds.bottom ||
            player.bounds.bottom < entity.bounds.top ) {
            } else {
              this.collisionHandler(player, entity)
            }
        }
      }

  };

  /**
   * Takes colliding entities as arguments and calls appropriate function of collision.
   * Probably an if statement or switch/break.
   */
  
  private collisionHandler(player: Player, entity: GameEntity) {
    if (entity instanceof WallBlock) {
      player.wallCollision();
    }
    if (entity instanceof Monster) {
      player.freeze();
    }
    if (entity instanceof Key) {
      this.keyCollision(player, entity);
    }
    if (entity instanceof InvertKeys) {
      player.invertControls()
    }
    if (entity instanceof Immortal) {
      player.makeImmortal()
    }
    if (entity instanceof SlowOpponent) {

    }
  };

  // private keyCollection() {
  //   this.
  // }

  /**
   * Opens the Game Over screen by loading a new Menu object as activeState in gameFrame with GameOver as the active page.
   * This function will also need to send the players' scores to the GameOver constructor.
   */
  gameEnd() {};
  
  /**
   * Called by collisionHandler when a collision is detected between a player and a key.
   * Calls functions that spawn a new key (in spawnController) and that update the player's score (in scoreTable).
   */
  private keyCollision(player: Player, key: Key) {
    
    this.entities = this.entities.filter(function(obj) {
      return obj !== key
    });
    this.entities.push(this.spawnController.createKey());
    this.scoreTable.givePoint(player.playerNumber);
    
  }
  /**
   * Chcecks elapsed time using a getTime method in the timer object.
   * According to the time, timeCheck will call functions that spawn powerups (in spawnController) and end the game.
   */
  timeCheck() {
    const remainingTime = this.timer.getTime()
    if (remainingTime <= 60 && this.purpleMonsterSpawned === false) {
      
        this.purpleMonsterSpawned = true;
        this.entities.push(this.spawnController.createPurpleMonster());
        
        
    
    }
  };
} 

// replace item with new item