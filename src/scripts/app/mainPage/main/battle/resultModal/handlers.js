

export const handleClickExitButton = (event) => {
  event.target.closest('.result-modal').remove();
}