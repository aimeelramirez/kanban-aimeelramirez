// read data

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
    // console.log("check:" + JSON.stringify(dataRead.items))

    queryTasks.innerHTML +=
      ` <article><strong>` +
      dataRead.items[i].id +
      `</strong>` +
      `<h3>` +
      dataRead.items[i].title +
      `</h3>` +
      `<p>` +
      dataRead.items[i].description +
      `</p>` +
      `<p>
            <input
              type="date"
              id="date-created"
              name="date-created"
             value="` +
      dataRead.items[i].dueDate +
      `"/>
          </p></article>`
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
      ` <article><strong>` +
      dataRead.items[i].id +
      `</strong>` +
      `<h3>` +
      dataRead.items[i].title +
      `</h3>` +
      `<p>` +
      dataRead.items[i].description +
      `</p>` +
      `<p>
            <input
              type="date"
              id="date-created"
              name="date-created"
             value="` +
      dataRead.items[i].dueDate +
      `"/>
          </p></article>`
  }
}
const getComplete = (queryTasks, dataRead) => {
  let completeTasks = queryTasks.querySelectorAll("article")
  let getLastArticle = completeTasks[completeTasks.length - 1]
  getLastArticle.remove()
  for (let i = 0; i < dataRead.items.length; i++) {
    utilSort(dataRead)
    // console.log("check:" + JSON.stringify(dataRead.items))
    queryTasks.innerHTML +=
      ` <article><strong>` +
      dataRead.items[i].id +
      `</strong>` +
      `<h3>` +
      dataRead.items[i].title +
      `</h3>` +
      `<p>` +
      dataRead.items[i].description +
      `</p>` +
      `<p>
            <input
              type="date"
              id="date-created"
              name="date-created"
             value="` +
      dataRead.items[i].dueDate +
      `"/>
          </p></article>`
  }
}

//update

//delete
//select article
const getDeleteTask = (dataRead) => {
  console.log("this is to be selected to delete")
  //get queryArticles/tasks
  //let currentTask = ""
  //store data
  const storeData = []
  for (let j = 0; j < dataRead.length; j++) {
    //to get the store
    console.log(dataRead[j].items)
    let queryArticles = document
      .getElementById("backlog")
      .getElementsByTagName("article")
    // console.log(queryArticles)
    for (let i = 0; i < queryArticles.length; i++) {
      //mouseOver
      let logMouseOver = () => {
        queryArticles[i].style.cssText =
          "transform: scale(1.075);  box-shadow: 0 10px 6px -6px black; transition-duration: 0.4s; border-radius: 0.5rem;"
      }
      //mouseOut
      let logMouseOut = () => {
        queryArticles[i].style.cssText = "width:100%;"
      }
      //get if article was clicked
      const getClickTask = () => {
        dataRead[j].items.map((ele, index) => {
          //get to match the task to the query click
          let stringGet = queryArticles[i].querySelector("strong").innerText
          let compareId = stringGet.toString()
          console.log(compareId + ":" + JSON.stringify(ele.id))
          let parseNumId = JSON.stringify(ele.id)
          if (parseInt(compareId) == parseInt(parseNumId)) {
            //set the i to current task to get in arrow
            //currentTask= i
            let getMain = document.querySelector("nav")
            let createModal = document.createElement("article")
            createModal.id = "message"
            getMain.insertAdjacentElement("beforebegin", createModal)
            let getModal = document.getElementById("message")
            getModal.innerHTML = `<p> Are you sure you want to delete? <button id="unsure">Oops, nope!</button><button id="absolutely">Yes, for sure!</button></p>`
            let yes = document.getElementById("absolutely")
            let no = document.getElementById("unsure")
            let dataDelete = parseInt(parseNumId)

            let maybeDelete = (e) => {
              e.preventDefault()
              if (e.target.id == "absolutely") {
                //check event
                console.log("this is clicked", dataDelete)
                return deleteDataAPI(dataDelete)
              } else {
                getModal.innerHTML = `<p> Okay, cancelled.</p>`
                return null
              }
            }
            no.addEventListener("click", maybeDelete)
            yes.addEventListener("click", maybeDelete)
          }
        })
      }
      //on click on tasks
      queryArticles[i].addEventListener("click", getClickTask)
      //on mouse event
      queryArticles[i].onmouseover = logMouseOver
      queryArticles[i].onmouseout = logMouseOut
    }
  }
}
