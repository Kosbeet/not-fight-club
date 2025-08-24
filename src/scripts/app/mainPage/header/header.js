import createElement from "../../../helpers/createElement";
import navigation from "./navigation/navigation";
import { handleClickHome } from "./handlers";

const homeLink = {
  tag: 'a',
  text: '',
  classes: ['header__home-link'],
  attr: {},
  children: [],
  handlers: {
    click: handleClickHome
  }
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