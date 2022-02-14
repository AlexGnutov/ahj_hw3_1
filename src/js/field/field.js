import { create } from '../utils/utils';

// Draws a field and let to access it

export default class Field {
  constructor(x, y) {
    this.container = create('div', 'game-field');
    this.x = x;
    this.y = y;
    this.cells = [];
  }

  html() {
    return this.container;
  }

  fill() {
    for (let i = 0; i < this.y; i += 1) {
      const newRow = create('div', 'game-row');
      this.cells.push([]);
      for (let k = 0; k < this.x; k += 1) {
        const newCell = create('div', 'game-cell');
        newCell.dataset.x = k.toString(10);
        newCell.dataset.y = i.toString(10);
        this.cells[i].push(newCell);
        newRow.append(newCell);
      }
      this.container.append(newRow);
    }
  }

  getLocationElement(x, y) {
    try {
      return this.cells[y][x];
    } catch (e) {
      // console.log('Error: wrong position requested');
      return 0;
    }
  }
}
