import createElement from "../../../helpers/createElement";

import lobby from "./lobby/lobby";

const mainData = {
  tag: 'main',
  text: '',
  classes: ['main'],
  attr: {},
  children: [],
  handlers: {}
}


const main = () => {
  const mainElement = createElement(mainData);
  mainElement.append(lobby())
  return mainElement;
}

export default main;