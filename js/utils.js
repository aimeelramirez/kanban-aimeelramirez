const ariaLabelHeaders = () => {
  console.log("aria labels")
  //role="list"
  //let body = document.getElementsByTagName("body")
  let newLabel = document.querySelectorAll("section")
  let newLabelList = document.getElementsByTagName("article")
  for (let i = 0; i < newLabel.length; i++) {
    newLabel[i].setAttribute("role", "list")
  }
  for (let i = 0; i < newLabelList.length; i++) {
    newLabelList[i].setAttribute("role", "listitem")
  }
  console.log(newLabel)
}
ariaLabelHeaders()
