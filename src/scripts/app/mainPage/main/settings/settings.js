import createElement from "../../../../helpers/createElement";
import { handleEditButton } from "./handlers";

const settingsData = {
  tag: 'section',
  text: '',
  classes: ['settings'],
  attr: {},
  children: [
    {
      tag: 'div',
      text: '',
      classes: ['settings__container'],
      attr: {},
      children: [
        {
          tag: 'h2',
          text: 'Settings',
          classes: ['settings__title'],
          attr: {},
          children: [],
          handlers: {}
        },
        {
          tag: 'div',
          text: '',
          classes: ['settings__change-name'],
          attr: {},
          children: [
            {
              tag: 'span',
              text: 'Current name: ',
              classes: ['settings__text'],
              attr: {},
              children: [],
              handlers: {}
            },

            {
              tag: 'span',
              text: 'name',
              classes: ['settings__current-name'],
              attr: {},
              children: [],
              handlers: {}
            },
            {
              tag: 'button',
              text: 'Edit',
              classes: ['settings__button', 'settings__button_edit'],
              attr: {},
              children: [],
              handlers: {
                click: handleEditButton
              }
            }
          ],
          handlers: {}
        },
        {
          tag: 'span',
          text: '',
          classes: ['settings__error'],
          attr: {},
          children: [],
          handlers: {}
        }

      ],
      handlers: {}
    }
  ],
  handlers: {}
}
const updateSettings = () => {
  const user = JSON.parse(localStorage.getItem('info')).name;
  const currentName = document.querySelector('.settings__current-name');

  currentName.textContent = user;
}


const settigns = () => {
  const settingsElement = createElement(settingsData);
  const main = document.querySelector('.main');
  main.append(settingsElement);
  updateSettings();
  return settingsElement;
}

export default settigns;