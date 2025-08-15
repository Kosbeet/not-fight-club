import createElement from "../../../../helpers/createElement";

const lobbyContainer = {
  tag: 'div',
  text: '',
  classes: ['lobby__container'],
  attr: {},
  children: [],
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