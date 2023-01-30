class PurpleMonster extends Monster {
  public constructor(position: p5.Vector, cellSize: number, mapArray: number[][], mapPosition: p5.Vector ) {
    super(position, cellSize, mapArray, mapPosition, images.purplemonster, 10 ) 
      
    
  }
}

class BlueMonster extends Monster {
    public constructor(position: p5.Vector, cellSize: number, mapArray: number[][], mapPosition: p5.Vector ) {
        super(position, cellSize, mapArray, mapPosition, images.blueMonster, 20 )
          
        
      }
}