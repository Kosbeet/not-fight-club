import { images } from "./modal";

export const handleModalButton = (event) => {
  const user = JSON.parse(localStorage.getItem('info')) || null;
  console.log(user)
  if (user) {
    const inputValue = document.querySelector('.modal__input[name="avatar"]:checked').value;
    setNewAvatar(inputValue, user)
    console.log(inputValue)
  }
  
  event.target.closest('.modal').remove()
}

const setNewAvatar = (index, user) => {
  const copyImages = {...images};
  const avatarElement = document.querySelector('.avatar__image');
  avatarElement.classList.replace(`avatar__image_${user.avatar}`, `avatar__image_${copyImages[index]}`)
  user.avatar = copyImages[index];
  localStorage.setItem('info', JSON.stringify(user));
}