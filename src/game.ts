class Game {
  // private position: p5.Vector;
  private mapArray: number[][] = 
  [  
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1 ,1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ,1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1 ,1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1],
  
  ];
  private gridCols: number;
  private gridRows: number;
  private wallBlocks: WallBlock[] = [];
  private players: Player[] =[]

  private cellWidth: number;
  private cellHeight: number;
  

  private gameSetupComplete: boolean = false;


  constructor() {
    // this.position = createVector(width * 0.5, height * 0.5);
    this.gridRows = this.mapArray.length;
    this.gridCols = this.mapArray[0].length;
    this.cellWidth = width / this.gridCols;
    this.cellHeight = height / this.gridRows;
    this.playerSetup();
    this.gameSetupComplete = true;
  }

  public draw() {
    background('white');
    this.renderWalls();
    this.drawPlayers();
  }

  private renderWalls() {
    for (let i = 0; i < this.mapArray.length; i ++) {
      for (let j = 0; j < this.mapArray[i].length; j++) {
        if (this.mapArray[i][j] === 1) {
          this.wallBlocks.push(new WallBlock(j, i, this.cellWidth, this.cellHeight))
        }
  }
  }
}

  private playerSetup() {
    for (let i = 0; i < this.mapArray.length; i ++) {
      for (let j = 0; j < this.mapArray[i].length; j++) {
        if (this.mapArray[i][j] === 2 && !this.gameSetupComplete) {
          this.players.push(new Player(j, i, this.cellWidth, this.cellHeight))
        }
  }
  }
  }

  private drawPlayers() {
    for (const player of this.players) {
      player.draw(this.cellWidth, this.cellHeight);
    }
  }
}

class WallBlock {
  private position: p5.Vector;

  public constructor(x: number, y: number, cellWidth: number, cellHeight: number) {
    this.position = new p5.Vector(x * cellWidth, y * cellHeight);
    push();
    fill('red');
    rect(this.position.x, this.position.y, cellWidth, cellHeight);
    pop();
  }
}

class Player {
  public position!: p5.Vector;
  private setUpComplete: boolean = false

  public constructor(x: number, y: number, cellWidth: number, cellHeight: number) {
    this.startPosition(x, y, cellWidth, cellHeight);
    this.draw(cellWidth, cellHeight);
    if (!this.setUpComplete) {
      this.addListeners();
    }
    this.setUpComplete = true;
  }

  public draw(cellWidth: number, cellHeight: number) {
    push();
    fill('blue');
    rect(this.position.x, this.position.y, cellWidth * 0.8, cellHeight * 0.8);
    pop();
  }

  private startPosition(x: number, y: number, cellWidth: number, cellHeight: number) {
    this.position = new p5.Vector((x * cellWidth) + (cellWidth * 0.1), (y * cellHeight) + (cellHeight * 0.1));
  }

  private addListeners() {
    addEventListener('keydown', (e) => {
      if (e.key == 'ArrowLeft') {
        this.position.x -= 10;
      } else if (e.key == 'ArrowRight') {
        this.position.x += 10;
      } else if (e.key == 'ArrowUp') {
        this.position.y -= 10;
      } else if (e.key == 'ArrowDown') {
        this.position.y += 10;
      }
    })
  }

}
