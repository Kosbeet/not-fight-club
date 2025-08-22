import { getCurrentEnemy } from "./battleState";
import getRandomNumber from "../../../../helpers/getRandomNumber";
import chanceCheck from "../../../../helpers/chanceCheck";

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
const showResult = () => {
  console.log('++++')
}

const updateHealth = (hit, entity) => {
  const progress = document.querySelector(`.${entity}__progress`);
  const number = document.querySelector(`.${entity}__value`);

  progress.value = +progress.value - hit;
  number.textContent = `${progress.value}/150`;
  if (progress.value <= 0) {
    showResult()
  }
}

const getResultOfAttack = (attack, defence, hit, entity) => {
  
  const user = JSON.parse(localStorage.getItem('info')).name || 'player';
  const enemy = getCurrentEnemy().name;
  
  for (let value of attack) {
    if (defence.includes(value)) {
      console.log('block')
    } else {
      if (chanceCheck(0.1)) {
        const critHit = hit * 1.5;
        updateHealth(critHit, entity)
      } else {
        console.log(`${user} hit ${enemy} by ${hit}`)
        updateHealth(hit, entity)
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
  
  getResultOfAttack(playerPick.attack, enemyPick.defence, playerPick.hit, 'char');
  getResultOfAttack(enemyPick.attack, playerPick.defence, enemyPick.hit, 'enemy');
  clearInputs()
}
