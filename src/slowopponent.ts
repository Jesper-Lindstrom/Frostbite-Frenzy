class SlowOpponent {
    isActive: boolean;
    affectsPlayer: number;

    constructor() {
        this.isActive = false;
        this.affectsPlayer = 0;
    }

    activate(playerNumber: number) {
        this.isActive = true;
        this.affectsPlayer = playerNumber;
    }

    deactivate() {
        this.isActive = false;
        this.affectsPlayer = 0;
    }
}