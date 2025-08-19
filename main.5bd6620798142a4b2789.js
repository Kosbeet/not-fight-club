/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/scripts/helpers/createElement.js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _createElement = function createElement(options) {
  var _options$tag = options.tag,
    tag = _options$tag === void 0 ? 'div' : _options$tag,
    _options$text = options.text,
    text = _options$text === void 0 ? '' : _options$text,
    _options$classes = options.classes,
    classes = _options$classes === void 0 ? [] : _options$classes,
    _options$attr = options.attr,
    attr = _options$attr === void 0 ? {} : _options$attr,
    _options$children = options.children,
    children = _options$children === void 0 ? [] : _options$children,
    _options$handlers = options.handlers,
    handlers = _options$handlers === void 0 ? {} : _options$handlers;
  var element = document.createElement(tag);
  if (text) {
    element.textContent = text;
  }
  if (classes.length) {
    var _element$classList;
    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes));
  }
  if (children.length) {
    children.forEach(function (child) {
      if (child instanceof HTMLElement) {
        element.append(child);
      } else {
        element.append(_createElement(child));
      }
    });
  }
  Object.entries(attr).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return element.setAttribute(key, value);
  });
  Object.entries(handlers).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      event = _ref4[0],
      handler = _ref4[1];
    if (typeof handler === 'function') {
      element.addEventListener(event, handler);
    } else if (Array.isArray(handler)) {
      var _handler = _slicedToArray(handler, 2),
        func = _handler[0],
        opt = _handler[1];
      element.addEventListener(event, func, opt);
    }
  });
  return element;
};
/* harmony default export */ const createElement = (_createElement);
;// ./src/scripts/app/mainPage/header/navigation/navigation.js

var createListItem = function createListItem(extClass) {
  return {
    tag: 'li',
    text: '',
    classes: ['navigation__item', extClass],
    attr: {},
    children: [],
    handlers: {}
  };
};
var navList = {
  tag: 'ul',
  text: '',
  classes: ['navigation__list'],
  attr: {},
  children: [createListItem('navigation__item_info'), createListItem('navigation__item_settings')],
  handlers: {}
};
var navData = {
  tag: 'nav',
  text: '',
  classes: ['navigation'],
  attr: {},
  children: [navList],
  handlers: {}
};
var navigation = function navigation() {
  var navMenu = createElement(navData);
  return navMenu;
};
/* harmony default export */ const navigation_navigation = (navigation);
;// ./src/scripts/app/mainPage/header/header.js


var homeLink = {
  tag: 'a',
  text: '',
  classes: ['header__home-link'],
  attr: {
    href: '#'
  },
  children: [],
  handlers: {}
};
var headerContainer = {
  tag: 'div',
  text: '',
  classes: ['header__container'],
  attr: {},
  children: [homeLink, navigation_navigation()],
  handlers: {}
};
var headerData = {
  tag: 'header',
  text: '',
  classes: ['header'],
  attr: {},
  children: [headerContainer],
  handlers: {}
};
var header = function header() {
  var headerElement = createElement(headerData);
  return headerElement;
};
/* harmony default export */ const header_header = (header);
;// ./src/scripts/app/modal/handlers.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var handleModalButton = function handleModalButton(event) {
  var user = JSON.parse(localStorage.getItem('info')) || null;
  console.log(user);
  if (user) {
    var inputValue = document.querySelector('.modal__input[name="avatar"]:checked').value;
    setNewAvatar(inputValue, user);
    console.log(inputValue);
  }
  event.target.closest('.modal').remove();
};
var setNewAvatar = function setNewAvatar(index, user) {
  var copyImages = _objectSpread({}, modal_images);
  var avatarElement = document.querySelector('.avatar__image');
  avatarElement.classList.replace("avatar__image_".concat(user.avatar), "avatar__image_".concat(copyImages[index]));
  user.avatar = copyImages[index];
  localStorage.setItem('info', JSON.stringify(user));
};
;// ./src/scripts/app/modal/modal.js
function modal_slicedToArray(r, e) { return modal_arrayWithHoles(r) || modal_iterableToArrayLimit(r, e) || modal_unsupportedIterableToArray(r, e) || modal_nonIterableRest(); }
function modal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function modal_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return modal_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? modal_arrayLikeToArray(r, a) : void 0; } }
function modal_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function modal_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function modal_arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var modal_images = {
  0: 'man',
  1: 'woman',
  2: 'dwarf',
  3: 'elf'
};
var addInputGroup = function addInputGroup() {
  return Object.entries(modal_images).map(function (_ref) {
    var _ref2 = modal_slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return {
      tag: 'label',
      text: '',
      classes: ['modal__label', "modal__label_".concat(value)],
      attr: {
        "for": value
      },
      children: [{
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
      }],
      handlers: {}
    };
  });
};
var cardLine = {
  tag: 'div',
  text: '',
  classes: ['modal__card-line'],
  attr: {},
  children: addInputGroup(),
  handlers: {}
};
var confirmButton = {
  tag: 'button',
  text: 'Select',
  classes: ['modal__button'],
  attr: {},
  children: [],
  handlers: {
    click: handleModalButton
  }
};
var modalContainer = {
  tag: 'div',
  text: '',
  classes: ['modal__container'],
  attr: {},
  children: [cardLine, confirmButton],
  handlers: {}
};
var modalData = {
  tag: 'div',
  text: '',
  classes: ['modal'],
  attr: {},
  children: [modalContainer],
  handlers: {}
};
var modal = function modal() {
  var modalElement = createElement(modalData);
  return modalElement;
};
/* harmony default export */ const modal_modal = (modal);
;// ./src/scripts/app/mainPage/main/lobby/avatar/handlers.js

