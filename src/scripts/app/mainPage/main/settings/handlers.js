import createElement from "../../../../helpers/createElement";
import { isNameValid } from "../../../startPage/handlers";

const addErrorMessage = (input, message) => {
  input.parentNode.classList.add('error');
  input.parentNode.nextElementSibling.textContent = message;
}

const removeErrorMessage = (input) => {
  input.parentNode.classList.remove('error');
  input.parentNode.nextElementSibling.textContent = '';
}


const handleEditInput = (event) => {
  const input = event.target;
  if (!isNameValid(input.value)) {
      addErrorMessage(input, 'Name must be between 3 and 15 letters, spaces are allowed.')
    } else {
      removeErrorMessage(input)
    }
}

const createInput = () => {
  const input = createElement({
      tag: 'input',
      text: '',
      classes: ['settings__input'],
      attr: {
        type: 'text',
        id: 'settings-input',
        maxlength: '15'
      },
      children: [],
      handlers: {
        input: handleEditInput
      }
    })
  return input; 
}
const createCurrentName = (value) => {
  const currentName = createElement({
    tag: 'span',
    text: value,
    classes: ['settings__current-name'],
    attr: {},
    children: [],
    handlers: {}
  })
  return currentName
}

const handleSaveButton = (event) => {
  event.preventDefault();
  const input = event.target.previousElementSibling;
  if (isNameValid(input.value)) {
    const changeBox = document.querySelector('.settings__change-name');
    const currentName = createCurrentName(input.value);
    const editButton = createButton('Edit');
    changeBox.replaceChild(currentName, input);
    changeBox.replaceChild(editButton, event.target);
    const user = JSON.parse(localStorage.getItem('info'));
    user.name = input.value;
    localStorage.setItem('info', JSON.stringify(user));
  } else {
    addErrorMessage(input, 'Name must be between 3 and 15 letters, spaces are allowed.')
  }
}

const createButton = (value) => {
  const btn = createElement({
    tag: 'button',
      text: value,
      classes: ['settings__button', `settings__button_${value.toLowerCase()}`],
      attr: {},
      children: [],
      handlers: {
        click: handlers[value.toLowerCase()]
      }
  })
  return btn;
}


export const handleEditButton = (event) => {
  const changeBox = document.querySelector('.settings__change-name');
  const currentName = document.querySelector('.settings__current-name');
  const input = createInput();
  const saveButton = createButton('Save');
  input.value = currentName.textContent;
  changeBox.replaceChild(input, currentName)
  changeBox.replaceChild(saveButton, event.target) 
}

const handlers = {
  'edit': handleEditButton,
  'save': handleSaveButton,
};