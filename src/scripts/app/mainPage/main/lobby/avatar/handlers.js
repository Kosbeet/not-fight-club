import modal from "../../../../modal/modal"

export const handleAvatarClick = () => {
  document.body.append(modal())
  console.log('open')
}