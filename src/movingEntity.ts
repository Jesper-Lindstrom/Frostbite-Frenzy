/// <reference path="gameentity.ts" />

abstract class MovingEntity extends GameEntity {
    protected speed: number;

    constructor (position: p5.Vector, size: p5.Vector, speed: number) {
        super(position, size);
        this.speed = speed;
    }

    abstract draw(): void;

    protected updateBounds(): void {
        this.bounds.left = this.position.x;
        this.bounds.right = this.position.x + this.size.x;
        this.bounds.top = this.position.y;
        this.bounds.bottom = this.position.y + this.size.y;
    }

    
    // public get bounds() {
    //     return {
    //       left: this.pos.x - this.size.x / 2,
    //       right: this.pos.x + this.size.x / 2,
    //       top: this.pos.y - this.size.y / 2,
    //       bottom: this.pos.y + this.size.y / 2,
    //     };
    //   }
    
    //   public checkCollision(other: Entity) {
    //     return (
    //       this.bounds.left < other.bounds.right &&
    //       this.bounds.right > other.bounds.left &&
    //       this.bounds.top < other.bounds.bottom &&
    //       this.bounds.bottom > other.bounds.top
    //     );
    //   }
}