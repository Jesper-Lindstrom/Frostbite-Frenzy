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
    colorMode(RGB);
    
    let from = color(255, 255, 255);
    let to = color(173, 216, 230);
    let gradient = lerpColor(from, to, 0.1);
    fill(gradient);
    stroke(gradient);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }

  // public draw() {
  //   push();
  //   fill(230, 247, 255)
  //   stroke(230, 247, 255)
  //   rect(this.position.x, this.position.y, this.size.x, this.size.y);
  //   pop();
  // }
}
