import { create } from '../utils/utils';

export default class ScoreBar {
  constructor() {
    this.container = create('div', 'score-bar');
    this.inTarget = 0;
    this.appeared = 0;
  }

  fill() {
    this.container.innerHTML = `<p>In Target: ${this.inTarget} &#x2620 Appeared: ${this.appeared} </p>`;
  }

  html() {
    return this.container;
  }
}
