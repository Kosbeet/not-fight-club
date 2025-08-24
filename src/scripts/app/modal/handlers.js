import { updateAvatar } from "../mainPage/main/lobby/avatar/avatar";
import { images } from "./modal";

export const handleModalButton = (event) => {
  const user = JSON.parse(localStorage.getItem('info'));
  console.log(user)
  if (user) {
    const input = document.querySelector('.modal__input[name="avatar"]:checked');
    if (!input) return;
    const inputValue = input.value
    setNewAvatar(inputValue, user)
  }
  
  event.target.closest('.modal').remove()
}

const setNewAvatar = (index, user) => {
  const copyImages = {...images};
  const avatarElement = document.querySelector('.avatar__image');
  avatarElement.classList.replace(`avatar__image_${user.avatar}`, `avatar__image_${copyImages[index]}`)
  user.avatar = copyImages[index];
  localStorage.setItem('info', JSON.stringify(user));
  updateAvatar()
}