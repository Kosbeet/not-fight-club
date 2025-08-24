import createElement from "../../../../../helpers/createElement";
import { handleClickStartButton } from "./handlers";


const startBtn = {
  tag: 'button',
  text: 'Start',
  classes: ['start-game__button'],
  attr: {
    type: 'button'
  },
  children: [],
  handlers: {
    click: handleClickStartButton
  }
}


const startGameData = {
  tag: 'div',
  text: '',
  classes: ['start-game'],
  attr: {},
  children: [startBtn],
  handlers: {}
}


const startGame = () => {
  const startGameElement = createElement(startGameData);
  return startGameElement;
}


export default startGame;