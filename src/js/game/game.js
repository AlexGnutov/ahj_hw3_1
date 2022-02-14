import Goblin from '../units/goblin';
import Field from '../field/field';
import { randomCoordsProvider } from '../utils/utils';
import ScoreBar from '../scorebar/score-bar';
import Popup from '../popup/popup';

export default class Game {
  constructor(period) {
    this.period = period;
    this.unit = new Goblin('Boris', 'goblin');
    this.gameField = new Field(4, 4);
    this.scoreBar = new ScoreBar();
    this.coordsProvider = randomCoordsProvider(4, 4);
    this.popup = new Popup(this);
  }

  gameInit() {
    const container = document.getElementById('game-container');
    // Init and add gameField to DOM
    this.gameField.fill();
    container.append(this.gameField.html());
    // Add score bar
    this.scoreBar.fill();
    container.append(this.scoreBar.html());
    // Add goblin to start position
    const position = this.gameField.getLocationElement(0, 0);
    this.unit.placeUnit(position);
    // Add hit handler to the field
    this.gameField.container.addEventListener('click', (event) => {
      this.hitHandler(event);
    });
    // Add popup window
    document.body.append(this.popup.html());
  }

  // Restarts game after popup is closed
  gameRestart() {
    this.scoreBar.inTarget = 0;
    this.scoreBar.appeared = 0;
    this.scoreBar.fill();
    this.gameStart();
  }

  // Moves unit in a new random position
  moveUnit() {
    const newPos = this.gameField.getLocationElement(...this.coordsProvider());
    this.unit.placeUnit(newPos);
  }

  // Main game cycle
  gameStart() {
    const interval = setInterval(() => {
      this.checkScore(interval, () => {
        this.moveUnit();
      });
    }, 1000);
  }

  // Handle hits (clicks) and check in it was made on target or not
  hitHandler(event) {
    if (event.target.className === 'goblin') {
      this.scoreBar.inTarget += 1;
      this.scoreBar.appeared = 0;
      this.scoreBar.fill();
      this.unit.container.remove();
    }
  }

  // Checks, if game in win or lost conditions
  // stops cycle and shows popup, when it is
  checkScore(interval, cb) {
    if (this.scoreBar.appeared >= 5) {
      this.scoreBar.fill();
      clearInterval(interval);
      setTimeout(() => {
        this.popup.show('You lost!');
      }, 100);
      return;
    }
    if (this.scoreBar.inTarget === 5) {
      this.scoreBar.fill();
      clearInterval(interval);
      setTimeout(() => {
        this.popup.show('You Won!');
      }, 100);
      return;
    }
    this.scoreBar.appeared += 1;
    this.scoreBar.fill();
    cb();
  }
}
