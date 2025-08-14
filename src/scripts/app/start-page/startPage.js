import createElement from './../../helpers/createElement';
import { handleInput, handleClickButton} from './handlers';


const labelInput = {
  tag: 'label',
  text: 'Enter name:',
  classes: ['start-page__label'],
  attr: {
    for: 'name',
  },
  children: []
}

const inputText = {
  tag: 'input',
  text: '',
  classes: ['start-page__input'],
  attr: {
    id: 'name',
    type: 'text',
    name: 'name',
    maxlength: '15'
  },
  children: [],
  handlers: {
    input: handleInput
  }
}

const errorMsg = {
  tag: 'span',
  text: '',
  classes: ['start-page__error'],
  attr: {},
  children: [],
}

const buttonSubmit = {
  tag: 'button',
  text: 'Registration',
  classes: ['start-page__button'],
  attr: {
    type: 'button'
  },
  children: [],
  handlers: {
    click: handleClickButton
  }
}

const inputGroupData = {
  tag: 'div',
  text: '',
  classes: ['start-page__input-group'],
  attr: {},
  children: [labelInput, inputText, errorMsg]
}

const pageData = {
  tag: 'form',
  text: '',
  classes: ['start-page'],
  attr: {},
  children: [inputGroupData, buttonSubmit]
}


const startPage = () => {
  const page = createElement(pageData)
  return page;
}

export default startPage;