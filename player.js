class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.move = null;
  }

  takeTurn(mode, choice) {
    if (this.name === "Computer" && mode === 'easy') {
      var num = Math.floor(Math.random() * 3);
      this.move = num;
    } else if (this.name === "Computer" && mode === 'hard') {
      var num = Math.floor(Math.random() * 5);
      this.move = num;
    } else {
      this.move = choice;
    }
  }
}
