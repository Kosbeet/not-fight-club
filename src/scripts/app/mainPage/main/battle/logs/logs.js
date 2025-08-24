import createElement from "../../../../../helpers/createElement";


const logsData = {
  tag: 'div',
  text: '',
  classes: ['logs'],
  attr: {},
  children: [],
  handlers: {}
}

const logs = () => {
  const logField = createElement(logsData);
  return logField;
}


export default logs;