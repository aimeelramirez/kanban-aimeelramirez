// read data
let sectionId = document.querySelectorAll("section")
const dataArray = []

const utilSort = (dataRead) => {
  dataRead.items.sort(function (a, b) {
    return a.id - b.id
  })
  //console.log("check:" + JSON.stringify(dataRead.items))
}
const getBackLog = (queryTasks, dataRead) => {
  // console.log(queryTasks.id + ":" + dataRead.items)
  let backlogTasks = queryTasks.querySelectorAll("article")
  let getLastArticle = backlogTasks[backlogTasks.length - 1]
  getLastArticle.remove()
  for (let i = 0; i < dataRead.items.length; i++) {
    //TODO sort the ids
    utilSort(dataRead)
    queryTasks.innerHTML +=
      ` <article  aria-labelledby='${sectionId[0].id}' id='${dataRead.items[i].id}'><span>` +
      dataRead.items[i].id +
      `</span>` +
      `<button aria-label="button"class="editTask" id="editTask-${dataRead.items[i].id}" type="button"><strong>Edit</strong></button>` +
      `<h3>` +
      dataRead.items[i].title +
      `</h3>` +
      `<p>` +
      dataRead.items[i].description +
      `</p>` +
      `
      <form>
            <label for="${sectionId[0].id}-date-created-${i}">${sectionId[0].id}-date-created-${i}</label>
            <input
              type="date"
              id="${sectionId[0].id}-date-created-${i}"
              for="${sectionId[0].id}-date-created-${i}"
              name="date-created"
             value="` +
      dataRead.items[i].dueDate +
      `"/></form>
          </article>`
  }
}

const getImplementation = (queryTasks, dataRead) => {
  //console.log(queryTasks)
  let implementationTasks = queryTasks.querySelectorAll("article")
  let getLastArticle = implementationTasks[implementationTasks.length - 1]
  getLastArticle.remove()
  for (let i = 0; i < dataRead.items.length; i++) {
    utilSort(dataRead)
    queryTasks.innerHTML +=
      ` <article  aria-labelledby='${sectionId[1].id}' id='${dataRead.items[i].id}'><span>` +
      dataRead.items[i].id +
      `</span>` +
      `<button aria-label="button" class="editTask" id="editTask-${dataRead.items[i].id}" type="button"><strong>Edit</strong></button>` +
      `<h3>` +
      dataRead.items[i].title +
      `</h3>` +
      `<p>` +
      dataRead.items[i].description +
      `</p>` +
      `<form>
            <label for="${sectionId[1].id}-date-created-${i}">${sectionId[1].id}-date-created-${i}</label>
            <input
              type="date"
              id="${sectionId[1].id}-date-created-${i}"
             for="${sectionId[1].id}-date-created-${i}"
              name="date-created"
             value="` +
      dataRead.items[i].dueDate +
      `"/></form>
          </article>`
  }
}
const getComplete = (queryTasks, dataRead) => {
  let completeTasks = queryTasks.querySelectorAll("article")
  let getLastArticle = completeTasks[completeTasks.length - 1]
  getLastArticle.remove()
  for (let i = 0; i < dataRead.items.length; i++) {
    utilSort(dataRead)
    //console.log("check:" + JSON.stringify(dataRead.items))
    queryTasks.innerHTML +=
      ` <article aria-labelledby='${sectionId[2].id}' id='${dataRead.items[i].id}'><span>` +
      dataRead.items[i].id +
      `</span>` +
      `<button aria-label="button" class="editTask" id="editTask-${dataRead.items[i].id}" type="button"><strong>Edit</strong></button>` +
      `<h3>` +
      dataRead.items[i].title +
      `</h3>` +
      `<p>` +
      dataRead.items[i].description +
      `</p>` +
      `<form>
      <label for="${sectionId[2].id}-date-created-${i}">${sectionId[2].id}-date-created-${i}</label>
            <input
              type="date"
              id="${sectionId[2].id}-date-created-${i}"
              for="${sectionId[2].id}-date-created-${i}"
              name="date-created"
             value="` +
      dataRead.items[i].dueDate +
      `"/></form>
          </article>`
  }
}

//update

//delete
//select article

