class Game {
    constructor(gameType) {
        this.playerOne = new Player('Human', '😎');
        this.playerTwo = new Player('Computer', '💻');
        this.gameType = gameType; //"easy" or "hard"
        this.choicesEasy = ["rock", "paper", "scissors"];
        this.choicesHard = ["final girl", "jock", "hunter", "killer", "nerd"];
    }

    checkForWinConditions() {
        //each choice is related to an index value i.e a number
        /*if playerOne chooses 0, and playerTwo chooses 1 or 2, then playerTwo wins
            rock > scissors > paper > rock
            0 > 1 > 2 > 0
        if (player1.taketurn() === 'rock' && player2.tt() === 'scissors'){
            player1.wins += 1;
        }
            do for each one, I'd like to try with math as well
        */

        if (this.playerOne.move === 0 && this.playerTwo.move === 2){
            this.playerOne.wins += 1;
        } else if (this.playerOne.move === 2 && this.playerTwo.move === 1) {
            this.playerOne.wins += 1;
        } else if (this.playerOne.move === 1 && this.playerTwo.move === 0) {
            this.playerOne.wins += 1;
        }



        //if playerOne's choice === playerTwo's choice, then its a tie
        //two versions depending on game type (0-2) or (0-4) 
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