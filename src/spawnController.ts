import {WallBlock} from "./wallblock"


class SpawnController{

  private mapSize: number;

  private startPoint: p5.Vector;

  private mapArray: number[][]
  private gridCols: number;
  private gridRows: number;
  private wallBlocks: WallBlock[] = [];
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
    this.createWalls();
    // this.gameSetupComplete = true;
  }

  public update() {
    
  }
  
  public draw(){
    createCanvas(windowWidth, windowHeight);
    // rect(windowWidth * 0.5, windowHeight * 0.5, windowWidth * 0.1, windowHeight * 0.1)
  }
 
  public createWalls() {
    this.mapArray.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === 1) {
          this.wallBlocks.push(new WallBlock(j, i, this.startPoint, this.cellWidth, this.cellHeight));
        }
      });
    });
  }

  public createPlayers() {};
  public createMonsters() {};
  public createKeys() {} ;
  public createPowerups(){}
}



// Render map to screen

// Get canvas height
// Map height = canvas * 0.9
// Canvas width same as canvas height
// Get number rows from mapArray length
// Number columns same as rows
// Cell height & width also same, cellHeight = cellWidth
// cellHeight = canvasHeight / number rows


// Map position 

// x = width - map height / 2
// y = Canvas height * 0.1 / 2