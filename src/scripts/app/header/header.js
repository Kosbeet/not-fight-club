import createElement from "../../helpers/createElement"

const homeLink = {
  tag: 'a',
  text: '',
  classes: ['header__link'],
  attr: {
    href: '#'
  },
  children: [],
  handlers: {}
}

const headerContainer = {
  tag: 'div',
  text: '',
  classes: ['header__container'],
  attr: {},
  children: [homeLink],
  handlers: {}
}

const headerData = {
  tag: 'header',
  text: '',
  classes: ['header'],
  attr: {},
  children: [headerContainer],
  handlers: {}
}


const header = () => {
  const headerElement = createElement(headerData);
  return headerElement
}

export default header;