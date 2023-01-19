class Controls {
    private img: p5.Image;
    constructor(img: p5.Image){
        this.img = img;
    }
    
    public draw() {
      push(); // save current styles and transformations
      rectMode(CENTER);
      fill(74, 122, 167);
      rect(width/2, height/2, 400, 325); // larger rect
      pop();
      push();
      strokeWeight(5); // frame thickness
      stroke(255, 255, 255); // set the "frame" color
      fill(74, 122, 167);
      rectMode(CENTER);
      rect(width/2, height/2, 200, 250); // "frame"
      pop(); // restore previous styles and transformations
      
      this.drawText(); 
      this.drawImages();
    }
    
    public drawText() {
      push(); // save current styles and transformations
      fill(0); 
      textSize(12); 
      textAlign(CENTER, CENTER);
      text("CONTROLS", 300, 200);
      pop(); // restore previous styles and transformations
    }
    
    public drawImages() {
      if(this.img.width > 0 && this.img.height > 0) {
        image(this.img, width/2-75, height/2-100, 150, 150);
      }
    }
}
























/* import { MenuPage } from '../src/menupage';

class Controls extends MenuPage {
    
public constructor(content: PageContent) {
    super(content);
} 

public draw() {
    
}

class Controls {
    
    public constructor(content: PageContent) {
        super(content);
    } 
    
    public draw() {
        
    }





// New example
/* draw() {
    super.draw();
    super.drawText();
    super.drawImages();
} 
} */