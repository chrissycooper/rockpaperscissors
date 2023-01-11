class Game {
    constructor(gameType) {
        this.playerOne = new Player('Human', '😎');
        this.playerTwo = new Player('Computer', '💻');
        this.gameType = gameType;
        this.choicesEasy = ["rock", "paper", "scissors"];
        this.choicesHard = ["final girl", "jock", "hunter", "killer", "nerd"];
    }

    checkForWinConditions() {

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