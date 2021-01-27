// read data
let sectionId = document.querySelectorAll("section")

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
          console.log("path: " + JSON.stringify(dataRead[e.path[1].id - 1]))

          let createModal = document.createElement("article")
          createModal.id = "message"
          let x = document.getElementById("modal-dialog")

          if (x.style.display === "none") {
            x.style.display = "flex"
            x.innerHTML =
              `<article id="editDialog"><h2>Edit Form:📝</h2><button id="exit">Exit</button>` +
              ` <form name="newerTask" id="editFormPut">` +
              `<input name="newTitle" id="newTitle" required="" placeholder="${
                dataRead[e.path[1].id - 1].title
              }"/>` +
              `<textarea name="newDescription"  id="newDescription" placeholder="${
                dataRead[e.path[1].id - 1].description
              }" required="" ></textarea>` +
              `<input name="newDate" type="date" value="${
                dataRead[e.path[1].id - 1].dueDate
              }" required="" id="newDate">` +
              `<button id="submitEdit" type="button"></button> <button id="deleteTask" type="button"></button></form><article>`

            let getForm = document.getElementById("editFormPut")
            console.log(getForm)

            let getFormElements = getForm.elements
            let dataReading = dataRead[e.path[1].id - 1]
            console.log("elements:" + getFormElements["newTitle"].value)
            getFormElements[0].value = dataReading.title
            getFormElements[1].value = dataReading.description
            getFormElements[2].value = dataReading.dueDate
            let stringID = JSON.stringify(dataRead[e.path[1].id - 1].listId)
            idUpdate = parseInt(stringID)
            console.log(idUpdate)
            let parseData = {
              title: getFormElements[0].value,
              description: getFormElements[1].value,
              dueDate: getFormElements[2].value,
              listId: idUpdate,
            }
            console.log(parseData)
            let getSubmitEdit = document.getElementById("submitEdit")
            getSubmitEdit.addEventListener("click", () => {
              let getFormElements = getForm.elements
              console.log(getFormElements)
              console.log("elements 0:" + getFormElements["newTitle"].value)
              console.log(
                "elements 1:" + getFormElements["newDescription"].value,
              )

              getFormElements[0].value = getFormElements["newTitle"].value
              getFormElements[1].value = getFormElements["newDescription"].value
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
            let getButtonDelete = document.getElementById("deleteTask")
            getButtonDelete.addEventListener("click", trashButton)
            let getButtonExit = document.getElementById("exit")
            getButtonExit.addEventListener("click", closeForm)
          } else {
            x.style.display = "none"
          }
        }
        let closeForm = (e) => {
          e.preventDefault()
          let x = document.getElementById("modal-dialog")
          x.style.display = "none"
        }
        let trashButton = (e) => {
          e.preventDefault()
          let getConfirmModal = document.getElementById("modal-dialog")
          let createModal2 = document.createElement("article")
          createModal2.id = "confirmation"
          getConfirmModal.insertAdjacentElement("beforebegin", createModal2)
          let getConfirm = document.getElementById("confirmation")
          getConfirm.innerHTML += `<p> Are you sure you want to delete? <button id="unsure">Oops, nope!</button>\n<button id="absolutely">Yes, for sure!</button></p>`

          let yes = document.getElementById("absolutely")
          let no = document.getElementById("unsure")
          console.log(queryArticles[i].id)
          let dataDelete = queryArticles[i].id
          let maybeDelete = (e) => {
            e.preventDefault()
            if (e.target.id == "absolutely") {
              //check event
              console.log("this is clicked", dataDelete)
              return deleteDataAPI(dataDelete)
            } else {
              getConfirm.innerHTML = `<p> Okay, cancelled.</p>`
              window.setTimeout(() => {
                getConfirm.remove()
                // getModal.remove()
              }, 2000)
              return null
            }
          }
          no.onclick = maybeDelete
          yes.onclick = maybeDelete
        }

        let getIdEdit = queryArticles[i].querySelector("button")

        console.log("edit" + getIdEdit)

        getIdEdit.addEventListener("click", getArticleClick)

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
