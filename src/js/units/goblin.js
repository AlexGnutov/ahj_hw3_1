import { create } from '../utils/utils';

export default class Goblin {
  constructor(name, className, x, y) {
    this.name = name;
    this.container = create('div', className);
    this.x = x;
    this.y = y;
    this.position = null;
  }

  placeUnit(location) {
    this.position = location;
    location.append(this.container);
  }
}
