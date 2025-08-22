import { getCurrentEnemy } from "./battleState";
import getRandomNumber from "../../../../helpers/getRandomNumber";


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

export const handleControlsButton = () => {
  const enemyPick = getEnemyPick();
  const playerPick = getPlayerPick();
  
  

  console.log(enemyPick, playerPick)

}
