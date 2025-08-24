import battle from "../../battle/battle";


export const handleClickStartButton = (event) => {
  const main = event.target.closest('.main');
  event.target.closest('.lobby').remove();
  battle();
}