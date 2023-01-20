class SpawnController {
  private mapSize: number;
  private startPoint: p5.Vector;
  private mapArray: number[][];
  private gridCols: number;
  private gridRows: number;
  private cellWidth: number;
  private cellHeight: number;

  
  constructor(mapArray: number[][]){

    this.mapSize = height * 0.9;

    let startX = (width - this.mapSize) / 2;
    let startY = (height - this.mapSize) / 2;

    this.startPoint = new p5.Vector(startX, startY);

    this.mapArray = mapArray;
    this.gridRows = this.mapArray.length;
    this.gridCols = this.mapArray[0].length;
    this.cellWidth = this.mapSize / this.gridCols;
    this.cellHeight = this.mapSize / this.gridRows;
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
        if (cell === 1) {
          entities.push(new WallBlock(j, i, this.startPoint, this.cellWidth, this.cellHeight));
        } else if (cell == 2) {

        }
      });
    });

    return entities;
  }
}