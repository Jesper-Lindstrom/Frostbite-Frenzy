/* class Game {
  // private position: p5.Vector;
  private mapArray: number[][] = [
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
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
  private gridCols: number;
  private gridRows: number;
  private wallBlocks: WallBlock[] = [];
  private players: Player[] = [];

  private cellWidth: number;
  private cellHeight: number;

  private gameSetupComplete: boolean = false;

  constructor() {
    // this.position = createVector(width * 0.5, height * 0.5);
    this.gridRows = this.mapArray.length;
    this.gridCols = this.mapArray[0].length;
    this.cellWidth = width / this.gridCols;
    this.cellHeight = height / this.gridRows;
    this.setupWalls();
    this.setupPlayers();
    this.gameSetupComplete = true;
  }

  public update() {}

  public draw() {
    background("white");
    this.renderWalls();
    this.drawPlayers();
  }

  private setupWalls() {
    for (let i = 0; i < this.mapArray.length; i++) {
      for (let j = 0; j < this.mapArray[i].length; j++) {
        if (this.mapArray[i][j] === 1) {
          this.wallBlocks.push(
            new WallBlock(j, i, this.cellWidth, this.cellHeight)
          );
        }
      }
    }
  }

  private renderWalls() {
    for (const wall of this.wallBlocks) {
      wall.draw(this.cellWidth, this.cellHeight);
    }
  }

  private setupPlayers() {
    for (let i = 0; i < this.mapArray.length; i++) {
      for (let j = 0; j < this.mapArray[i].length; j++) {
        if (this.mapArray[i][j] === 2 && !this.gameSetupComplete) {
          this.players.push(new Player(j, i, this.cellWidth, this.cellHeight));
        }
      }
    }
  }

  private drawPlayers() {
    for (const player of this.players) {
      player.draw(this.cellWidth, this.cellHeight);
    }
  }

  public collisionHandler(position: p5.Vector): boolean {

    const playerLeft = position.x;
    const playerRight = position.x + this.cellWidth * 0.8;
    const playerTop = position.y;
    const playerBottom = position.y + this.cellHeight * 0.8;

    let collisionDetected = false;

    for (let i = 0; i < this.wallBlocks.length && collisionDetected === false; i++) {
      // Embed this in another loop later to check monsters, keys and powerups. Array of three arrays.
      const entityLeft = this.wallBlocks[i].position.x;
      const entityRight = this.wallBlocks[i].position.x + this.cellWidth;
      const entityTop = this.wallBlocks[i].position.y;
      const entityBottom = this.wallBlocks[i].position.y + this.cellHeight;
        if (
        playerLeft > entityRight ||
        playerRight < entityLeft ||
        playerTop > entityBottom ||
        playerBottom < entityTop
      ) {
      } else {
        collisionDetected = true;
      }
    }
    console.log(collisionDetected);
    return collisionDetected;
  }
}

class WallBlock {
  public position: p5.Vector;

  public constructor(
    x: number,
    y: number,
    cellWidth: number,
    cellHeight: number
  ) {
    this.position = new p5.Vector(x * cellWidth, y * cellHeight);
  }

  public draw(cellWidth: number, cellHeight: number) {
    push();
    fill("red");
    rect(this.position.x, this.position.y, cellWidth, cellHeight);
    pop();
  }
}

class Player {
  public position!: p5.Vector;
  private speed = 10;

  public constructor(
    x: number,
    y: number,
    cellWidth: number,
    cellHeight: number
  ) {
    this.startPosition(x, y, cellWidth, cellHeight);
    this.draw(cellWidth, cellHeight);
    this.addListeners();
  }

  public draw(cellWidth: number, cellHeight: number) {
    push();
    fill("blue");
    rect(this.position.x, this.position.y, cellWidth * 0.8, cellHeight * 0.8);
    pop();
  }

  private startPosition(
    x: number,
    y: number,
    cellWidth: number,
    cellHeight: number
  ) {
    this.position = new p5.Vector(
      x * cellWidth + cellWidth * 0.1,
      y * cellHeight + cellHeight * 0.1
    );
  }

  private addListeners() {
    addEventListener("keydown", (e) => {
      let newPosition = new p5.Vector(this.position.x, this.position.y);
      if (e.key == "ArrowLeft") {
        newPosition.x -= this.speed;
      } else if (e.key == "ArrowRight") {
        newPosition.x += this.speed;
      } else if (e.key == "ArrowUp") {
        newPosition.y -= this.speed;
      } else if (e.key == "ArrowDown") {
        newPosition.y += this.speed;
      }
      if (!game.collisionHandler(newPosition)) {
        this.position = newPosition;
      }
    });
  }
}
 */