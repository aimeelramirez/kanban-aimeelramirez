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
    let getListDescription = buttonLabel[i].id
    console.log("button: ", getListDescription)
    buttonLabel[i].setAttribute("aria-label", getListDescription)
    buttonLabel[i].setAttribute("aria-describedby", getTextButton)
  }
}

ariaLabelHeaders()
ariaLabelButtons()

//TODO
//optimize this file and get dark mode and light mode committed.
//update on items
//footer fixes since audit removed
//a11y tags on buttons as well with modal
//research styles to index modal best.
//get explaination to build vs start to get style changes.
