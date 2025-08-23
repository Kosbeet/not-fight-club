import createElement from "../../../../../helpers/createElement";
import { handleClickExitButton } from "./handlers";

const modalContainer = {
  tag: 'div',
  text: '',
  classes: ['result-modal__container'],
  attr: {},
  children: [
    {
      tag: 'span',
      text: '',
      classes: ['result-modal__result'],
      attr: {},
      children: [],
      handlers: {}
    },
    {
      tag: 'button',
      text: 'exit',
      classes: ['result-modal__button'],
      attr: {},
      children: [],
      handlers: {
        click: handleClickExitButton
      }
    }
  ],
  handlers: {}
}

const modalData = {
  tag: 'div',
  text: '',
  classes: ['result-modal'],
  attr: {},
  children: [modalContainer],
  handlers: {}
}

const resultModal = () => {
  const modal = createElement(modalData);
  document.body.append(modal);
  return modal;
}

export default resultModal;