const getDeleteTask = (dataRead) => {
  console.log("this is to be selected to delete: " + dataRead.length)
  //get queryArticles/tasks

  for (let key in dataRead) {
    dataArray.push({
      id: parseInt(key) + 1,
      item: dataRead[key],
    })
  }
  console.log(dataArray)
  // return deleteDataId(dataArray)

  // for (let f = 0; f < dataArray.length; f++) {
  //   // console.log(dataArray[f].id + ": " + dataArray[f].item.id)
  //   if (dataArray[f].id != dataArray[f].item.id) {
  //     let parseData = dataArray[f]
  //     console.log(parseData + ": " + dataArray[f].item.id)
  //   }
  // }

  //let currentTask = ""
  //store data
  //console.log("data:" + JSON.parse(dataRead))
  // console.log("content still loading please wait....")
  let queryArticles = []
  let getList = []
  let compareId = {}
  let element = ""
  let idUpdate = 0

  let getIndex = 0
  //getting id for sections
  //to get the store
  // for (let j = 0; j < dataRead.length; j++) {
  //   let getInfo = JSON.stringify(dataRead[j])

  // for (let key in dataRead) {
  //   getList.push({
  //     id: parseInt(key),
  //     itemId: dataRead[key].id,
  //     title: dataRead[key].title,
  //     description: dataRead[key].description,
  //   })
  // }
  dataRead.forEach((ele, index) => {
    //get to match the task to the query click
    //console.log("ele: " + JSON.stringify(ele))
    element = ele
    console.log(element)

    //queryArticles[index] = document.querySelector("article")
    // console.log("class:" + JSON.parse(queryArticles[index].innerHTML))
  })

  // le

  queryArticles = document.querySelectorAll("article")

  // console.log("loading...." + queryArticles)
  for (let i = 0; i < queryArticles.length; i++) {
    if (queryArticles[i].querySelector("span") != null) {
      let compareId = queryArticles[i].querySelector("span").innerText
      // console.log("span:" + compareId)
      let idEdit = parseInt(queryArticles[i].id)
      //  console.log("id:" + idEdit + ": " + i)
      if (queryArticles[i].id === compareId) {
        let logMouseOver = () => {
          queryArticles[i].style.cssText =
            "color: purple; transform: scale(1.075);  box-shadow: 0 10px 6px -6px black; transition-duration: 0.4s; border-radius: 0.5rem;"
          // console.log("loading complete... now you can select to delete")
        }
        //mouseOut
        let logMouseOut = () => {
          queryArticles[i].style.cssText = "width:100%; color:black;"
        }
        let getArticleClick = (e) => {
          e.preventDefault()
          getIndex = e.path[1].id
          console.log(getIndex + ": " + e.path[1])

          // if (getIndex > dataRead.length) {
          //   getIndex = dataRead.length
          //   console.log("path set: " + JSON.stringify(dataRead[getIndex - 1]))
          // } else {
          //   console.log("path: " + JSON.stringify(dataRead[getIndex - 1]))
          //   getIndex = e.path[1].id
          // }
          for (let k = 0; k < dataArray.length; k++) {
            //get ids
            let getId = e.path[1]
            // console.log(getId)

            let createModal = document.createElement("article")
            createModal.id = "message"
            let x = document.getElementById("modal-dialog")
            if (getId.id == dataArray[k].item.id) {
              console.log(dataArray[k].item.id)
              console.log(x.style.display)
              if (x.style.display == "none") {
                x.style.display = "flex"
                x.innerHTML =
                  `<article id="editDialog"><h2>Edit Form:📝</h2>` +
                  ` <form name="newerTask" id="editFormPut">` +
                  `<input name="newTitle" id="newTitle" required="" placeholder="${dataArray[k].item.title}"/>` +
                  `<textarea name="newDescription"  id="newDescription" placeholder="${dataArray[k].item.description}" required="" ></textarea>` +
                  `<input name="newDate" type="date" value="${dataArray[k].item.dueDate}" required="" id="newDate">` +
                  `<span id="wrapper"><button id="submitEdit" type="button"><strong>submit</strong></button> <button id="deleteTask" type="button"><strong>delete</strong></button><button id="exit"  type="button"><strong>Exit</strong></button></span></form></article>`

                let getForm = document.getElementById("editFormPut")
                console.log(getForm)

                let getFormElements = getForm.elements
                let dataReading = dataRead[getIndex - 1]
                console.log("elements:" + getFormElements["newTitle"].value)
                getFormElements[0].value = dataArray[k].item.title
                getFormElements[1].value = dataArray[k].item.description
                getFormElements[2].value = dataArray[k].item.dueDate
                let stringID = JSON.stringify(dataArray[k].item.listId)
                idUpdate = parseInt(stringID)
                console.log(idUpdate)
                let parseData = {
                  title: getFormElements[0].value,
                  description: getFormElements[1].value,
                  dueDate: getFormElements[2].value,
                  listId: idUpdate,
                }
                console.log(parseData)
                let getSpanEdit = document.querySelector("span")
                let getSubmitEdit = getSpanEdit.querySelector("#submitEdit")
                getSubmitEdit.addEventListener("click", () => {
                  let getFormElements = getForm.elements
                  console.log(getFormElements)
                  console.log("elements 0:" + getFormElements["newTitle"].value)
                  console.log(
                    "elements 1:" + getFormElements["newDescription"].value,
                  )

                  getFormElements[0].value = getFormElements["newTitle"].value
                  getFormElements[1].value =
                    getFormElements["newDescription"].value
                  getFormElements[2].value = getFormElements["newDate"].value
                  // let stringID = JSON.stringify(dataRead[e.path[1].id - 1].listId)
                  // idUpdate = parseInt(stringID)
                  // console.log(idUpdate)
                  let parseDataAgain = {
                    title: getFormElements[0].value,
                    description: getFormElements[1].value,
                    dueDate: getFormElements[2].value,
                    listId: idUpdate,
                  }
                  console.log(parseDataAgain)
                  return putDataAPI(parseDataAgain, getIndex)
                })
                let getButtonDelete = getSpanEdit.querySelector("#deleteTask")
                getButtonDelete.addEventListener("click", trashButton)
                let getButtonExit = getSpanEdit.querySelector("#exit")
                getButtonExit.addEventListener("click", closeForm)
              } else {
                x.style.display = "none"
              }
            }
          }
        }

        let trashButton = (e) => {
          e.preventDefault()

          let getConfirmModal = document.getElementById("modal-dialog")
          let createModal2 = document.createElement("article")
          createModal2.id = "confirmation"
          getConfirmModal.insertAdjacentElement("beforebegin", createModal2)
          let getConfirm = document.getElementById("confirmation")
          //  console.log(e.path[2][0])
          let getForm = document.getElementById("editFormPut")
          console.log(getForm)
          let dataFind = e.path
          for (let g = 0; g < dataArray.length; g++) {
            //console.log(dataFind)

            if (getForm[0].value == dataArray[g].item.title) {
              // console.log(e.path[2][0] + ": " + dataArray[g].item.title)

              getConfirm.innerHTML =
                `<h2>Are you sure you want to delete?</h2><p>Title:${getForm[0].value}<br/>\n` +
                `Description:` +
                getForm[1].value +
                ` </p><button id="unsure">Oops, nope!</button>\n<button id="absolutely">Yes, for sure!</button></p>`

              let yes = document.getElementById("absolutely")
              let no = document.getElementById("unsure")
              // console.log(queryArticles[i].id + "? delete id: " + dataArray[g].id)
              //    let dataDelete =
              let maybeDelete = (e) => {
                e.preventDefault()
                if (e.target.id == "absolutely") {
                  //check event
                  console.log("this is clicked", dataArray[g])
                  getConfirm.innerHTML = ""
                  return deleteDataAPI(dataArray[g].item)
                } else {
                  getConfirm.innerHTML = `<p> Okay, cancelled.</p>`
                  window.setTimeout(() => {
                    getConfirm.innerHTML = ""
                    // getModal.remove()
                  }, 2000)
                  return null
                }
              }
              no.onclick = maybeDelete
              yes.onclick = maybeDelete
            }
          }
        }
        let closeForm = (e) => {
          e.preventDefault()
          let x = document.getElementById("modal-dialog")
          let getConfirm = document.getElementById("confirmation")
          if (getConfirm != "" || getConfirm != null) {
            getConfirm.innerHTML = ""
          }
          x.innerHTML = ""
        }
        let getIdEdit = document.querySelectorAll("button")

        console.log("edit" + getIdEdit)
        for (let b = 0; b < getIdEdit.length; b++) {
          getIdEdit[b].addEventListener("click", getArticleClick)
        }
        // counter = 0

        // queryArticles[i].onclick = getClickTask

        queryArticles[i].onmouseover = logMouseOver
        queryArticles[i].onmouseout = logMouseOut
        //break
      }
    }

    //get if article was clicked
    // const getClickTask = () => {
    //   //MAP
    //   // dataRead.map((ele, index) => {
    //   //   //get to match the task to the query click
    //   //   console.log("ele: " + JSON.stringify(ele))
    //   //   // let stringGet = queryArticles[i].querySelector("span").innerText
    //   // compareId = queryArticles[i].querySelector("span")

    //   // console.log(compareId + ":" + JSON.stringify(element.id))
    //   let parseNumId = JSON.stringify(element.id)

    //   if (parseInt(compareId) == parseInt(parseNumId)) {
    //     //set the i to current task to get in arrow
    //     //currentTask= i
    //     let getMain = document.querySelector("nav")
    //     let createModal = document.createElement("article")
    //     createModal.id = "message"
    //     getMain.insertAdjacentElement("beforebegin", createModal)
    //     let getModal = document.getElementById("message")
    //     getModal.innerHTML = `<p> Are you sure you want to delete? <button id="unsure">Oops, nope!</button>\n<button id="absolutely">Yes, for sure!</button></p>`
    //     let yes = document.getElementById("absolutely")
    //     let no = document.getElementById("unsure")
    //     let dataDelete = parseInt(parseNumId)

    //     let maybeDelete = (e) => {
    //       e.preventDefault()
    //       if (e.target.id == "absolutely") {
    //         //check event
    //         console.log("this is clicked", dataDelete)
    //         return deleteDataAPI(dataDelete)
    //       } else {
    //         getModal.innerHTML = `<p> Okay, cancelled.</p>`
    //         return null
    //       }
    //     }
    //     no.addEventListener("click", maybeDelete)
    //     yes.addEventListener("click", maybeDelete)
    //   }
    //   // })
    // }
    //on mouse event

    // document
    //   .querySelector("article")
    //   .addEventListener("mouseout", logMouseOut)

    // queryArticles[i].addEventListener("click", getClickTask)
  }
}
// }
