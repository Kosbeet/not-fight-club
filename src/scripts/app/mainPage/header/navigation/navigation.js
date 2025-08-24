import createElement from "../../../../helpers/createElement"
import { handleClickInfo, handleClickSettings } from "./handlers"
 
const createListItem = (extClass, handlers = {}) => {
  return {
    tag: 'li',
    text: '',
    classes: ['navigation__item', extClass],
    attr: {},
    children: [],
    handlers
  }
}

const navList = {
  tag: 'ul',
  text: '',
  classes: ['navigation__list'],
  attr: {},
  children: [
    createListItem('navigation__item_info', {click: handleClickInfo}),
    createListItem('navigation__item_settings', {click: handleClickSettings})
  ],
  handlers: {}
}

const navData = {
  tag: 'nav',
  text: '',
  classes: ['navigation'],
  attr: {},
  children: [navList],
  handlers: {}
}

const navigation = () => {
  const navMenu = createElement(navData);
  return navMenu;
}


export default navigation;