import createElement from "../../../../../helpers/createElement";
import { handleAvatarClick } from "./handlers";

const getAvatarData = () => {
  const user = JSON.parse(localStorage.getItem('info')) || {};
  console.log(user)
  return user.avatar ? `avatar__image_${user.avatar}` : `avatar__image_default`;
}


const avatarImg = {
  tag: 'div',
  text: '',
  classes: ['avatar__image', getAvatarData()],
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

export const updateAvatar = () => {
  const user = JSON.parse(localStorage.getItem('info'));
  const avatarImage = document.querySelector('.avatar__image');
  if (!avatarImage) return;
  avatarImage.className = 'avatar__image';
  avatarImage.classList.add(`avatar__image_${user.avatar}`);
}

const avatar = () => {
  const avatarElement = createElement(avatarData);
  updateAvatar()
  return avatarElement;
}


export default avatar;