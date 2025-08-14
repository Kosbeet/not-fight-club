import createElement from "../../../helpers/createElement"
import navigation from "./navigation/navigation"

const homeLink = {
  tag: 'a',
  text: '',
  classes: ['header__home-link'],
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
  children: [homeLink, navigation()],
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