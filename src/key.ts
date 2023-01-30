class Key extends GameEntity {
    private image: p5.Image;
    private id: number;

    public constructor(position: p5.Vector,cellSize: number, id: number) {
      super(position, new p5.Vector(
        cellSize, 
        cellSize
        ));
      this.image = images.key;
      this.id = id;
    }

   

    public draw() {
      push();
      image(
        this.image,
        this.position.x + this.size.x * 0.1,
        this.position.y + this.size.y * 0.2,
        this.size.x * 0.8,
        this.size.y * 0.6
      );
      pop();
    }

   
   
}




//börja med att få EN nyckeln att synas
  // skapa klassen. Position och storlek behövs.
  // mata in i 2d arrayen med siffran 4 (senare randomspawnpoint som Linus jobbar på)


// mata in nyckeln i en array, skapa 2 st som spawnar slumpmässigt med hjälp av randomValidSpawnPoint  



//Kollisionshantering del 1 ta bort och ersätt nyckel
  //random respawn varje gång nyckeln plockas upp
  //nyckeln ska försvinna och respawna på ett annat ställe vid kollision med spelare. 

//Kollisionshantering del 2 Poäng
  //Öka spelarens poäng
  //sätt playerscore till 0
  //öka rätt spelares poäng