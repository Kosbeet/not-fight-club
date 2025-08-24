import lobby from './../../lobby/lobby'

export const handleClickExitButton = (event) => {
  event.target.closest('.result-modal').remove();
  const main = document.querySelector('.main')
  main.innerHTML = '';
  main.append(lobby())
}