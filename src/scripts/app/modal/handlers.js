export const handleModalButton = (event) => {
  console.log('confirm')
  event.target.closest('.modal').remove()
}