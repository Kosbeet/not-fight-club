import createElement from "../../../../helpers/createElement";
import { handleControlsButton } from "./handlers";


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
        text: '',
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
            tag: 'div',
            text: '',
            classes: [`${blockClass}__health-fill`],
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
    classes: ['controls__input-box'],
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
        classes: ['controls__inputs'],
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
            classes: ['controls__button'],
            attr: {},
            children: [],
            handlers: {
              click: handleControlsButton
            }
          }
        ],
        handlers: {}
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

const battle = () => {
  const battleElement = createElement(battleData);
  return battleElement;
}

export default battle;