var handleAvatarClick = function handleAvatarClick() {
  document.body.append(modal_modal());
  console.log('open');
};
;// ./src/scripts/app/mainPage/main/lobby/avatar/avatar.js


var avatarImg = {
  tag: 'div',
  text: '',
  classes: ['avatar__image', 'avatar__image_default'],
  attr: {},
  children: [],
  handlers: {
    click: handleAvatarClick
  }
};
var avatarData = {
  tag: 'div',
  text: '',
  classes: ['avatar'],
  attr: {},
  children: [avatarImg],
  handlers: {}
};
var avatar = function avatar() {
  var avatarElement = createElement(avatarData);
  return avatarElement;
};
/* harmony default export */ const avatar_avatar = (avatar);
;// ./src/scripts/app/mainPage/main/lobby/startGame/handlers.js
var handleClickStartButton = function handleClickStartButton() {
  console.log('start');
};
;// ./src/scripts/app/mainPage/main/lobby/startGame/startGame.js


var startBtn = {
  tag: 'button',
  text: 'Start',
  classes: ['start-game__button'],
  attr: {
    type: 'button'
  },
  children: [],
  handlers: {
    click: handleClickStartButton
  }
};
var startGameData = {
  tag: 'div',
  text: '',
  classes: ['start-game'],
  attr: {},
  children: [startBtn],
  handlers: {}
};
var startGame = function startGame() {
  var startGameElement = createElement(startGameData);
  return startGameElement;
};
/* harmony default export */ const startGame_startGame = (startGame);
;// ./src/scripts/app/mainPage/main/lobby/lobby.js



var lobbyContainer = {
  tag: 'div',
  text: '',
  classes: ['lobby__container'],
  attr: {},
  children: [avatar_avatar(), startGame_startGame()],
  handlers: {}
};
var lobbyTitle = {
  tag: 'h2',
  text: 'Lobby',
  classes: ['lobby__title'],
  attr: {},
  children: [],
  handlers: {}
};
var lobbyData = {
  tag: 'section',
  text: '',
  classes: ['lobby'],
  attr: {},
  children: [lobbyTitle, lobbyContainer],
  handlers: {}
};
var lobby = function lobby() {
  var lobbySection = createElement(lobbyData);
  return lobbySection;
};
/* harmony default export */ const lobby_lobby = (lobby);
;// ./src/scripts/app/mainPage/main/main.js


var mainData = {
  tag: 'main',
  text: '',
  classes: ['main'],
  attr: {},
  children: [],
  handlers: {}
};
var main = function main() {
  var mainElement = createElement(mainData);
  mainElement.append(lobby_lobby());
  return mainElement;
};
/* harmony default export */ const main_main = (main);
;// ./src/scripts/app/mainPage/mainPage.js


var mainPage = function mainPage() {
  document.body.append(header_header(), main_main());
};
/* harmony default export */ const mainPage_mainPage = (mainPage);
;// ./src/scripts/app/startPage/handlers.js


var handleInput = function handleInput(event) {
  var input = event.target;
  if (!isNameValid(input.value)) {
    addErrorMessage(input, 'Name must be between 3 and 15 letters, spaces are allowed.');
  } else {
    removeErrorMessage(input);
  }
};
var isNameValid = function isNameValid(name) {
  var reg = /^[A-Za-z]{3,15}$/;
  return reg.test(name);
};
var addErrorMessage = function addErrorMessage(input, message) {
  input.parentNode.classList.add('error');
  input.nextElementSibling.textContent = message;
};
var removeErrorMessage = function removeErrorMessage(input) {
  input.parentNode.classList.remove('error');
  input.nextElementSibling.textContent = '';
};
var handleClickButton = function handleClickButton(event) {
  event.preventDefault();
  var input = event.target.previousElementSibling.children[1];
  if (isNameValid(input.value)) {
    localStorage.setItem('registry', 'true');
    setUserInfo(input.value);
    document.body.innerHTML = '';
    document.body.append(header_header(), main_main());
  } else {
    addErrorMessage(input, 'Name must be between 3 and 15 letters, spaces are allowed.');
  }
};
var setUserInfo = function setUserInfo(value) {
  var user = {
    name: value,
    game: 0,
    victory: 0,
    avatar: 'default'
  };
  localStorage.setItem('info', JSON.stringify(user));
};
;// ./src/scripts/app/startPage/startPage.js


var labelInput = {
  tag: 'label',
  text: 'Enter name:',
  classes: ['start-page__label'],
  attr: {
    "for": 'name'
  },
  children: []
};
var inputText = {
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
};
var errorMsg = {
  tag: 'span',
  text: '',
  classes: ['start-page__error'],
  attr: {},
  children: []
};
var buttonSubmit = {
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
};
var inputGroupData = {
  tag: 'div',
  text: '',
  classes: ['start-page__input-group'],
  attr: {},
  children: [labelInput, inputText, errorMsg]
};
var pageData = {
  tag: 'form',
  text: '',
  classes: ['start-page'],
  attr: {},
  children: [inputGroupData, buttonSubmit]
};
var startPage = function startPage() {
  var page = createElement(pageData);
  return page;
};
/* harmony default export */ const startPage_startPage = (startPage);
;// ./src/scripts/app/app.js


var app = function app() {
  var registry = localStorage.getItem('registry') || null;
  if (registry === 'true') {
    mainPage_mainPage();
  } else {
    document.body.append(startPage_startPage());
  }
};
/* harmony default export */ const app_app = (app);
;// ./src/main.js


document.addEventListener("DOMContentLoaded", function () {
  app_app();
});
/******/ })()
;
//# sourceMappingURL=main.5bd6620798142a4b2789.js.map