class SpawnController {
  private mapSize: number;
  private startPoint: p5.Vector;
  private mapArray: number[][];
  private gridCols: number;
  private gridRows: number;
  private cellSize: number;
  
  constructor(mapArray: number[][]){

    this.mapSize = height * 0.9;

    let startX = (width - this.mapSize) / 2;
    let startY = (height - this.mapSize) / 2;

    this.startPoint = new p5.Vector(startX, startY);

    this.mapArray = mapArray;
    this.gridRows = this.mapArray.length;
    this.gridCols = this.mapArray[0].length;
    this.cellSize = this.mapSize / this.gridCols;
  }

  public update() {
    
  }
  public draw(){
  }

  /**
   * Loops through the mapArray and create a Player object for each 2.
   * Reads indices of 2D array to write player position.
   * @returns {Player[]}
   */
  public createPlayers(): Player[] {
    const players:  Player[] = [];
    let pNum = 1;
    this.mapArray.forEach((row, i) => {
      row.forEach((cell, j) => {
        const position = new p5.Vector(
          j * this.cellSize + this.startPoint.x,
          i * this.cellSize + this.startPoint.y
        )
        if (cell === 2) {
          players.push(new Player(position, this.cellSize, pNum));
          pNum ++;
        }
      });
    });
    return players;
  }

  public createStaticEntities() {
    const entities: GameEntity[] = [];
    this.mapArray.forEach((row, i) => {
      row.forEach((cell, j) => {
        const position = new p5.Vector(
          j * this.cellSize + this.startPoint.x,
          i * this.cellSize + this.startPoint.y
        )
        if (cell === 1) {
          entities.push(new WallBlock(position, this.cellSize));
        }
      });
    });

    return entities;
  }

  public randomValidSpawnpoint(){
    let validSpawnPoints = [];
    for (let i = 0; i < this.mapArray.length; i++) {
      for (let j = 0; j < this.mapArray[i].length; j++){
      if (this.mapArray[i][j] === 0) {
        validSpawnPoints.push(i);
      }
    }
  }
  let randomIndex = Math.floor(Math.random() * validSpawnPoints.length);
  return validSpawnPoints[randomIndex];
}

public spawnEntity() {
  this.randomValidSpawnpoint();
  // spawn entity at (x, y)
  for (let i = 0; i < 4; i++){
    new Monster(10, size, (this.cellSize, this.cellSize), [
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
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],]);
  }
}
}


// RandomValidSpawnpoint picks out a random index of the zeroes in mapArray
// RandomValidSpawnpoint needs to save the coordinates of that 0,
// spawnEntity recieves those coordinates and initiates spawning of an entity depending on time/how many monsters have spawned/etc.
// Calls to create new object as needed, which will update/draw itself.