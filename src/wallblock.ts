
class WallBlock {
  public position: p5.Vector;
  public constructor(
    x: number,
    y: number,
    cellWidth: number,
    cellHeight: number
  ) {
    this.position = new p5.Vector(x * cellWidth, y * cellHeight);
  }

  public draw(cellWidth: number, cellHeight: number) {
    push();
    fill("red");
    rect(this.position.x, this.position.y, cellWidth, cellHeight);
    pop();
  }       
  renderWalls() {
      for (const wall of this.wallBlocks) {
      wall.draw(this.cellWidth, this.cellHeight);
      }
  }
}