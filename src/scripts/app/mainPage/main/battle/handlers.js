import { getCurrentEnemy } from "./battleState";
import getRandomNumber from "../../../../helpers/getRandomNumber";
import chanceCheck from "../../../../helpers/chanceCheck";
import resultModal from "./resultModal/resultModal";

export const handleChangeCheck = () => {
  const attackGroup = document.querySelectorAll('.controls__input_attack');
  const defenceGroup = document.querySelectorAll('.controls__input_defence');
  const button = document.querySelector('.controls__button');
  
  const countAttackChecked = [...attackGroup].filter((check) => check.checked).length;
  const countDefenceChecked = [...defenceGroup].filter((check) => check.checked).length;
  // console.log(countAttackChecked, countDefenceChecked)
  
  if (countAttackChecked === 1 && countDefenceChecked === 2) {
    button.classList.remove('disabled');
  } else {
    button.classList.add('disabled');
  }
}

const getEnemyValues = (count) => {
  const parts = ['head', 'neck', 'body', 'arms', 'legs'];
  const values = [];
  while (values.length < count) {
    const index = getRandomNumber(0, parts.length - 1);
    if (!values.includes(parts[index])) {
      values.push(parts[index]);
    }
  }
  return values;
}

const getEnemyPick = () => {
  const enemy = getCurrentEnemy();
  const attackZone = getEnemyValues(enemy.attack);
  const defenceZone = getEnemyValues(enemy.defence);
  const hitValue = getRandomNumber(enemy.minHit, enemy.maxHit)

  return {
    attack: attackZone,
    defence: defenceZone,
    hit: hitValue
  }
}

const getPlayerPick = () => {
  const attackGroup = document.querySelectorAll('.controls__input_attack');
  const defenceGroup = document.querySelectorAll('.controls__input_defence');
  const attackChecked = [...attackGroup].filter((check) => check.checked).map((check) => check.value);
  const defenceChecked = [...defenceGroup].filter((check) => check.checked).map((check) => check.value);

  return {
    attack: attackChecked,
    defence: defenceChecked,
    hit: 20
  }
}
const showResult = (entity) => {
  resultModal();
  document.querySelector('.result-modal__result').textContent = entity === 'enemy' ? 'you won' : 'you lose';
  const user = JSON.parse(localStorage.getItem('info'));
  user.games += 1;
  if (entity === 'enemy') {
    user.wins += 1;
  } else {
    user.looses += 1;
  }
  localStorage.setItem('info', JSON.stringify(user))
}

const updateHealth = (hit, entity) => {
  const progress = document.querySelector(`.${entity}__progress`);
  const number = document.querySelector(`.${entity}__value`);

  progress.value = +progress.value - hit;
  number.textContent = `${progress.value}/150`;
  if (progress.value <= 0) {
    showResult(entity);
  }
}

const createLog = (attacker, defender, value, action, crit, damage = '') => {
  const logs = document.querySelector('.logs');
  const msg = document.createElement('span');
  msg.classList.add('logs__item');

  const attackerElem = document.createElement('span');
  attackerElem.textContent = attacker;
  attackerElem.classList.add('bold-colored');

  const defenderElem = document.createElement('span');
  defenderElem.textContent = defender;
  defenderElem.classList.add('bold-colored');

  const valueElem = document.createElement('span');
  valueElem.textContent = value;
  valueElem.classList.add('bold-colored');

  if (action === 'block') {
    msg.append(attackerElem, ' attacked ', defenderElem, ' to ', valueElem, ' but ', defenderElem, ' was able to protect his ', valueElem)
  } else {
    const hitElem = document.createElement('span');
    if (crit) { 
      hitElem.textContent = `crit ${damage}`;
      hitElem.classList.add('crit')
      msg.append(attackerElem, ' attacked ', defenderElem, ' to ', valueElem, ' and ', hitElem, ' damage.')
    } else {
      hitElem.textContent = `${damage}`;
      hitElem.classList.add('bold-colored')
      msg.append(attackerElem, ' attacked ', defenderElem, ' to ', valueElem, ' and deal ', hitElem, ' damage.')
    }
  }

  logs.prepend(msg);
}

const getResultOfAttack = (attacker, defender, attack, defence, hit, entity) => {
  for (let value of attack) {
    if (defence.includes(value)) {
      createLog(attacker, defender, value, 'block')
    } else {
      let hitFlag = false;
      let damage = hit;

      if (chanceCheck(0.1)) {
        hitFlag = true;
        damage = hit * 1.5;
      }
      updateHealth(damage, entity);

      if (hitFlag) {
        createLog(attacker, defender, value, 'deal', true, damage)
      } else {
        createLog(attacker, defender, value, 'deal', false, damage)
      }
    }
  }
}
const clearInputs = () => {
  const defenceGroup = document.querySelectorAll('.controls__input_defence');
  const attackGroup = document.querySelectorAll('.controls__input_attack');
  [...attackGroup, ...defenceGroup].forEach((check) => {
    check.checked = false;
  })
  handleChangeCheck()
} 

export const handleControlsButton = () => {
  const enemyPick = getEnemyPick();
  const playerPick = getPlayerPick();
  const user = JSON.parse(localStorage.getItem('info')).name || 'player';
  const enemy = getCurrentEnemy().name;
  
  getResultOfAttack(user, enemy, playerPick.attack, enemyPick.defence, playerPick.hit, 'enemy');
  getResultOfAttack(enemy, user, enemyPick.attack, playerPick.defence, enemyPick.hit, 'char');
  clearInputs()
}
