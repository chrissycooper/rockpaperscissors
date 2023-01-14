var currentGame = new Game();

//connect data model to DOM
    //create variables
    
    //then choosing a move
        //set timeout will come in here
				//next thing that needs to happen is that each choice is displayed side by side, and the subtitle needs to say who won

				//the points weren't working
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
	displayWinsEasy();

	setTimeout(displayGameMode, 2000)
})

hardGameBoard.addEventListener('click', function(event){
	makeMovesHard(event)
	currentGame.checkForWinConditionsHard();
	displayMoves();
	displayWinsHard();
	setTimeout(displayGameMode, 2000);
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
		hide(movesDisplay);
	} else if (currentGame.gameType === 'hard') {
		show(hardGameBoard);
		hide(chooseGameView);
		hide(movesDisplay);
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

function displayWinsEasy() {
	humanWins.innerText = `wins: ${currentGame.playerOne.wins}`;
	computerWins.innerText = `wins: ${currentGame.playerTwo.wins}`;
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
function displayWinsHard() {
	humanWins.innerText = `wins: ${currentGame.playerOne.wins}`;
	computerWins.innerText = `wins: ${currentGame.playerTwo.wins}`;
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