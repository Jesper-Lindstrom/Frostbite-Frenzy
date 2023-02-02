class SpeedUp extends GameEntity {
    private image: p5.Image;
    public constructor(position: p5.Vector,cellSize: number) {
      super(position, new p5.Vector(
        cellSize, 
        cellSize
        ));
      this.image = images.watch;
}

    public draw() {
      push();
      image(
         this.image,
         this.position.x + this.size.x * 0.1,
         this.position.y +  this.size.y * 0.1,
         this.size.x * 0.8,
         this.size.y * 0.8
         );
      pop();
    }
    public update() {}
   
}
