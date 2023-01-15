//Global Variables 👇

var currentGame = new Game();

var chooseGameView = document.getElementById("chooseView");
var subTitle = document.getElementById("subTitle");
var humanMove = document.getElementById("humanMove");
var computerMove = document.getElementById("computerMove");
var easyGameBoard = document.querySelector(".game-board-easy");
var hardGameBoard = document.querySelector(".game-board-hard");
var movesDisplay = document.querySelector(".moves");
var humanWins = document.getElementById("humanWins");
var computerWins = document.getElementById("computerWins");
var playerOneToken = document.getElementById('playerOneToken');
var playerOneName = document.getElementById('playerOneName');
var playerTwoToken = document.getElementById('playerTwoToken');
var playerTwoName = document.getElementById('playerTwoName');
var changeGameBtn = document.getElementById('changeGameBtn');

displayPlayerInfo();

chooseGameView.addEventListener('click', function(event) { 
  setGameMode(event);
  displayGameMode();
});

easyGameBoard.addEventListener('click', function(event) {
	makeMovesEasy(event);
	currentGame.checkForWinConditionsEasy();
	displayMoves();
	displayWinsEasy();
	setTimeout(displayGameMode, 2000);
});

hardGameBoard.addEventListener('click', function(event){
	makeMovesHard(event)
	currentGame.checkForWinConditionsHard();
	displayMoves();
	displayWinsHard();
	setTimeout(displayGameMode, 2000);
});

changeGameBtn.addEventListener('click', function(){
	currentGame.resetGame();
	displayChooseDifficulty();
});

function setGameMode(event) {
	if(event.target.id === 'easyMode') {
		currentGame.gameType = 'easy';
	} else if (event.target.id === 'hardMode') {
		currentGame.gameType = 'hard';
	};
};

function displayGameMode() {
	subTitle.innerText = "Choose your fighter!"
	if(currentGame.gameType === 'easy') {
		show(easyGameBoard);
		hide(chooseGameView);
		hide(movesDisplay);
	} else if (currentGame.gameType === 'hard') {
		show(hardGameBoard);
		hide(chooseGameView);
		hide(movesDisplay);
	};
};

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
	};
};

function displayWinsEasy() {
	displayPlayerInfo();
	
	if(currentGame.checkForWinConditionsEasy() === "It's a tie!") {
		subTitle.innerText = "It's a tie!!";
	} else if (currentGame.checkForWinConditionsEasy() === "Computer wins!") {
		subTitle.innerText = "Computer wins this round!";
	} else if (currentGame.checkForWinConditionsEasy() === "Human wins!") {
		subTitle.innerText = "Human wins this round!";
	}
};

function displayWinsHard() {
	displayPlayerInfo();
	var p1move = currentGame.playerOne.move;
	var p2move = currentGame.playerTwo.move;
	var hardMovesArr = currentGame.choicesHard;

	if (currentGame.playerOne.move === currentGame.playerTwo.move) {
		subTitle.innerText = "It's a tie!!";
	} else if (hardMovesArr[p1move].beats.includes(hardMovesArr[p2move].name)) {
		subTitle.innerText = "Human wins this round!";
	} else if (hardMovesArr[p2move].beats.includes(hardMovesArr[p1move].name)) {
		subTitle.innerText = "Computer wins this round!";
	}; 
};

function displayPlayerInfo() {
	humanWins.innerText = `wins: ${currentGame.playerOne.wins}`;
	computerWins.innerText = `wins: ${currentGame.playerTwo.wins}`;
	playerOneToken.innerText = currentGame.playerOne.token;
	playerOneName.innerText = currentGame.playerOne.name;
	playerTwoToken.innerText = currentGame.playerTwo.token;
	playerTwoName.innerText = currentGame.playerTwo.name;
};

function displayChooseDifficulty() {
	if (!currentGame.gameType) {
		subTitle.innerText = "Choose Your Difficulty Level!"
		hide(easyGameBoard);
		hide(hardGameBoard);
		hide(movesDisplay);
		show(chooseGameView);
		displayPlayerInfo();
	};
};

function makeMovesEasy(event) {
	currentGame.playerTwo.takeTurn('easy');
	if(event.target.id === 'rock') {
		currentGame.playerOne.takeTurn('easy', 0);
	} else if (event.target.id === 'paper') {
		currentGame.playerOne.takeTurn('easy', 1);
	} else if (event.target.id === 'scissors') {
		currentGame.playerOne.takeTurn('easy', 2);
	};
};

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
	};
};

function hide(element){
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};