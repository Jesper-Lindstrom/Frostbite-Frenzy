class SpawnController{

  private mapArray: number[][]
  private gridCols: number;
  private gridRows: number;
  private wallBlocks: WallBlock[] = [];
  private cellWidth: number;
  private cellHeight: number;

  
  constructor(mapArray: number[][]){
    this.mapArray = mapArray;
    this.gridRows = this.mapArray.length;
    this.gridCols = this.mapArray[0].length;
    this.cellWidth = width / this.gridCols;
    this.cellHeight = height / this.gridRows;
    this.createWalls();
    // this.gameSetupComplete = true;
  }

  public update() {
    
  }
  
  public draw(){
    createCanvas(windowWidth, windowHeight);
    rect(windowWidth * 0.5, windowHeight * 0.5, windowWidth * 0.1, windowHeight * 0.1)
  }
 
  public createWalls() {
    this.mapArray.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === 1) {
          this.wallBlocks.push(new WallBlock(j, i, this.cellWidth, this.cellHeight));
        }
      });
    });
  }


  public createPlayers() {};
  public createMonsters() {};
  public createKeys() {} ;
  public createPowerups(){}


}



