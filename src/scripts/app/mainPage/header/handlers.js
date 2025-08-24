import { updateAvatar } from "../main/lobby/avatar/avatar";
import lobby from "../main/lobby/lobby";


export const handleClickHome = () => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  main.append(lobby())
  updateAvatar()
} 