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
  private powerupsHaveStartedSpawning: boolean;

  constructor() {
    this.mapSize = height * 0.9;
    this.spawnController = new SpawnController(
      [
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
      ],
      this.mapSize
    );
    this.players = this.spawnController.createPlayers();
    this.entities = this.spawnController.createEntities();
    this.timer = new Timer(this.mapSize);
    this.scoreTable = new ScoreTable(this.mapSize);
    this.purpleMonsterSpawned = false;
    this.powerupsHaveStartedSpawning = false;
  }

  public update() {
    this.updatePlayers();
    this.updateEntities();
    this.checkCollision();
    this.resolveWallCollisions();
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
  }

  private drawPlayers() {
    for (const player of this.players) {
      player.draw();
    }
  }

  /**
   * Checks the positions off all game entities against player positions and compares them in order to detect collisions.
   * Calls collisionHandler sending which entities have collided as arguments.
   */
  private checkCollision() {
    for (const player of this.players) {
      if (!player.isFrozen) {
        for (const entity of this.entities) {
          /**
           * The if statement here is for optimization.
           * Only entities within one cell of the players will be checked.
           */
          const distance = Math.abs(player.bounds.left - entity.bounds.left);
          if (distance < this.spawnController.cellSize) {
            if (
              player.bounds.left > entity.bounds.right ||
              player.bounds.right < entity.bounds.left ||
              player.bounds.top > entity.bounds.bottom ||
              player.bounds.bottom < entity.bounds.top
            ) {
            } else {
              this.collisionHandler(player, entity);
            }
          }
        }
      }
    }
  }

  /**
   * Takes colliding entities as arguments and calls appropriate function of collision.
   * Probably an if statement or switch/break.
   */

  private collisionHandler(player: Player, entity: GameEntity) {
    if (entity instanceof WallBlock) {
      player.registerWallCollision(entity);
    }
    if (entity instanceof Monster && !player.isImmortal) {
      player.freeze();
      frozenSound.play();
      frozenSound.setVolume(0.1);
    }
    if (entity instanceof Key) {
      this.keyCollision(player, entity);
      keySound.play();
      keySound.setVolume(0.1);
    }
    if (entity instanceof InvertKeys) {
      let filteredPlayerArray: Player[] = this.players.filter(function (obj) {
        return obj !== player;
      });
      let filteredPlayer = filteredPlayerArray[0];
      powerupsSound.play();
      powerupsSound.setVolume(0.1);
      filteredPlayer.invertControls();
      this.removeEntity(entity);
    }
    if (entity instanceof Immortal) {
      player.makeImmortal();
      this.removeEntity(entity);
      powerupsSound.play();
      powerupsSound.setVolume(0.1);
    }
    if (entity instanceof SpeedUp) {
      player.speedUp();
      this.removeEntity(entity);
      powerupsSound.play();
      powerupsSound.setVolume(0.1);
    }
  }

  /**
   * Removes the entity in the argument from the game.
   * @param entity 
   */
  private removeEntity(entity: GameEntity) {
    this.entities = this.entities.filter(function (obj) {
      return obj !== entity;
    });
  }

  /**
   * Calls wall collision resolution functions in both players.
   */
  private resolveWallCollisions() {
    for (const player of this.players) {
      player.resolveWallCollision();
    }
  }

  /**
   * Opens the Game Over screen by loading a new Menu object as activeState in gameFrame with GameOver as the active page.
   * This function will also need to send the players' scores to the GameOver constructor.
   */
  gameEnd() {
    const scores = this.scoreTable.getScores();
    gameFrame.gameOver(scores);
  }

  /**
   * Called by collisionHandler when a collision is detected between a player and a key.
   * Calls functions that spawn a new key (in spawnController) and that update the player's score (in scoreTable).
   */
  private keyCollision(player: Player, key: Key) {
    this.removeEntity(key);
    this.entities.push(this.spawnController.createKey());
    this.scoreTable.givePoint(player.playerNumber);
  }
  /**
   * Chcecks elapsed time using a getTime method in the timer object.
   * According to the time, timeCheck will call functions that spawn powerups (in spawnController) and end the game.
   */
  timeCheck() {
    const remainingTime = this.timer.getTime();
    let randomNum;
    if (remainingTime <= 115 && this.powerupsHaveStartedSpawning === false) {
      this.powerupsHaveStartedSpawning = true;
      setInterval(() => {
        randomNum = Math.floor(Math.random() * 4) + 1;
        this.entities.push(
          this.spawnController.spawnPowerUpFromRandomNumber(randomNum)
        );
      }, 15000);
    }
    if (remainingTime <= 60 && this.purpleMonsterSpawned === false) {
      this.purpleMonsterSpawned = true;

      this.entities.push(this.spawnController.createPurpleMonster());
    }
    if (remainingTime <= 0) {
      this.gameEnd();
    }
  }
}
