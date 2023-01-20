class WallBlock extends GameEntity {
  
  public constructor(
    position: p5.Vector,
    cellSize: number
  ) {
    super(position, new p5.Vector (
      cellSize,
      cellSize
    ));
  }
  
  public draw() {
    push();
    fill("red");
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }
}
