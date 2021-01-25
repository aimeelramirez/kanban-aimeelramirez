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
      ` <article><span id='${dataRead.items[i].id}'>` +
      dataRead.items[i].id +
      `</span>` +
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
      ` <article><span id='${dataRead.items[i].id}'>` +
      dataRead.items[i].id +
      `</span>` +
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
    // console.log("check:" + JSON.stringify(dataRead.items))
    queryTasks.innerHTML +=
      ` <article><span id='${dataRead.items[i].id}'>` +
      dataRead.items[i].id +
      `</span>` +
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
  console.log("content still loading please wait....")
  let queryArticles = ""
  //getting id for sections
  //to get the store
  queryArticles = document.querySelectorAll("article")

  for (let j = 0; j < dataRead.length; j++) {
    console.log("loading....")
    for (let i = 0; i < queryArticles.length; i++) {
      if (queryArticles[i].className == "") {
        //   console.log("articles:", queryArticles[i])
        //  console.log("check", dataRead[j])
        //mouseOver
        let logMouseOver = () => {
          queryArticles[i].style.cssText =
            "transform: scale(1.075);  box-shadow: 0 10px 6px -6px black; transition-duration: 0.4s; border-radius: 0.5rem;"
          console.log("loading complete... now you can select to delete")
        }
        //mouseOut
        let logMouseOut = () => {
          queryArticles[i].style.cssText = "width:100%;"
        }
        //get if article was clicked
        const getClickTask = () => {
          //MAP
          dataRead.map((ele, index) => {
            //get to match the task to the query click
            console.log("ele: " + JSON.stringify(ele))
            // let stringGet = queryArticles[i].querySelector("span").innerText
            let compareId = queryArticles[i]
              .querySelector("span")
              .innerText.toString()
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
              getModal.innerHTML = `<p> Are you sure you want to delete? <button id="unsure">Oops, nope!</button>\n<button id="absolutely">Yes, for sure!</button></p>`
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
}
