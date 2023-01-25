class Timer {
    private minutes: number;
    private seconds: number;
    timerRunning: boolean;

    public constructor() {
        this.minutes = 3;
        this.seconds = 0;
        this.timerRunning = false;
    }

    /**
     * Updates the time every second using delta time.
     */
    public update() {

    }

    /**
     * Updates the time display every second.
     */
    public draw() {

    }

    /**
     * Called by Game to control spawning of Powerups and the game end.
     */
    public getTime() {

    }

    /**
     * Starts the timer once the game is loaded.
     */
    public runTimer() {

    }
}