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


var getAvatarData = function getAvatarData() {
  var user = JSON.parse(localStorage.getItem('info')) || {};
  console.log(user);
  return user.avatar ? "avatar__image_".concat(user.avatar) : "avatar__image_default";
};
var avatarImg = {
  tag: 'div',
  text: '',
  classes: ['avatar__image', getAvatarData()],
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
;// ./src/scripts/app/mainPage/main/info/info.js


var infoData = {
  tag: 'section',
  text: '',
  classes: ['info'],
  attr: {},
  children: [{
    tag: 'div',
    text: '',
    classes: ['info__container'],
    attr: {},
    children: [{
      tag: 'h2',
      text: 'Info',
      classes: ['info__title'],
      attr: {},
      children: [],
      handlers: {}
    }, {
      tag: 'div',
      text: '',
      classes: ['info__content-box'],
      attr: {},
      children: [avatar_avatar(), {
        tag: 'div',
        text: '',
        classes: ['info__current-info'],
        attr: {},
        children: [{
          tag: 'span',
          text: 'Name: name',
          classes: ['info__text', 'info__text_name'],
          attr: {},
          children: [],
          handlers: {}
        }, {
          tag: 'span',
          text: 'Games: 0',
          classes: ['info__text', 'info__text_games'],
          attr: {},
          children: [],
          handlers: {}
        }, {
          tag: 'span',
          text: 'Wins: 0',
          classes: ['info__text', 'info__text_wins'],
          attr: {},
          children: [],
          handlers: {}
        }, {
          tag: 'span',
          text: 'Losses: 0',
          classes: ['info__text', 'info__text_looses'],
          attr: {},
          children: [],
          handlers: {}
        }],
        handlers: {}
      }],
      handlers: {}
    }],
    handlers: {}
  }],
  handlers: {}
};
var updateInfo = function updateInfo() {
  var user = JSON.parse(localStorage.getItem('info'));
  var name = document.querySelector('.info__text_name');
  var games = document.querySelector('.info__text_games');
  var wins = document.querySelector('.info__text_wins');
  var looses = document.querySelector('.info__text_looses');
  name.textContent = "Name: ".concat(user.name);
  games.textContent = "Games: ".concat(user.games);
  wins.textContent = "Wins: ".concat(user.wins);
  looses.textContent = "Looses: ".concat(user.looses);
};
var info = function info() {
  var infoElement = createElement(infoData);
  var main = document.querySelector('.main');
  main.append(infoElement);
  updateInfo();
  return infoElement;
};
/* harmony default export */ const info_info = (info);
;// ./src/scripts/app/mainPage/main/battle/battleState.js
var enemy = null;
var setCurrentEnemy = function setCurrentEnemy(value) {
  enemy = value;
};
var getCurrentEnemy = function getCurrentEnemy() {
  return enemy;
};
;// ./src/scripts/helpers/getRandomNumber.js
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* harmony default export */ const helpers_getRandomNumber = (getRandomNumber);
;// ./src/scripts/helpers/chanceCheck.js
var chanceCheck = function chanceCheck(value) {
  return value >= Math.random();
};
/* harmony default export */ const helpers_chanceCheck = (chanceCheck);
;// ./src/scripts/app/mainPage/main/battle/resultModal/handlers.js
var handleClickExitButton = function handleClickExitButton(event) {
  event.target.closest('.result-modal').remove();
};
;// ./src/scripts/app/mainPage/main/battle/resultModal/resultModal.js


var resultModal_modalContainer = {
  tag: 'div',
  text: '',
  classes: ['result-modal__container'],
  attr: {},
  children: [{
    tag: 'span',
    text: '',
    classes: ['result-modal__result'],
    attr: {},
    children: [],
    handlers: {}
  }, {
    tag: 'button',
    text: 'exit',
    classes: ['result-modal__button'],
    attr: {},
    children: [],
    handlers: {
      click: handleClickExitButton
    }
  }],
  handlers: {}
};
var resultModal_modalData = {
  tag: 'div',
  text: '',
  classes: ['result-modal'],
  attr: {},
  children: [resultModal_modalContainer],
  handlers: {}
};
var resultModal = function resultModal() {
  var modal = createElement(resultModal_modalData);
  document.body.append(modal);
  return modal;
};
/* harmony default export */ const resultModal_resultModal = (resultModal);
;// ./src/scripts/app/mainPage/main/battle/handlers.js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = handlers_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function handlers_toConsumableArray(r) { return handlers_arrayWithoutHoles(r) || handlers_iterableToArray(r) || handlers_unsupportedIterableToArray(r) || handlers_nonIterableSpread(); }
function handlers_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function handlers_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return handlers_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? handlers_arrayLikeToArray(r, a) : void 0; } }
function handlers_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function handlers_arrayWithoutHoles(r) { if (Array.isArray(r)) return handlers_arrayLikeToArray(r); }
function handlers_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




