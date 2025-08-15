import createElement from "../../../../helpers/createElement";
import avatar from './avatar/avatar';
import startGame from './startGame/startGame'

const lobbyContainer = {
  tag: 'div',
  text: '',
  classes: ['lobby__container'],
  attr: {},
  children: [avatar(), startGame()],
  handlers: {}
}

const lobbyTitle = {
  tag: 'h2',
  text: 'Lobby',
  classes: ['lobby__title'],
  attr: {},
  children: [],
  handlers: {}
}

const lobbyData = {
  tag: 'section',
  text: '',
  classes: ['lobby'],
  attr: {},
  children: [lobbyContainer, lobbyTitle],
  handlers: {}
}

const lobby = () => {
  const lobbySection = createElement(lobbyData);
  return lobbySection;
}


export default lobby;