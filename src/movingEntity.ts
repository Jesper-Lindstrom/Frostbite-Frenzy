/// <reference path="gameentity.ts" />

abstract class MovingEntity extends GameEntity {
    private speed: number;

    constructor (position: p5.Vector, size: p5.Vector, speed: number) {
        super(position, size);
        this.speed = speed;
    }

    abstract draw(): void;
}