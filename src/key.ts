class Key extends GameEntity {
  //ärver   protected position: p5.Vector;
  // protected size: p5.Vector;
  // public bounds: bounds;
  // public constructor()
    public constructor(position: p5.Vector,cellSize: number) {
      super(position, new p5.Vector(
        cellSize, 
        cellSize
        ));
    }

    public draw() {
      push();
      fill('white')
      rect(this.position.x, this.position.y, this.size.x, this.size.y)
      pop();
    }
    public update() {}
}




//börja med att få EN nyckeln att synas
  // skapa klassen. Position och storlek behövs.
  // mata in i 2d arrayen med siffran 4


//Kollisionshantering del 1 ta bort och ersätt nyckel
  //random respawn varje gång nyckeln plockas upp
  //nyckeln ska försvinna och respawna på ett annat ställe vid kollision med spelare

//Kollisionshantering del 2 Poäng
  //Öka spelarens poäng
  //sätt playerscore till 0
  //öka rätt spelares poäng