class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.move = null;
  }

  takeTurn(choice) {        //maybe add an if/else for game mode? this could be in main if it's easier
    if (this.name === "Computer") {
      var num = Math.floor(Math.random() * 5);
      this.move = num;
    } else {
      this.move = choice;
    }
  }
}