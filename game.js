class Game {
    constructor() {
        this.playerOne = new Player('Human', '😎');
        this.playerTwo = new Player('Computer', '💻');
        this.gameType = null;
        this.choicesEasy = [
            {name: "rock", token: "💀", beats: "scissors", losesTo: "paper"}, 
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
        var p1MoveObj = this.choicesEasy[this.playerOne.move]; 
        var p2MoveObj = this.choicesEasy[this.playerTwo.move];
        if (this.playerOne.move === this.playerTwo.move) {
            return "It's a tie!";
        } else if (p1MoveObj.name === p2MoveObj.beats) {
            this.playerTwo.wins++;
        } else if (p2MoveObj.name === p1MoveObj.beats) {
            this.playerOne.wins++;
        }
    }

    checkForWinConditionsHard() {
        var p1MoveObj = this.choicesHard[this.playerOne.move]; 
        var p2MoveObj = this.choicesHard[this.playerTwo.move];
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
    this.playerOne.move = null;
    this.playerTwo.move = null;
    }

}

//a way to keep track of the data for the game board - the moves the players can make, i.e. the choices
//a way to keep track of the selected game type - easy or hard mode
//a way to check the Game's board data for win conditions - compare the two moves against each other
//a way to detect when a game is a draw (no one has won) - compaare the two moves against each other
//a way to reset the Game's board to begin a new game - reset game method?

