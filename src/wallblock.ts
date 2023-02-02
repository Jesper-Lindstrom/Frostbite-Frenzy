class WallBlock extends GameEntity {
  private image: p5.Image
  
  public constructor(
   
    position: p5.Vector,
    cellSize: number
  ) {
    super(position, new p5.Vector (
      cellSize,
      cellSize
    ));
    this.image = images.wallblock;
  }

  public draw() {
    push();
    stroke('white'); 
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    image(
      this.image,
      this.position.x,
      this.position.y,
      this.size.x, 
      this.size.y 
      );
    pop();
  }
}
