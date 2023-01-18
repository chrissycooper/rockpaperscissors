class Game {
    constructor() {
        this.playerOne = new Player('Human', '😎');
        this.playerTwo = new Player('Computer', '💻');
        this.gameType = null;
        this.choicesEasy = [
            {name: "rock", token: "💀", beats: "scissors", losesTo: "paper"}, 
            {name: "paper", token: "🫀", beats: "rock", losesTo: "scissors"}, 
            {name: "scissors", token: "🔪", beats: "paper", losesTo: "rock"}
        ];
        this.choicesHard = [
            {name: "final girl", token: "👩🏼‍🦰", beats: ['hunter', 'killer'], losesTo: ['jock', 'nerd']},
            {name: "jock", token: "🏋🏿", beats: ['final girl', 'nerd'], losesTo: ['hunter', 'killer']}, 
            {name: "hunter", token: "🕵🏾", beats: ['jock', 'killer'], losesTo: ['final girl', 'nerd']}, 
            {name: "killer", token: "🧟‍♂️", beats: ['jock', 'nerd'], losesTo: ['final girl', 'hunter']},
            {name: "nerd", token: "🤓", beats: ['final girl', 'hunter'], losesTo: ['jock', 'killer']}
        ];
    };
   
    checkForWinConditionsEasy() {
        var p1Move = this.choicesEasy[this.playerOne.move]; 
        var p2Move = this.choicesEasy[this.playerTwo.move];
        if (this.playerOne.move === this.playerTwo.move) {
            return "It's a tie!";
        } else if (p1Move.name === p2Move.beats) {
            this.playerTwo.wins++;
            return `${this.playerTwo.name} wins!`
        } else if (p2Move.name === p1Move.beats) {
            this.playerOne.wins++;
            return `${this.playerOne.name} wins!`
        };
    };

    checkForWinConditionsHard() {
        var p1Move = this.choicesHard[this.playerOne.move]; 
        var p2Move = this.choicesHard[this.playerTwo.move];
        if (this.playerOne.move === this.playerTwo.move) {
            return "It's a tie!";
        } else if(p1Move.beats.includes(p2Move.name)) { 
            this.playerOne.wins++;
            return `${this.playerOne.name} wins!`
        } else if (p2Move.beats.includes(p1Move.name)) {
            this.playerTwo.wins++;
            return `${this.playerTwo.name} wins!`
        };
    };

    resetGame() {
        this.gameType = null;
    };
};


