var currentGame = new Game();

//onclick of easy mode or hard mode button, then game.gameType = easy or hard depending on what was clicked
        //if gameType = easy, then use the easy choices
        //if gameType = hard, then use the hard choices
            //this is somewhat in the takeTurn() fcn
        //also the DOM will need to display the possible choices for the user depending on the game mode (which will update in the class on button click)

//connect data model to DOM
    //create variables
    
    //then choosing a move
				//make selectors? -
        //when emojis are clikced on the human Player's move is changed based on the click
        //the computer will also have to takeTurn()
        //set timeout will come in here

//
var chooseGameView = document.getElementById("chooseView");
var easyGameBoard = document.querySelector(".game-board-easy");
var hardGameBoard = document.querySelector(".game-board-hard");

chooseGameView.addEventListener('click', function(event) {
  setGameMode(event);
	displayGameMode();
})

easyGameBoard.addEventListener('click', function(event) {
	makeMoveEasy(event);
})


function setGameMode(event) {
	if(event.target.id === 'easyMode') {
		currentGame.gameType = 'easy';
	} else if (event.target.id === 'hardMode') {
		currentGame.gameType = 'hard';
	}
}

function displayGameMode() {
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

function makeMoveEasy(event) {
		currentGame.playerTwo.takeTurn('easy');
		if(event.target.id === 'rock') {
			currentGame.playerOne.takeTurn('easy', 0);
		} else if (event.target.id === 'paper') {
			currentGame.playerOne.takeTurn('easy', 1);
		} else if (event.target.id === 'scissors') {
			currentGame.playerOne.takeTurn('easy', 2);
		}
		console.log(currentGame.playerOne.move);
}

function makeMoveHard(){

}

function hide(element){
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}