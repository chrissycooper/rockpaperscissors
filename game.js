class Game {
    constructor(gameType) {
        this.playerOne = new Player('Human', '😎');
        this.playerTwo = new Player('Computer', '💻');
        this.gameType = gameType; //"easy" or "hard"
        this.choicesEasy = [
            {name: "rock", beats: "scissors", losesTo: "paper"}, 
            {name: "paper", beats: "rock", losesTo: "scissors"}, 
            {name: "scissors", beats: "paper", losesTo: "rock"}
        ]
        this.choicesHard = ["final girl", "jock", "hunter", "killer", "nerd"];
    }


   
    checkForWinConditionsEasy() {
        // if player one puts in 2, and playerTwo produces 0
        if (this.playerOne.move === this.playerTwo.move) {
            return "It's a tie!"
        } 
        var p1MoveObj = this.choicesEasy[this.playerOne.move] //paper
        var p2MoveObj = this.choicesEasy[this.playerTwo.move] //rock

        if (p1MoveObj.name === p2MoveObj.beats) {
            this.playerTwo.wins++;
        } else if (p2MoveObj.name === p1MoveObj.beats) {
            this.playerOne.wins++;
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
        var result = (this.playerTwo.move - this.playerOne.move)
        if(result === 0) {
            return "it's a tie";
        } else if (result % 2 === 1) {
            this.playerOne.wins++;
        } else if (result % 2 === 0) {
            this.playerTwo.wins++;
        } //could I just add some stipulations about negative numbers?
    }

    resetGame() {

    }

}

//a way to keep track of the data for the game board - the moves the players can make, i.e. the choices
//a way to keep track of the selected game type - easy or hard mode
//a way to check the Game's board data for win conditions - compare the two moves against each other
//a way to detect when a game is a draw (no one has won) - compaare the two moves against each other
//a way to reset the Game's board to begin a new game - reset game method?

//basic rock paper scissors - two values are offered up, they are compared against each other, a winner is determined\\


// if (this.playerOne.move === 0 && this.playerTwo.move === 2 ){
//     this.playerTwo.wins += 1;
// } else if(this.playerOne.move === 2 && this.playerTwo.move === 1) {
//     this.playerTwo.wins += 1;
// } else if(this.playerOne.move === 1 && this.playerTwo.move === 0) {
//     this.playerTwo.wins += 1;
// } else if(this.playerOne.move === 2 && this.playerTwo.move === 0){
//     this.playerOne.wins += 1;
// } else if(this.playerOne.move === 1 && this.playerTwo.move === 2) {
//     this.playerOne.wins += 1;
// } else if(this.playerOne.move === 0 && this.playerTwo.move === 1) {
//     this.playerOne.wins += 1;
// } else if(this.playerOne.move === this.playerTwo.move) {
//     return "it's a tie";
// }