class Game {
    constructor(gameType) {
        this.playerOne = new Player('Human', '😎');
        this.playerTwo = new Player('Computer', '💻');
        this.gameType = gameType; //"easy" or "hard"
        this.choicesEasy = ["rock", "paper", "scissors"];
        this.choicesHard = ["final girl", "jock", "hunter", "killer", "nerd"];
    }


    //the following functions correlate the move to the index value of the choices arrays, and decide a winner based on that
    checkForWinConditionsEasy() {
        if (this.playerOne.move === 0 && this.playerTwo.move === 2 ){
            this.playerTwo.wins += 1;
        } else if(this.playerOne.move === 2 && this.playerTwo.move === 1) {
            this.playerTwo.wins += 1;
        } else if(this.playerOne.move === 1 && this.playerTwo.move === 0) {
            this.playerTwo.wins += 1;
        } else if(this.playerOne.move === 2 && this.playerTwo.move === 0){
            this.playerOne.wins += 1;
        } else if(this.playerOne.move === 1 && this.playerTwo.move === 2) {
            this.playerOne.wins += 1;
        } else if(this.playerOne.move === 0 && this.playerTwo.move === 1) {
            this.playerOne.wins += 1;
        } else if(this.playerOne.move === this.playerTwo.move) {
            return "it's a tie";
        }
    }

    checkForWinConditionsHard() {
        if (this.playerOne.move === 0 && (this.playerTwo.move === 2 || this.playerTwo.move === 3 )){ //checked this syntax it does work
            this.playerOne.wins += 1; 
        } else if (this.playerOne.move === 2 && (this.playerTwo.move === 1 || this.playerTwo.move === 3)) {
            this.playerOne.wins += 1;
        } else if (this.playerOne.move === 1 && (this.playerTwo.move === 0 || this.playerTwo.move === 4)) {
            this.playerOne.wins += 1;
        } else if (this.playerOne.move === 3 && (this.playerTwo.move === 1 || this.playerTwo.move === 4)) {
            this.playerOne.wins += 1;
        } 
    }

    checkForWinConditionsHard2 () {
        var result = (this.playerTwo.move - this.playerOne.move) % 5
        if(result === 0) {
            return "it's a tie";
        } else if (result % 2 === 1) {
            this.playerOne.wins++;
        } else if (result % 2 === 0) {
            this.playerTwo.wins++;
        } 
    }

    resetGame() {

    }

}

//a way to keep track of the data for the game board - the moves the players can make, i.e. the choices
//a way to keep track of the selected game type - easy or hard mode
//a way to check the Game's board data for win conditions - compare the two moves against each other
//a way to detect when a game is a draw (no one has won) - compaare the two moves against each other
//a way to reset the Game's board to begin a new game - reset game method?

//basic rock paper scissors - two values are offered up, they are compared against each other, a winner is determined