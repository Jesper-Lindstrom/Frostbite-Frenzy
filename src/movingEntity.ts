/// <reference path="gameentity.ts" />

abstract class MovingEntity extends GameEntity {
    protected speed: number;
    protected previousPosition: p5.Vector;

    constructor (position: p5.Vector, size: p5.Vector, speed: number) {
        super(position, size);
        this.speed = speed;
        this.previousPosition = position;
    }

    abstract draw(): void;
    abstract update(): void;

    protected updateBounds(): void {
        this.bounds.left = this.position.x;
        this.bounds.right = this.position.x + this.size.x;
        this.bounds.top = this.position.y;
        this.bounds.bottom = this.position.y + this.size.y;
    }
}

