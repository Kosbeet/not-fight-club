import createElement from "../../../../../helpers/createElement";
import { handleAvatarClick } from "./handlers";

const avatarImg = {
  tag: 'div',
  text: '',
  classes: ['avatar__image', 'avatar__image_default'],
  attr: {},
  children: [],
  handlers: {
    click: handleAvatarClick
  }
}

const avatarData = {
  tag: 'div',
  text: '',
  classes: ['avatar'],
  attr: {},
  children: [avatarImg],
  handlers: {}
}

const avatar = () => {
  const avatarElement = createElement(avatarData);
  return avatarElement;
}


export default avatar;