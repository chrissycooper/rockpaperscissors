var currentGame = new Game();

//connect data model to DOM
    //create variables
    
    //then choosing a move
        //set timeout will come in here
				//next thing that needs to happen is that each choice is displayed side by side, and the subtitle needs to say who won

//
var chooseGameView = document.getElementById("chooseView");
var subTitle = document.getElementById("subTitle");
var humanMove = document.getElementById("humanMove");
var computerMove = document.getElementById("computerMove");
var easyGameBoard = document.querySelector(".game-board-easy");
var hardGameBoard = document.querySelector(".game-board-hard");
var movesDisplay = document.querySelector(".moves");
var humanWins = document.getElementById("humanWins");
var computerWins = document.getElementById("computerWins");


chooseGameView.addEventListener('click', function(event) {
  setGameMode(event);
	displayGameMode();
})

easyGameBoard.addEventListener('click', function(event) {
	makeMovesEasy(event);
	currentGame.checkForWinConditionsEasy();
	displayMoves();
	displayWins();
})

hardGameBoard.addEventListener('click', function(event){
	makeMovesHard(event)
	currentGame.checkForWinConditionsHard();
	displayMoves();
})


function setGameMode(event) {
	if(event.target.id === 'easyMode') {
		currentGame.gameType = 'easy';
	} else if (event.target.id === 'hardMode') {
		currentGame.gameType = 'hard';
	}
}

function displayGameMode() {
	subTitle.innerText = "Choose your fighter!"
	if(currentGame.gameType === 'easy') {
		show(easyGameBoard);
		hide(chooseGameView);
	} else if (currentGame.gameType === 'hard') {
		show(hardGameBoard);
		hide(chooseGameView);
	} else {
		//show choose game view?
	}
}

function displayMoves() {
	if (currentGame.gameType === 'easy') {
		hide(easyGameBoard);
		show(movesDisplay);
		humanMove.innerText = currentGame.choicesEasy[currentGame.playerOne.move].token; 
		computerMove.innerText = currentGame.choicesEasy[currentGame.playerTwo.move].token;
	} else if (currentGame.gameType === 'hard') {
		hide(hardGameBoard);
		show(movesDisplay);
		humanMove.innerText = currentGame.choicesHard[currentGame.playerOne.move].token; 
		computerMove.innerText = currentGame.choicesHard[currentGame.playerTwo.move].token;
	}
}

function displayWins() {
	humanWins.innerText = `wins: ${currentGame.playerOne.wins}`;
	computerWins.innerText = `wins: ${currentGame.playerTwo.wins}`;
	if (currentGame.playerOne.wins > currentGame.playerTwo.wins) {
		subTitle.innerText = "Human wins this round!";
	} else if (currentGame.playerOne.wins < currentGame.playerTwo.wins) {
		subTitle.innerText = "Computer wins this round!";
	} 
}

function makeMovesEasy(event) {
	currentGame.playerTwo.takeTurn('easy');
	if(event.target.id === 'rock') {
		currentGame.playerOne.takeTurn('easy', 0);
	} else if (event.target.id === 'paper') {
		currentGame.playerOne.takeTurn('easy', 1);
	} else if (event.target.id === 'scissors') {
		currentGame.playerOne.takeTurn('easy', 2);
	}
}

function makeMovesHard(event){
	currentGame.playerTwo.takeTurn('hard');
	if(event.target.id === 'final-girl') {
		currentGame.playerOne.takeTurn('easy', 0);
	} else if (event.target.id === 'jock') {
		currentGame.playerOne.takeTurn('easy', 1);
	} else if (event.target.id === 'hunter') {
		currentGame.playerOne.takeTurn('easy', 2);
	} else if (event.target.id === 'killer') {
		currentGame.playerOne.takeTurn('easy', 3);
	} else if (event.target.id === 'nerd') {
		currentGame.playerOne.takeTurn('easy', 4);
	}
}

function hide(element){
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}