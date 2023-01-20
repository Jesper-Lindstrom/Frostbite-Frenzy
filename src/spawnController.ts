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

  public createPlayers(): Player[] {
    return [];
  }

  public createEntities() {
    const entities: GameEntity[] = [];
    this.mapArray.forEach((row, i) => {
      row.forEach((cell, j) => {
        const position = new p5.Vector(
          j * this.cellSize + this.startPoint.x,
          i * this.cellSize + this.startPoint.y
        )
        if (cell === 1) {
          entities.push(new WallBlock(position, this.cellSize));
        } else if (cell == 2) {

        }
      });
    });

    return entities;
  }
}