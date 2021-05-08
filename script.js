const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    this.nextLevel();
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

  nextLevel() {
    this.lightSequence();
  }

  transformNumberToColor(number) {
    switch (number) {
      case 0:
        return "blue";
      case 1:
        return "purple";
      case 2:
        return "orange";
      case 3:
        return "green";
    }
  }
  lightSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.transformNumberToColor(this.sequence[i]);
      this.light(color);
    }
  }

  light(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => this.turnOffLight(color), 350);
  }

  turnOffLight(color) {
    this.colores[color].classList.remove("light");
  }
}

function startGame() {
  const game = new Game();
}