var handleChangeCheck = function handleChangeCheck() {
  var attackGroup = document.querySelectorAll('.controls__input_attack');
  var defenceGroup = document.querySelectorAll('.controls__input_defence');
  var button = document.querySelector('.controls__button');
  var countAttackChecked = handlers_toConsumableArray(attackGroup).filter(function (check) {
    return check.checked;
  }).length;
  var countDefenceChecked = handlers_toConsumableArray(defenceGroup).filter(function (check) {
    return check.checked;
  }).length;
  // console.log(countAttackChecked, countDefenceChecked)

  if (countAttackChecked === 1 && countDefenceChecked === 2) {
    button.classList.remove('disabled');
  } else {
    button.classList.add('disabled');
  }
};
var getEnemyValues = function getEnemyValues(count) {
  var parts = ['head', 'neck', 'body', 'arms', 'legs'];
  var values = [];
  while (values.length < count) {
    var index = helpers_getRandomNumber(0, parts.length - 1);
    if (!values.includes(parts[index])) {
      values.push(parts[index]);
    }
  }
  return values;
};
var getEnemyPick = function getEnemyPick() {
  var enemy = getCurrentEnemy();
  var attackZone = getEnemyValues(enemy.attack);
  var defenceZone = getEnemyValues(enemy.defence);
  var hitValue = helpers_getRandomNumber(enemy.minHit, enemy.maxHit);
  return {
    attack: attackZone,
    defence: defenceZone,
    hit: hitValue
  };
};
var getPlayerPick = function getPlayerPick() {
  var attackGroup = document.querySelectorAll('.controls__input_attack');
  var defenceGroup = document.querySelectorAll('.controls__input_defence');
  var attackChecked = handlers_toConsumableArray(attackGroup).filter(function (check) {
    return check.checked;
  }).map(function (check) {
    return check.value;
  });
  var defenceChecked = handlers_toConsumableArray(defenceGroup).filter(function (check) {
    return check.checked;
  }).map(function (check) {
    return check.value;
  });
  return {
    attack: attackChecked,
    defence: defenceChecked,
    hit: 20
  };
};
var showResult = function showResult(entity) {
  resultModal_resultModal();
  document.querySelector('.result-modal__result').textContent = entity === 'enemy' ? 'you won' : 'you lose';
  var user = JSON.parse(localStorage.getItem('info'));
  user.games += 1;
  if (entity === 'enemy') {
    user.wins += 1;
  } else {
    user.looses += 1;
  }
  localStorage.setItem('info', JSON.stringify(user));
};
var updateHealth = function updateHealth(hit, entity) {
  var progress = document.querySelector(".".concat(entity, "__progress"));
  var number = document.querySelector(".".concat(entity, "__value"));
  progress.value = +progress.value - hit;
  number.textContent = "".concat(progress.value, "/150");
  if (progress.value <= 0) {
    showResult(entity);
  }
};
var createLog = function createLog(attacker, defender, value, action, crit) {
  var damage = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var logs = document.querySelector('.logs');
  var msg = document.createElement('span');
  msg.classList.add('logs__item');
  var attackerElem = document.createElement('span');
  attackerElem.textContent = attacker;
  attackerElem.classList.add('bold-colored');
  var defenderElem = document.createElement('span');
  defenderElem.textContent = defender;
  defenderElem.classList.add('bold-colored');
  var valueElem = document.createElement('span');
  valueElem.textContent = value;
  valueElem.classList.add('bold-colored');
  if (action === 'block') {
    msg.append(attackerElem, ' attacked ', defenderElem, ' to ', valueElem, ' but ', defenderElem, ' was able to protect his ', valueElem);
  } else {
    var hitElem = document.createElement('span');
    if (crit) {
      hitElem.textContent = "crit ".concat(damage);
      hitElem.classList.add('crit');
      msg.append(attackerElem, ' attacked ', defenderElem, ' to ', valueElem, ' and ', hitElem, ' damage.');
    } else {
      hitElem.textContent = "".concat(damage);
      hitElem.classList.add('bold-colored');
      msg.append(attackerElem, ' attacked ', defenderElem, ' to ', valueElem, ' and deal ', hitElem, ' damage.');
    }
  }
  logs.prepend(msg);
};
var getResultOfAttack = function getResultOfAttack(attacker, defender, attack, defence, hit, entity) {
  var _iterator = _createForOfIteratorHelper(attack),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      if (defence.includes(value)) {
        createLog(attacker, defender, value, 'block');
      } else {
        var hitFlag = false;
        var damage = hit;
        if (helpers_chanceCheck(0.1)) {
          hitFlag = true;
          damage = hit * 1.5;
        }
        updateHealth(damage, entity);
        if (hitFlag) {
          createLog(attacker, defender, value, 'deal', true, damage);
        } else {
          createLog(attacker, defender, value, 'deal', false, damage);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var clearInputs = function clearInputs() {
  var defenceGroup = document.querySelectorAll('.controls__input_defence');
  var attackGroup = document.querySelectorAll('.controls__input_attack');
  [].concat(handlers_toConsumableArray(attackGroup), handlers_toConsumableArray(defenceGroup)).forEach(function (check) {
    check.checked = false;
  });
  handleChangeCheck();
};
var handleControlsButton = function handleControlsButton() {
  var enemyPick = getEnemyPick();
  var playerPick = getPlayerPick();
  var user = JSON.parse(localStorage.getItem('info')).name || 'player';
  var enemy = getCurrentEnemy().name;
  getResultOfAttack(user, enemy, playerPick.attack, enemyPick.defence, playerPick.hit, 'enemy');
  getResultOfAttack(enemy, user, enemyPick.attack, playerPick.defence, enemyPick.hit, 'char');
  clearInputs();
};
;// ./src/scripts/app/data/getEnemies.js

var enemies = [{
  name: 'troll',
  attack: 1,
  defence: 3,
  maxHit: 20,
  minHit: 17
}, {
  name: 'spider',
  attack: 3,
  defence: 1,
  maxHit: 7,
  minHit: 5
}, {
  name: 'skeleton',
  attack: 1,
  defence: 2,
  maxHit: 17,
  minHit: 15
}];
var getEnemies = function getEnemies() {
  var index = helpers_getRandomNumber(0, enemies.length - 1);
  var current = enemies[index];
  return current;
};
/* harmony default export */ const data_getEnemies = (getEnemies);
;// ./src/scripts/app/mainPage/main/battle/logs/logs.js

var logsData = {
  tag: 'div',
  text: '',
  classes: ['logs'],
  attr: {},
  children: [],
  handlers: {}
};
var logs = function logs() {
  var logField = createElement(logsData);
  return logField;
};
/* harmony default export */ const logs_logs = (logs);
;// ./src/scripts/app/mainPage/main/battle/battle.js





var inputLabels = ['Head', 'Neck', 'Body', 'Arms', 'Legs'];

//avatars
var setEntityData = function setEntityData(blockClass) {
  return {
    tag: 'div',
    text: '',
    classes: ["".concat(blockClass)],
    attr: {},
    children: [{
      tag: 'span',
      text: 'name',
      classes: ["".concat(blockClass, "__name")],
      attr: {},
      children: [],
      handlers: {}
    }, {
      tag: 'div',
      text: '',
      classes: ["".concat(blockClass, "__avatar")],
      attr: {},
      children: [],
      handlers: {}
    }, {
      tag: 'div',
      text: '',
      classes: ["".concat(blockClass, "__health")],
      attr: {},
      children: [{
        tag: 'progress',
        text: '',
        classes: ["".concat(blockClass, "__progress")],
        attr: {
          max: '150',
          value: '150'
        },
        children: [],
        handlers: {}
      }, {
        tag: 'span',
        text: '150/150',
        classes: ["".concat(blockClass, "__value")],
        attr: {},
        children: [],
        handlers: {}
      }],
      handlers: {}
    }],
    handlers: {}
  };
};
var createCharachter = function createCharachter() {
  return setEntityData('char');
};
var createEnemy = function createEnemy() {
  return setEntityData('enemy');
};
var createInputs = function createInputs(action) {
  return inputLabels.map(function (part) {
    return {
      tag: 'div',
      text: '',
      classes: ['controls__input-box', "controls__input-box_".concat(action)],
      attr: {},
      children: [{
        tag: 'label',
        text: part,
        classes: ['controls__label', "controls__label_".concat(action)],
        attr: {
          "for": part.toLowerCase()
        },
        children: [],
        handlers: {}
      }, {
        tag: 'input',
        text: part,
        classes: ['controls__input', "controls__input_".concat(action)],
        attr: {
          type: 'checkbox',
          id: part.toLowerCase(),
          value: part.toLowerCase(),
          name: action
        },
        children: [],
        handlers: {}
      }],
      handlers: {}
    };
  });
};
var createGroup = function createGroup(action) {
  return {
    tag: 'div',
    text: '',
    classes: ["controls__".concat(action, "-group")],
    attr: {},
    children: [{
      tag: 'span',
      text: "".concat(action),
      classes: ['controls__group-title'],
      attr: {},
      children: [],
      handlers: {}
    }, {
      tag: 'div',
      text: "",
      classes: ['controls__inputs', "controls__inputs_".concat(action)],
      attr: {},
      children: createInputs(action),
      handlers: {}
    }],
    handlers: {}
  };
};
var createAttack = function createAttack() {
  return createGroup('attack');
};
var createDefence = function createDefence() {
  return createGroup('defence');
};
var createControls = function createControls() {
  return {
    tag: 'div',
    text: '',
    classes: ['controls'],
    attr: {},
    children: [{
      tag: 'span',
      text: 'Please pick 1 attack zone and 2 defence zones',
      classes: ['controls__desc'],
      attr: {},
      children: [],
      handlers: {}
    }, {
      tag: 'div',
      text: '',
      classes: ['controls__group'],
      attr: {},
      children: [createAttack(), {
        tag: 'div',
        text: '',
        classes: ['separator'],
        attr: {},
        children: [],
        handlers: {}
      }, createDefence(), {
        tag: 'button',
        text: 'Attack',
        classes: ['controls__button', 'disabled'],
        attr: {},
        children: [],
        handlers: {
          click: handleControlsButton
        }
      }],
      handlers: {
        change: handleChangeCheck
      }
    }],
    handlers: {}
  };
};
var battleContainer = {
  tag: 'div',
  text: '',
  classes: ['battle__container'],
  attr: {},
  children: [createCharachter(), createControls(), createEnemy(), logs_logs()],
  handlers: {}
};
var battleTitle = {
  tag: 'h2',
  text: 'battle',
  classes: ['battle__title'],
  attr: {},
  children: [],
  handlers: {}
};
var battleData = {
  tag: 'section',
  text: '',
  classes: ['battle'],
  attr: {},
  children: [battleTitle, battleContainer],
  handlers: {}
};
var updateBattle = function updateBattle() {
  var user = JSON.parse(localStorage.getItem('info')) || {};
  var currentEnemy = data_getEnemies();
  var charAvatar = document.querySelector('.char__avatar');
  var enemyAvatar = document.querySelector('.enemy__avatar');
  var charName = document.querySelector('.char__name');
  var enemyName = document.querySelector('.enemy__name');
  charAvatar.classList.add("char__avatar_".concat(user.avatar));
  charName.textContent = user.name;
  enemyAvatar.classList.add("enemy__avatar_".concat(currentEnemy.name));
  enemyName.textContent = currentEnemy.name;
  setCurrentEnemy(currentEnemy);
};
var battle = function battle() {
  var battleElement = createElement(battleData);
  var main = document.querySelector('.main');
  main.append(battleElement);
  updateBattle();
  return battleElement;
};
/* harmony default export */ const battle_battle = (battle);
;// ./src/scripts/app/mainPage/main/lobby/startGame/handlers.js

var handleClickStartButton = function handleClickStartButton(event) {
  var main = event.target.closest('.main');
  event.target.closest('.lobby').remove();
  battle_battle();
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
    games: 0,
    wins: 0,
    looses: 0,
    avatar: 'default'
  };
  localStorage.setItem('info', JSON.stringify(user));
};
;// ./src/scripts/app/mainPage/main/settings/handlers.js


var handlers_addErrorMessage = function addErrorMessage(input, message) {
  input.parentNode.classList.add('error');
  input.parentNode.nextElementSibling.textContent = message;
};
var handlers_removeErrorMessage = function removeErrorMessage(input) {
  input.parentNode.classList.remove('error');
  input.parentNode.nextElementSibling.textContent = '';
};
var handleEditInput = function handleEditInput(event) {
  var input = event.target;
  if (!isNameValid(input.value)) {
    handlers_addErrorMessage(input, 'Name must be between 3 and 15 letters, spaces are allowed.');
  } else {
    handlers_removeErrorMessage(input);
  }
};
var createInput = function createInput() {
  var input = createElement({
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
  });
  return input;
};
var createCurrentName = function createCurrentName(value) {
  var currentName = createElement({
    tag: 'span',
    text: value,
    classes: ['settings__current-name'],
    attr: {},
    children: [],
    handlers: {}
  });
  return currentName;
};
var handleSaveButton = function handleSaveButton(event) {
  event.preventDefault();
  var input = event.target.previousElementSibling;
  if (isNameValid(input.value)) {
    var changeBox = document.querySelector('.settings__change-name');
    var currentName = createCurrentName(input.value);
    var editButton = createButton('Edit');
    changeBox.replaceChild(currentName, input);
    changeBox.replaceChild(editButton, event.target);
    var user = JSON.parse(localStorage.getItem('info'));
    user.name = input.value;
    localStorage.setItem('info', JSON.stringify(user));
  } else {
    handlers_addErrorMessage(input, 'Name must be between 3 and 15 letters, spaces are allowed.');
  }
};
var createButton = function createButton(value) {
  var btn = createElement({
    tag: 'button',
    text: value,
    classes: ['settings__button', "settings__button_".concat(value.toLowerCase())],
    attr: {},
    children: [],
    handlers: {
      click: handlers[value.toLowerCase()]
    }
  });
  return btn;
};
var handleEditButton = function handleEditButton(event) {
  var changeBox = document.querySelector('.settings__change-name');
  var currentName = document.querySelector('.settings__current-name');
  var input = createInput();
  var saveButton = createButton('Save');
  input.value = currentName.textContent;
  changeBox.replaceChild(input, currentName);
  changeBox.replaceChild(saveButton, event.target);
};
var handlers = {
  'edit': handleEditButton,
  'save': handleSaveButton
};
;// ./src/scripts/app/mainPage/main/settings/settings.js


var settingsData = {
  tag: 'section',
  text: '',
  classes: ['settings'],
  attr: {},
  children: [{
    tag: 'div',
    text: '',
    classes: ['settings__container'],
    attr: {},
    children: [{
      tag: 'h2',
      text: 'Settings',
      classes: ['settings__title'],
      attr: {},
      children: [],
      handlers: {}
    }, {
      tag: 'div',
      text: '',
      classes: ['settings__change-name'],
      attr: {},
      children: [{
        tag: 'span',
        text: 'Current name: ',
        classes: ['settings__text'],
        attr: {},
        children: [],
        handlers: {}
      }, {
        tag: 'span',
        text: 'name',
        classes: ['settings__current-name'],
        attr: {},
        children: [],
        handlers: {}
      }, {
        tag: 'button',
        text: 'Edit',
        classes: ['settings__button', 'settings__button_edit'],
        attr: {},
        children: [],
        handlers: {
          click: handleEditButton
        }
      }],
      handlers: {}
    }, {
      tag: 'span',
      text: '',
      classes: ['settings__error'],
      attr: {},
      children: [],
      handlers: {}
    }],
    handlers: {}
  }],
  handlers: {}
};
var updateSettings = function updateSettings() {
  var user = JSON.parse(localStorage.getItem('info')).name;
  var currentName = document.querySelector('.settings__current-name');
  currentName.textContent = user;
};
var settigns = function settigns() {
  var settingsElement = createElement(settingsData);
  var main = document.querySelector('.main');
  main.append(settingsElement);
  updateSettings();
  return settingsElement;
};
/* harmony default export */ const settings = (settigns);
;// ./src/scripts/app/mainPage/header/navigation/handlers.js


var handleClickInfo = function handleClickInfo() {
  var main = document.querySelector('.main');
  main.innerHTML = '';
  info_info();
};
var handleClickSettings = function handleClickSettings() {
  var main = document.querySelector('.main');
  main.innerHTML = '';
  settings();
};
;// ./src/scripts/app/mainPage/header/navigation/navigation.js


var createListItem = function createListItem(extClass) {
  var handlers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    tag: 'li',
    text: '',
    classes: ['navigation__item', extClass],
    attr: {},
    children: [],
    handlers: handlers
  };
};
var navList = {
  tag: 'ul',
  text: '',
  classes: ['navigation__list'],
  attr: {},
  children: [createListItem('navigation__item_info', {
    click: handleClickInfo
  }), createListItem('navigation__item_settings', {
    click: handleClickSettings
  })],
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
;// ./src/scripts/app/mainPage/header/handlers.js

var handleClickHome = function handleClickHome() {
  var main = document.querySelector('.main');
  main.innerHTML = '';
  main.append(lobby_lobby());
};
;// ./src/scripts/app/mainPage/header/header.js



var homeLink = {
  tag: 'a',
  text: '',
  classes: ['header__home-link'],
  attr: {},
  children: [],
  handlers: {
    click: handleClickHome
  }
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
;// ./src/scripts/app/mainPage/mainPage.js


var mainPage = function mainPage() {
  document.body.append(header_header(), main_main());
};
/* harmony default export */ const mainPage_mainPage = (mainPage);
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
  var registry = localStorage.getItem('registry') || 'false';
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
//# sourceMappingURL=main.41e9a5bbe564f6bc7116.js.map