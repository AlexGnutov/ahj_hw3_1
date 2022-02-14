import Game from './game/game';

window.onload = () => {
  // Create field object
  const game = new Game(5);
  game.gameInit();
  game.gameStart();
};
