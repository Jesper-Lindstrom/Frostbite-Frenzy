// class SlowOpponent extends GameEntity {
//     isActive: boolean;
//     affectsPlayer: number;
//     private image: p5.Image;

//     constructor(position: p5.Vector, cellSize: number) {
//         super(position, new p5.Vector(cellSize, cellSize))
//         this.isActive = false;
//         this.affectsPlayer = 0;
//         this.image = images.watch
//     }

//     private activate(playerNumber: number) {
//         this.isActive = true;
//         this.affectsPlayer = playerNumber;
//     }

//     private deactivate() {
//         this.isActive = false;
//         this.affectsPlayer = 0;
//     }
//     public draw() {
//         push();
//         fill(0, 0, 0, 0)
//         rect(this.position.x, this.position.y, this.size.x * 0.5, this.size.y * 0.5)
//         pop();
//         image(
//             this.image,
//             this.position.x - this.size.x * 0.1,
//             this.position.y - this.size.y * 0.7,
//             this.size.x * 0.7,
//             this.size.y * 0.5
//         );
//         }
//         public update() {}
      
//     }
