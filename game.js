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
        this.choicesHard = [
            {name: "final girl", beats: ['hunter', 'killer'], losesTo: ['jock', 'nerd']},
            {name: "jock", beats: ['final girl', 'nerd'], losesTo: ['hunter', 'killer']}, 
            {name: "hunter", beats: ['jock', 'killer'], losesTo: ['final girl', 'nerd']}, 
            {name: "killer", beats: ['jock', 'nerd'], losesTo: ['final girl', 'hunter']},
            {name: "nerd", beats: ['final girl', 'hunter'], losesTo: ['jock', 'killer']}
        ];
    }


   
    checkForWinConditionsEasy() {
        var p1MoveObj = this.choicesEasy[this.playerOne.move] 
        var p2MoveObj = this.choicesEasy[this.playerTwo.move] 
        if (this.playerOne.move === this.playerTwo.move) {
            return "It's a tie!"
        } else if (p1MoveObj.name === p2MoveObj.beats) {
            this.playerTwo.wins++;
        } else if (p2MoveObj.name === p1MoveObj.beats) {
            this.playerOne.wins++;
        }
    }

    checkForWinConditionsHard() {
        var p1MoveObj = this.choicesHard[this.playerOne.move] 
        var p2MoveObj = this.choicesHard[this.playerTwo.move]
        //follow the above idea, but this time we have to check if it matches more than one thing.
        //maybe use .includes()?
        //we are checking if a property of an object is inside the key(which is an array) of another object
        //we could say does it equal this.choicesHard.beats[0] || this.choicesHard.beats[1]
        if (this.playerOne.move === this.playerTwo.move) {
            return "it's a tie, and it's working";
        } else if(p1MoveObj.beats.includes(p2MoveObj.name)) { //if the object that p1 chooses has the name of the object p2 chooses in its 'beats' property, p1 gets a point
            this.playerOne.wins++;
            return "player one wins!";
        } else if (p2MoveObj.beats.includes(p1MoveObj.name)) {
            this.playerTwo.wins++;
            return "player two wins!";
        }
    }

    resetGame() {
        //not sure what this is in the data model, it would make the choices accessible to the players again
        //i suppose if the 'move' property of the players is 'null' the choices can be displayed 
            //so this function can reset them to null, thereby re-displaying the choices
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