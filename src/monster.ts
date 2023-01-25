/// <reference path="movingEntity.ts" />

class Monster extends MovingEntity {

    private mapArray: number[][];

    constructor(position: p5.Vector, cellSize: number,  mapArray: number[][]){
        super(position, new p5.Vector(
            cellSize * 0.8,
            cellSize * 0.8
        ), cellSize / 10);
        this.mapArray = mapArray;
    }
      
    draw(): void {
        push();
        fill('white');
        circle(this.position.x, this.position.y, this.size.x);
    }

    update(){
        this.getPossibleDirections()
        this.moveRandom()
    }
    /* First iteration of a movement handler for the monster object. 
    function getPossibleDirections checks the four surrounding cells of the current position of the monster.
    It returns an array of possible directions for the monster to go in. 
    after that the moveRandom function will choose from these four directions, and the calcultion will run again.
    this is as random as we can get with 0 intelligence for monster.  */

    private getPossibleDirections() {
    let possibleDirections = ["up", "down", "left", "right"];
    let currentPosition = {x:1, y:1};
    let possibleDirs = [];

    /*The "MAP" that is being referred to should be of type "boolean". We need a function that converts 1 and 0 in our mapArray into true and false.
    That is an easier logic for the function to work properly in typescript. I think.. */

    for (let direction of possibleDirections) {
        let x = currentPosition.x;
        let y = currentPosition.y;
        if(direction === "up"){
        if(this.mapArray[x-1][y] === 0) possibleDirs.push(direction);
        } else if(direction === "down"){
        if(this.mapArray[x+1][y] === 0) possibleDirs.push(direction);
        } else if(direction === "left"){
        if(this.mapArray[x][y-1] === 0) possibleDirs.push(direction);
        } else if(direction === "right"){
        if(this.mapArray[x][y+1] === 0) possibleDirs.push(direction);
        }
    }
    return possibleDirs;
    }

    private moveRandom(){

        let possibleDirections = ["up", "down", "right", "left"];
        
        let randomIndex = Math.floor(Math.random() * possibleDirections.length);
        let chosenDirection = possibleDirections[randomIndex];

        if (chosenDirection === "up") {}

        else if (chosenDirection === "down"){}

        else if (chosenDirection === "right") {}

        else if (chosenDirection === "left") {}

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