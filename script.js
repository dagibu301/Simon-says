const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
  }

  initialize() {
    btnStart.classList.add("hide");
    this.level = 1;
    this.colores = {
      blue,
      purple,
      orange,
      green,
    };
  }

  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4), 0, 10);
    console.log(this.sequence);
  }
}

function startGame() {
  const game = new Game();
}
