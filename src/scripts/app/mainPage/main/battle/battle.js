import createElement from "../../../../helpers/createElement";
import { handleControlsButton, handleChangeCheck } from "./handlers";


const inputLabels = ['Head', 'Neck', 'Body', 'Arms', 'Legs'];

//avatars
const setEntityData = (blockClass) => {
  return {
    tag: 'div',
    text: '',
    classes: [`${blockClass}`],
    attr: {},
    children: [
      {
        tag: 'span',
        text: 'name',
        classes: [`${blockClass}__name`],
        attr: {},
        children: [],
        handlers: {}
      },
      {
        tag: 'div',
        text: '',
        classes: [`${blockClass}__avatar`],
        attr: {},
        children: [],
        handlers: {}
      },
      {
        tag: 'div',
        text: '',
        classes: [`${blockClass}__health`],
        attr: {},
        children: [
          {
            tag: 'progress',
            text: '',
            classes: [`${blockClass}__progress`],
            attr: {
              max: '150',
              value: '150'
            },
            children: [],
            handlers: {}
          },
          {
            tag: 'span',
            text: '150/150',
            classes: [`${blockClass}__value`],
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
}

const createCharachter = () => setEntityData('char');
const createEnemy = () => setEntityData('enemy');


const createInputs = (action) => {
  return inputLabels.map((part) => ({
    tag: 'div',
    text: '',
    classes: ['controls__input-box', `controls__input-box_${action}`],
    attr: {},
    children: [
      {
        tag: 'label',
        text: part,
        classes: ['controls__label', `controls__label_${action}`],
        attr: {
          for: part.toLowerCase(),
        },
        children: [],
        handlers: {}
      },
      {
        tag: 'input',
        text: part,
        classes: ['controls__input', `controls__input_${action}`],
        attr: {
          type: 'checkbox',
          id: part.toLowerCase(),
          value: part.toLowerCase(),
          name: action
        },
        children: [],
        handlers: {}
      }
    ],
    handlers: {}
  }))
}

const createGroup = (action) => {
  return {
    tag: 'div',
    text: '',
    classes: [`controls__${action}-group`],
    attr: {},
    children: [
      {
        tag: 'span',
        text: `${action}`,
        classes: ['controls__group-title'],
        attr: {},
        children: [],
        handlers: {}
      },
      {
        tag: 'div',
        text: ``,
        classes: ['controls__inputs', `controls__inputs_${action}`],
        attr: {},
        children: createInputs(action),
        handlers: {}
      }
    ],
    handlers: {}
  }
}

const createAttack = () => createGroup('attack');
const createDefence = () => createGroup('defence');

const createControls = () => {
  return {
    tag: 'div',
    text: '',
    classes: ['controls'],
    attr: {},
    children: [
      {
        tag: 'span',
        text: 'Please pick 1 attack zone and 2 defence zones',
        classes: ['controls__desc'],
        attr: {},
        children: [],
        handlers: {}
      },
      {
        tag: 'div',
        text: '',
        classes: ['controls__group'],
        attr: {},
        children: [
          createAttack(),
          {
            tag: 'div',
            text: '',
            classes: ['separator'],
            attr: {},
            children: [],
            handlers: {}
          }, 
          createDefence(),
          {
            tag: 'button',
            text: 'Attack',
            classes: ['controls__button', 'disabled'],
            attr: {},
            children: [],
            handlers: {
              click: handleControlsButton
            }
          }
        ],
        handlers: {
          change: handleChangeCheck
        }
      }
    ],
    handlers: {}
  }
}


const battleContainer = {
  tag: 'div',
  text: '',
  classes: ['battle__container'],
  attr: {},
  children: [createCharachter(), createControls(), createEnemy()],
  handlers: {}
}

const battleTitle = {
  tag: 'h2',
  text: 'battle',
  classes: ['battle__title'],
  attr: {},
  children: [],
  handlers: {}
}

const battleData = {
  tag: 'section',
  text: '',
  classes: ['battle'],
  attr: {},
  children: [battleTitle, battleContainer],
  handlers: {}
}

const updateBattle = () => {
  const user = JSON.parse(localStorage.getItem('info')) || {};

  const charAvatar = document.querySelector('.char__avatar');
  const enemyAvatar = document.querySelector('.enemy__avatar');
  console.log(charAvatar)
  const charName = document.querySelector('.char__name');
  const enemyName = document.querySelector('.enemy__name');
  console.log(charName)

  charAvatar.classList.add(`char__avatar_${user.avatar}`);
  charName.textContent = user.name;
}


const battle = () => {
  const battleElement = createElement(battleData);
  const main = document.querySelector('.main');
  main.append(battleElement);
  updateBattle();
  return battleElement;
}

export default battle;