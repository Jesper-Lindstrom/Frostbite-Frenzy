
class WallBlock {
  public position: p5.Vector;
  private wallBlocks: WallBlock[] = [];
  public constructor(
    x: number,
    y: number,
    startPoint: p5.Vector,
    cellWidth: number,
    cellHeight: number
  ) {
    this.position = new p5.Vector((x * cellWidth) + startPoint.x, (y * cellHeight) + startPoint.y);
  }
  public draw(cellWidth: number, cellHeight: number) {
    push();
    fill("red");
    rect(this.position.x, this.position.y, cellWidth, cellHeight);
    pop();
  }
}

export {WallBlock};