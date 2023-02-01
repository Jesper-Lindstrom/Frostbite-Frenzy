class Immortal extends GameEntity {
    private image: p5.Image;
  //ärver   protected position: p5.Vector;
  // protected size: p5.Vector;
  // public bounds: bounds;
  // public constructor()
    public constructor(position: p5.Vector,cellSize: number) {
      super(position, new p5.Vector(
        cellSize, 
        cellSize
        ));
      this.image = images.advantagessnowflake;
}

    public draw() {
      push();
      fill(0, 0, 0, 0)
      rect(this.position.x, this.position.y, this.size.x * 0.5, this.size.y * 0.5)
      pop();
      image(
        this.image,
        this.position.x - this.size.x * 0.1,
        this.position.y - this.size.y * 0.7,
        this.size.x * 0.7,
        this.size.y * 0.5
      );
    }
    public update() {}

   
}
