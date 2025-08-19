import createElement from "../../helpers/createElement"
import { handleModalButton } from "./handlers"


export const images = {
  0: 'man',
  1: 'woman',
  2: 'dwarf',
  3: 'elf'
}

const addInputGroup = () => {
  return Object.entries(images).map(([key, value]) => ({
    tag: 'label',
    text: '',
    classes: ['modal__label', `modal__label_${value}`],
    attr: {
      for: value
    },
    children: [
      {
        tag: 'input',
        text: '',
        classes: ['modal__input'],
        attr: {
          type: 'radio',
          id: value,
          name: 'avatar',
          value: key
        },
        children: [],
        handlers: {}
      }
    ],
    handlers: {}
  }))
}

const cardLine = {
  tag: 'div',
  text: '',
  classes: ['modal__card-line'],
  attr: {},
  children: addInputGroup(),
  handlers: {}
}

const confirmButton = {
  tag: 'button',
  text: 'Select',
  classes: ['modal__button'],
  attr: {},
  children: [],
  handlers: {
    click: handleModalButton
  }
}

const modalContainer = {
  tag: 'div',
  text: '',
  classes: ['modal__container'],
  attr: {},
  children: [cardLine, confirmButton],
  handlers: {}
}

const modalData = {
  tag: 'div',
  text: '',
  classes: ['modal'],
  attr: {},
  children: [modalContainer],
  handlers: {}
}

const modal = () => {
  const modalElement = createElement(modalData);
  return modalElement;
}


export default modal;