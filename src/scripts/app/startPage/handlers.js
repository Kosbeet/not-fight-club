import header from "../mainPage/header/header";
import main from "../mainPage/main/main";

export const handleInput = (event) => {
  const input = event.target;
  if (!isNameValid(input.value)) {
    addErrorMessage(input, 'Name must be between 3 and 15 letters, spaces are allowed.')
  } else {
    removeErrorMessage(input)
  }
}

const isNameValid = (name) => {
  const reg = /^[A-Za-z]{3,15}$/;
  return reg.test(name)
}

const addErrorMessage = (input, message) => {
  input.parentNode.classList.add('error');
  input.nextElementSibling.textContent = message;
}

const removeErrorMessage = (input) => {
  input.parentNode.classList.remove('error');
  input.nextElementSibling.textContent = '';
}

export const handleClickButton = (event) => {
  event.preventDefault();
  const input = event.target.previousElementSibling.children[1];
  if (isNameValid(input.value)) {
    localStorage.setItem('registry', 'true');
    setUserInfo(input.value);
    document.body.innerHTML = '';
    document.body.append(header(), main())
  } else {
    addErrorMessage(input, 'Name must be between 3 and 15 letters, spaces are allowed.')
  }
  
}

const setUserInfo = (value) => {

  const user = {
    name: value,
    games: 0,
    wins: 0,
    looses: 0,
    avatar: 'default',
  }

  localStorage.setItem('info', JSON.stringify(user));
}
