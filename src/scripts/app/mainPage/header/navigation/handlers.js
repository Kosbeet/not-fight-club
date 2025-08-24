import info from "../../main/info/info"

export const handleClickInfo = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  info();
}

export const handleClickSettings = () => {
  console.log('settings')
}