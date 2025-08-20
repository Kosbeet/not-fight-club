

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

export const handleControlsButton = () => {
}
