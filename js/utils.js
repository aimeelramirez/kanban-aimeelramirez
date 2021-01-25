let newLabel = document.querySelectorAll("section")

const ariaLabelHeaders = () => {
  // console.log("aria labels")
  let newLabelList = document.getElementsByTagName("article")
  for (let i = 0; i < newLabel.length; i++) {
    if (i < 3) {
      newLabel[i].setAttribute("role", "list")
    }
  }
  for (let i = 0; i < newLabelList.length; i++) {
    newLabelList[i].setAttribute("role", "listitem")
  }
}
const ariaLabelButtons = () => {
  let buttonLabel = document.querySelectorAll("button")
  for (let i = 0; i < buttonLabel.length; i++) {
    let getTextButton = buttonLabel[i].querySelector("strong").innerText
    let getListDescription = newLabel[i].id
    console.log("button: ", getTextButton)
    buttonLabel[i].setAttribute("aria-label", getListDescription)
    buttonLabel[i].setAttribute("aria-describedby", getTextButton)
  }
}

ariaLabelHeaders()
ariaLabelButtons()
