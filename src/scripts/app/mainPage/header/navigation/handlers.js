import info from "../../main/info/info"
import settigns from "../../main/settings/settings";

export const handleClickInfo = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  info();
}

export const handleClickSettings = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  settigns();
}