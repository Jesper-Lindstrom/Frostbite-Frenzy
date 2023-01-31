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

 
  
  // public draw() {
  //   push();
  //   colorMode(RGB);
  //   // let from = color(255, 255, 255);
  //   // let to = color(173, 216, 230);
  //   let from = color(0, 0, 255);
  //   let to = color(173, 216, 230);
  //   let gradient = lerpColor(from, to, 0.5);
  //   fill(gradient);
  //   noStroke();
  //   // stroke('0, 0, 0, 0');
  //   rect(this.position.x, this.position.y, this.size.x, this.size.y);
  //   pop();
  // }

  public draw() {
    push();
    fill(102, 204, 255)
    stroke(102, 204, 255);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }
  
}
