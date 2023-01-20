
class WallBlock extends GameEntity {
  public position: p5.Vector;
  private size: p5.Vector;
  
  public constructor(
    x: number,
    y: number,
    startPoint: p5.Vector,
    cellWidth: number,
    cellHeight: number
  ) {
    super();
    this.position = new p5.Vector((x * cellWidth) + startPoint.x, (y * cellHeight) + startPoint.y);
    this.size = createVector(cellWidth, cellHeight);
  }
  
  public draw() {
    push();
    fill("red");
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }
}
