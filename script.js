const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");
const LAST_LEVEL = 10;

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    setTimeout(() => {
      this.nextLevel();
    }, 500);
  }

  initialize() {
    this.nextLevel = this.nextLevel.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
    this.toggleBtnStart();
    this.level = 1;
    this.colores = {
      blue,
      purple,
      orange,
      green,
    };
  }

  toggleBtnStart() {
    if (btnStart.classList.contains("hide")) {
      btnStart.classList.remove("hide");
    } else {
      btnStart.classList.add("hide");
    }
  }

  generateSequence() {
    this.sequence = new Array(LAST_LEVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4), 0, LAST_LEVEL);
  }

  nextLevel() {
    this.subLevel = 0;
    this.lightSequence();
    this.addClickEvents();
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

  transformColorToNumber(color) {
    switch (color) {
      case "blue":
        return 0;
      case "purple":
        return 1;
      case "orange":
        return 2;
      case "green":
        return 3;
    }
  }

  lightSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.transformNumberToColor(this.sequence[i]);
      setTimeout(() => this.light(color), i * 1000);
    }
  }

  light(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => this.turnOffLight(color), 350);
  }

  turnOffLight(color) {
    this.colores[color].classList.remove("light");
  }

  addClickEvents() {
    this.colores.blue.addEventListener("click", this.chooseColor);
    this.colores.green.addEventListener("click", this.chooseColor);
    this.colores.orange.addEventListener("click", this.chooseColor);
    this.colores.purple.addEventListener("click", this.chooseColor);
  }

  removeClickEvents() {
    this.colores.blue.removeEventListener("click", this.chooseColor);
    this.colores.green.removeEventListener("click", this.chooseColor);
    this.colores.orange.removeEventListener("click", this.chooseColor);
    this.colores.purple.removeEventListener("click", this.chooseColor);
  }

  chooseColor(ev) {
    const colorName = ev.target.dataset.color;
    const colorNumber = this.transformColorToNumber(colorName);
    this.light(colorName);
    if (colorNumber === this.sequence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        this.removeClickEvents();
        if (this.level === LAST_LEVEL + 1) {
          this.wonTheGame();
        } else {
          setTimeout(this.nextLevel, 1500);
        }
      }
    } else {
      this.loseTheGame();
    }
  }

  wonTheGame() {
    swal("Good job!", "You won the game!", "success").then(() => {
      this.initialize();
    });
  }

  loseTheGame() {
    swal("Try again", "Sorry you lose game :(", "error").then(() => {
      this.removeClickEvents();
      this.initialize();
    });
  }
}

function startGame() {
  const game = new Game();
}
