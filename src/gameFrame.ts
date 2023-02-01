class GameFrame {
  // This property is an object containing the current scene. A instance either of the Game or Menu class.
  private activeState: Game | Menu;
  // Controls whether the game music is playing or not.

  public constructor() {
    // The menu constructor will need to take an argument in the future to describe which page to open. When gameOver, we will need to send player score.
    this.activeState = new Menu("startpage");
  }

  public update() {
    this.activeState.update();
  }

  public draw() {
    background("black");
    this.activeState.draw();
  }

  // This function starts a new game
  public newGame() {
    this.activeState = new Game();
    gameMusic.play();
    gameMusic.setVolume(0.1);
    removeElements();
    loop();
  }

  public gameOver(scores: Scores) {
    this.activeState = new Menu("gameover", scores);
    gameMusic.stop();
    gameOver.play();
    gameOver.setVolume(0.2);
  }
}
