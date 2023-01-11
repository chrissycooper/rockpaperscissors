class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  takeTurn(choice) {
    if (this.name === "computer") {
      var num = Math.floor(Math.random() * 3);
      return num;
    } else {
      return choice;
    }
  }
}