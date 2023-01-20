abstract class GameEntity {
  protected position: p5.Vector;
  protected size: p5.Vector;

  constructor (position: p5.Vector, size: p5.Vector) {
    this.position = position;
    this.size = size;
  }
  
  public abstract draw(): void;
}