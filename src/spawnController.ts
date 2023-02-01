class SpawnController {
  private mapSize: number;
  private mapPosition: p5.Vector;
  private mapArray: number[][];
  private gridCols: number;
  private gridRows: number;
  private cellSize: number;
  private keysSpawned: number;
  
  
  constructor(mapArray: number[][], mapSize: number){

    this.mapSize = mapSize;

    let startX = (width - this.mapSize) / 2;
    let startY = (height - this.mapSize) / 2;

    this.mapPosition = new p5.Vector(startX, startY);

    this.mapArray = mapArray;
    this.gridRows = this.mapArray.length;
    this.gridCols = this.mapArray[0].length;
    this.cellSize = this.mapSize / this.gridCols;

    this.keysSpawned = 0;
    
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
          j * this.cellSize + this.mapPosition.x,
          i * this.cellSize + this.mapPosition.y
        )
        if (cell === 2) {
          players.push(new Player(position, this.cellSize, pNum));
          pNum ++;
        }
      });
    });
    return players;
  }

  public createEntities() {
    const entities: GameEntity[] = [];
    this.mapArray.forEach((row, i) => {
      row.forEach((cell, j) => {
        const position = new p5.Vector(
          j * this.cellSize + this.mapPosition.x,
          i * this.cellSize + this.mapPosition.y
        )
        if (cell === 1) {
          entities.push(new WallBlock(position, this.cellSize));
        }
      });
    });
    for (let i = 0; i < 4; i++) {
      entities.push(this.createMonster());
    }
    // for (let i = 0; i < 1; i++) {
    //   entities.push(this.createPurpleMonster())
    // }
    for (let i = 0; i < 2; i++) {
      entities.push(this.createKey());
    }
    return entities;
  }

  private randomValidSpawnpoint(): p5.Vector{
    let validSpawnPoints: Coordinates[] = [];
    for (let i = 0; i < this.mapArray.length; i++) {
      for (let j = 0; j < this.mapArray[i].length; j++){
      if (this.mapArray[i][j] === 0) {
        validSpawnPoints.push({
          x: j,
          y: i
        });
      }
    }
  }
  let randomIndex = Math.floor(Math.random() * validSpawnPoints.length);
  let spawnPoint = validSpawnPoints[randomIndex];
  return new p5.Vector(
    spawnPoint.x * this.cellSize + this.mapPosition.x,
    spawnPoint.y * this.cellSize + this.mapPosition.y
  );
}

public createMonster(): Monster {
    const spawnPos = this.randomValidSpawnpoint();
    return new BlueMonster(spawnPos, this.cellSize, this.mapArray, this.mapPosition );
  }

public createPurpleMonster() {
    return new PurpleMonster(this.randomValidSpawnpoint(), this.cellSize, this.mapArray, this.mapPosition);

}



public createKey(): Key {
    let key = new Key (this.randomValidSpawnpoint(), this.cellSize, this.keysSpawned);
    this.keysSpawned ++;
    return key;
  }
}



interface Coordinates {
  x: number,
  y: number
}

// RandomValidSpawnpoint picks out a random index of the zeroes in mapArray
// RandomValidSpawnpoint needs to save the coordinates of that 0,
// spawnEntity recieves those coordinates and initiates spawning of an entity depending on time/how many monsters have spawned/etc.
// Calls to create new object as needed, which will update/draw itself.