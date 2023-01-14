class Game {
    constructor() {
        this.playerOne = new Player('Human', '😎');
        this.playerTwo = new Player('Computer', '💻');
        this.gameType = null;
        this.choicesEasy = [
            {name: "rock", token: "💀", beats: "scissors", losesTo: "paper"}, 
            {name: "paper", token: "🫀", beats: "rock", losesTo: "scissors"}, 
            {name: "scissors",token: "🔪", beats: "paper", losesTo: "rock"}
        ]
        this.choicesHard = [
            {name: "final girl", token: "👩🏼‍🦰", beats: ['hunter', 'killer'], losesTo: ['jock', 'nerd']},
            {name: "jock", token: "🏋🏿", beats: ['final girl', 'nerd'], losesTo: ['hunter', 'killer']}, 
            {name: "hunter", token: "🕵🏾", beats: ['jock', 'killer'], losesTo: ['final girl', 'nerd']}, 
            {name: "killer", token: "🧟‍♂️", beats: ['jock', 'nerd'], losesTo: ['final girl', 'hunter']},
            {name: "nerd", token: "🤓", beats: ['final girl', 'hunter'], losesTo: ['jock', 'killer']}
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
        } else if(p1MoveObj.beats.includes(p2MoveObj.name)) { 
            this.playerOne.wins++;
        } else if (p2MoveObj.beats.includes(p1MoveObj.name)) {
            this.playerTwo.wins++;
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


