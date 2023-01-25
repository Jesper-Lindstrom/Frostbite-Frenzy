/// <reference path="movingEntity.ts" />

class Monster extends MovingEntity {
  private mapArray: number[][];
  private mapPosition: p5.Vector;
  private cellSize: number;

  private stepCounter: number;
  private cellSteps: number;

private direction: string;

  constructor(position: p5.Vector, cellSize: number, mapArray: number[][], mapPosition: p5.Vector) {
    super(
      new p5.Vector(position.x + cellSize * 0.1, position.y + cellSize * 0.1),
      new p5.Vector(cellSize * 0.8, cellSize * 0.8),
      cellSize / 15
    );
    this.mapArray = mapArray;
    this.mapPosition = mapPosition;
    this.cellSize = cellSize;
    this.stepCounter = 0;
    this.cellSteps = 15;
    this.direction = this.setDirection();
  }

  draw(): void {
    push();
    fill("white");
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }

  update() {
    this.directionControl();
    this.move();
  }



  private directionControl() {
    if (this.stepCounter === this.cellSteps) {
        this.direction = this.setDirection();
        this.stepCounter = 0;
    } else {
        this.stepCounter ++
    }
  }

  /* First iteration of a movement handler for the monster object. 
    function getPossibleDirections checks the four surrounding cells of the current position of the monster.
    It returns an array of possible directions for the monster to go in. 
    after that the moveRandom function will choose from these four directions, and the calcultion will run again.
    this is as random as we can get with 0 intelligence for monster.  */
  private setDirection() {
    let directions = ["up", "down", "left", "right"];
    let currentPosition = this.getCell();
    let possibleDirs = [];

    /*The "MAP" that is being referred to should be of type "boolean". We need a function that converts 1 and 0 in our mapArray into true and false.
    That is an easier logic for the function to work properly in typescript. I think.. */

    for (let direction of directions) {
      let x = currentPosition.x;
      let y = currentPosition.y;
      if (direction === "up") {
        if (this.mapArray[x - 1][y] === 0) possibleDirs.push(direction);
      } else if (direction === "down") {
        if (this.mapArray[x + 1][y] === 0) possibleDirs.push(direction);
      } else if (direction === "left") {
        if (this.mapArray[x][y - 1] === 0) possibleDirs.push(direction);
      } else if (direction === "right") {
        if (this.mapArray[x][y + 1] === 0) possibleDirs.push(direction);
      }
    }
    
    return possibleDirs[Math.ceil(Math.random() * possibleDirs.length)];

  }

  private getCell(): Coordinates {
    const x = Math.floor((this.position.x - this.mapPosition.x) / this.cellSize);
    const y = Math.floor((this.position.y - this.mapPosition.y) / this.cellSize);
    return { x: x, y: y};
  }

  private move() {

    if (this.direction === "up") {
        this.position.y -= this.speed;
    } else if (this.direction === "down") {
        this.position.y += this.speed;
    } else if (this.direction === "right") {
        this.position.x += this.speed;
    } else if (this.direction === "left") {
        this.position.x -= this.speed;
    }
  }
}

// Set speed according to cell size.
// eg. cellSize / 10
// Set property on monster to track frames passed. Start at 0.
// Add 1 with each frame from update()
// Run moveRandom when the same number of frames has passed as cellSize was divided by.
// In this example, 10.
// Get cell, get random direction
// Set frame counter property to 0
