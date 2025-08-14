import createElement from "../../../../helpers/createElement"

 
const createListItem = (extClass) => {
  return {
    tag: 'li',
    text: '',
    classes: ['navigation__item', extClass],
    attr: {},
    children: [],
    handlers: {}
  }
}

const navList = {
  tag: 'ul',
  text: '',
  classes: ['navigation__list'],
  attr: {},
  children: [
    createListItem('navigation__item_info'),
    createListItem('navigation__item_settings')
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