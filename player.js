class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.move = null;
  }

  takeTurn(choice) {
    if (this.name === "Computer") {
      var num = Math.floor(Math.random() * 3);
      this.move = num;
    } else {
      this.move = choice;
    }
  }
}