let newLabel = document.querySelectorAll("section")
const ariaLabelButtons = () => {
  let buttonLabel = document.querySelectorAll("button")
  for (let i = 0; i < buttonLabel.length; i++) {
    let getTextButton = buttonLabel[i].querySelector("strong").innerText
    let getListDescription = buttonLabel[i].id
    buttonLabel[i].setAttribute("aria-label", getListDescription)
    buttonLabel[i].setAttribute("aria-describedby", getTextButton)
  }
}

ariaLabelButtons()
