class PurpleMonster extends Monster {
  public constructor(position: p5.Vector, cellSize: number, mapArray: number[][], mapPosition: p5.Vector ) {
    super(position, cellSize, mapArray, mapPosition, images.watch, 10 ) // Change picture to pink monster.
      
    
  }
}

class BlueMonster extends Monster {
    public constructor(position: p5.Vector, cellSize: number, mapArray: number[][], mapPosition: p5.Vector ) {
        super(position, cellSize, mapArray, mapPosition, images.blueMonster, 20 )
          
        
      }
}