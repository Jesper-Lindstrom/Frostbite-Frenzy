class Timer {
  private minutes: number;
  private seconds: number;
  private timerText: string;
  private timerRunning: boolean;
  private deltaSecond: number;

  // Properties related to on screen display.
  private textSize: number;
  private x: number;
  private y: number;

  public constructor(mapSize: number) {
    this.minutes = 2;
    this.seconds = 0;
    this.timerRunning = true;
    this.deltaSecond = 0;

    this.textSize = mapSize / 9 / 3;
    this.x = width / 2;
    this.y = this.textSize / 5;
    this.timerText = this.setTimerText();
  }

  /**
   * Updates the time every second using delta time.
   */
  public update() {
    if (this.timerRunning) {
      this.deltaSecond += deltaTime;
      if (this.deltaSecond >= 1000) {
        this.seconds -= 1;
        if (this.seconds === -1) {
          this.minutes -= 1;
          this.seconds = 59;
        }
        this.timerText = this.setTimerText();
        this.deltaSecond = 0;
      }
    }
  }

  /**
   * Draws the timer display.
   */
  public draw() {
    push();
    fill("white");
    textFont(fontFreckleFace);
    textSize(this.textSize);
    textAlign(CENTER, TOP);
    text(this.timerText, this.x, this.y);
    pop();
  }

  private setTimerText(): string {
    let seconds: string;
    let timerText: string;
    if (this.seconds < 10) {
      seconds = "0" + this.seconds;
    } else {
      seconds = this.seconds.toString();
    }
    timerText = this.minutes + ":" + seconds;
    return timerText;
  }

  /**
   * Called by Game to control spawning of Powerups and the game end.
   */
  public getTime(): number {
    return this.minutes * 60 + this.seconds;
  }

  /**
   * Starts the timer once the game is loaded.
   */
  public runTimer() {
    this.timerRunning = true;
  }
}
