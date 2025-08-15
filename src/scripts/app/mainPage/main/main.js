import createElement from "../../../helpers/createElement";

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

  return mainElement;
}

export default main;