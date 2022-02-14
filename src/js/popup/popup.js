import { create } from '../utils/utils';

export default class Popup {
  constructor(master) {
    this.master = master;
    this.container = create('div', 'popup');
    this.container.classList.add('hidden');

    this.message = create('div', 'popup-message');
    this.button = create('button', 'popup-button', 'Close');
    this.button.addEventListener('click', () => {
      this.close();
    });

    this.container.append(this.message, this.button);
  }

  html() {
    return this.container;
  }

  show(message) {
    this.message.innerText = message;
    this.container.classList.remove('hidden');
  }

  close() {
    this.message.innerText = '';
    this.container.classList.add('hidden');
    this.master.gameRestart();
  }
}
