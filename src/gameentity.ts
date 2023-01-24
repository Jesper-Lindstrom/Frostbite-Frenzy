interface bounds {
  left: number;
  right: number;
  top: number;
  bottom: number
}

abstract class GameEntity {
  protected position: p5.Vector;
  protected size: p5.Vector;
  public bounds: bounds;

  constructor (position: p5.Vector, size: p5.Vector) {
    this.position = position;
    this.size = size;
    this.bounds = {
      left: this.position.x,
      right: this.position.x + this.size.x,
      top: this.position.y,
      bottom: this.position.y + this.size.y
    }
  }
  
  public abstract draw(): void;
}