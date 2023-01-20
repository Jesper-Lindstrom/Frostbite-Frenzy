/// <reference path="movingEntity.ts"/>

class Player extends MovingEntity {
  constructor(x: number, y: number, cellSize: number) {
    super(
      new p5.Vector(
        x * cellSize + cellSize * 0.15,
        y * cellSize + cellSize * 0.15
      ),
      new p5.Vector(cellSize * 0.7, cellSize * 0.7),
      10
    );
  }

  draw() {
    push();
    fill("blue");
    rect(this.position.x, this.position.y, this.size.x);
  }
}
