/// <reference path="movingEntity.ts" />

class Monster extends MovingEntity {
  private mapArray: number[][];
  private mapPosition: p5.Vector;
  private cellSize: number;

  private image: p5.Image;

  private stepCounter: number;
  private cellSteps: number;

  private direction: string;

  constructor(
    position: p5.Vector,
    cellSize: number,
    mapArray: number[][],
    mapPosition: p5.Vector,
    image: p5.Image,
    speed: number,
  ) {
    super(
      new p5.Vector(position.x + cellSize * 0.1, position.y + cellSize * 0.1),
      new p5.Vector(cellSize * 0.8, cellSize * 0.8),
      cellSize / speed
    );
    this.mapArray = mapArray;
    this.mapPosition = mapPosition;
    this.cellSize = cellSize;
    this.image = image;
    this.stepCounter = 0;
    this.cellSteps = speed;
    this.direction = this.setDirection(this.getDirections());
  }

  draw(): void {
    push();
    image(this.image, this.position.x, this.position.y - this.size.y * 0.2, this.size.x, this.size.y * 1.2);
    pop();
  }

  update(): void {
    this.directionControl();
    this.move();
    this.updateBounds();
  }

  private directionControl(): void {
    let openDirections;
    if (this.stepCounter === this.cellSteps) {
      openDirections = this.getDirections();
      this.direction = this.setDirection(openDirections);
      this.stepCounter = 1;
    } else {
      this.stepCounter++;
    }
  }

  /**
   * Calls getCell to locate position on mapArray.
   * Check adjacent cells for walls.
   * Returns an array of possigle directions for movement.
   */
  private getDirections() {
    let currentPos = this.getCell();
    const x = currentPos.x;
    const y = currentPos.y;
    let possibleDirs = [];

    // Checking adjacent cells for walls
    if (this.mapArray[y - 1][x] != 1) possibleDirs.push("up");
    if (this.mapArray[y + 1][x] != 1) possibleDirs.push("down");
    if (this.mapArray[y][x - 1] != 1) possibleDirs.push("left");
    if (this.mapArray[y][x + 1] != 1) possibleDirs.push("right");

    return possibleDirs;
  }

  /**
   * Calculates coordinates on map grid from pixel position.
   * Returns coordinates object.
   */
  private getCell(): Coordinates {
    const x = Math.floor((this.position.x - this.mapPosition.x) / this.cellSize);
    const y = Math.floor((this.position.y - this.mapPosition.y) / this.cellSize);
    return { x: x, y: y };
  }

  setDirection(openDirections: string[]): string {
    let direction: string = this.direction;
    if (openDirections.length >= 3 || !openDirections.includes(this.direction)) {
      direction = openDirections[Math.floor(Math.random() * openDirections.length)]
    }
    return direction
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
