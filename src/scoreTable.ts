interface Scores {
    1: number;
    2: number;
}

class ScoreTable {
    private player1Score: number;
    private player2Score: number;


    private availWidth: number;
    private textSize: number;
    private p1X: number;
    private p2X: number;

    private playerPicY: number;
    private imgWidth: number;
    private imgHeight: number;

    private scoreY: number;

    constructor(mapSize: number) {
        this.player1Score = 0;
        this.player2Score = 0;

        this.availWidth = width - mapSize;
        this.textSize = this.availWidth * 0.1;
        this.p1X = this.availWidth * 0.25;
        this.p2X = this.availWidth * 0.75 + mapSize;
        this.playerPicY = height * 0.1;
        this.imgWidth = this.availWidth / 8;
        this.imgHeight = this.imgWidth * 1.5;
        this.scoreY = this.playerPicY + this.imgHeight * 1.2;

    }

    public draw() {
        image(images.yellowSnowman, this.p1X - (this.imgWidth / 2), this.playerPicY, this.imgWidth, this.imgHeight);
        image(images.greenSnowman, this.p2X - (this.imgWidth / 2), this.playerPicY, this.imgWidth, this.imgHeight);
        push();
        fill('white');
        textFont(fontFreckleFace);
        textSize(this.textSize);
        textAlign(CENTER, TOP);
        text(this.player1Score, this.p1X, this.scoreY);
        text (this.player2Score, this.p2X, this.scoreY);
        pop();
    }

    public givePoint(playerNum: number) {
        switch (playerNum) {
            case 1:
                this.player1Score += 1
                break;
            
            case 2:
                this.player2Score += 1
                break;

            default:
                break;
        }
    }

    public getScores(): Scores {
        return {
            1: this.player1Score,
            2: this.player2Score
        }
    }
}