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

displayPlayerInfo(); //on page load, display the player info

chooseGameView.addEventListener('click', function(event) { 
  setGameMode(event);	//uses event delegation to set and display the game mode, if they click on 'easy', it sets the current game 's mode to 'easy'
  displayGameMode(); //displays the view of the game mode depending on the gameType property of the current Game 
});

easyGameBoard.addEventListener('click', function(event) { //uses event delegation to figure out which move the user is making, by adding the EL to the whole easy board section
	makeMovesEasy(event); //sets the move property for the two players
	currentGame.checkForWinConditionsEasy(); //compares the moves of the two players based on the information stored in the choices array 
	displayMoves(); //displays moves depending on currentGame.gameType
	displayWinsEasy(); //decides the subtitle mainly, updates the win count on the DOM
	setTimeout(displayGameMode, 2000); //waits two seconds and then displays the choose your fighter view
});

hardGameBoard.addEventListener('click', function(event){
	makeMovesHard(event)
	currentGame.checkForWinConditionsHard();
	displayMoves();
	displayWinsHard();
	setTimeout(displayGameMode, 2000);
});

changeGameBtn.addEventListener('click', function(){
	currentGame.resetGame(); //the gameType property is set to null
	displayChooseDifficulty(); //the original page is displayed if the gameType is null
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

function displayWinsEasy() {
	displayPlayerInfo(); //this is here to update the win count
	var p1move = currentGame.playerOne.move;
	var p2move = currentGame.playerTwo.move;
	var easyMovesArr = currentGame.choicesEasy;

	if (currentGame.playerOne.move === currentGame.playerTwo.move) {
		subTitle.innerText = "It's a tie!!";
	} else if (easyMovesArr[p1move].name === easyMovesArr[p2move].losesTo) {
		subTitle.innerText = "Human wins this round!";
	} else if (easyMovesArr[p2move].name === easyMovesArr[p1move].losesTo) {
		subTitle.innerText = "Computer wins this round!";
	} 
}

function displayWinsHard() { //can I use .checkForWinConditionsHard to do this? what if I add return values and change the subtitles based on that?
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
	} 
}

function displayPlayerInfo() {
	humanWins.innerText = `wins: ${currentGame.playerOne.wins}`;
	computerWins.innerText = `wins: ${currentGame.playerTwo.wins}`;
	playerOneToken.innerText = currentGame.playerOne.token;
	playerOneName.innerText = currentGame.playerOne.name;
	playerTwoToken.innerText = currentGame.playerTwo.token;
	playerTwoName.innerText = currentGame.playerTwo.name;
}

function displayChooseDifficulty() {
	if (!currentGame.gameType) {
		subTitle.innerText = "Choose Your Difficulty Level!"
		hide(easyGameBoard);
		hide(hardGameBoard);
		hide(movesDisplay);
		show(chooseGameView);
		displayPlayerInfo();
	}
}


function makeMovesEasy(event) {
	currentGame.playerTwo.takeTurn('easy'); //computer takes an easy mode move, i.e. its move property is set with a random number btwn 0-2
	if(event.target.id === 'rock') { //sets the move property for playerone depending on which emoji they click on
		currentGame.playerOne.takeTurn('easy', 0);
	} else if (event.target.id === 'paper') {
		currentGame.playerOne.takeTurn('easy', 1);
	} else if (event.target.id === 'scissors') {
		currentGame.playerOne.takeTurn('easy', 2);
	}
}

function makeMovesHard(event){ //same as above but for hard mode
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