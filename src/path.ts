/// <reference path="sketch.ts"/>

class Path extends GameEntity {
  
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
    fill(102, 204, 255)
    stroke(102, 204, 255);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }
  
}
