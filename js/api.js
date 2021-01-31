//api calls
"use strict"
//let dataRead = ""

let dbData = []
let data = ""
let queryCheck = false
let itemsList = ""
let parseData = ""
//create a readable stream
const token = "5b1064585f4ab8706d275f90"
const endPoint = "api/lists?accessToken="
const endPointPost = "api/items?accessToken="
const endPointDel = "api/items/"
//get buttons on knowing to call
let getBackLogButton = document.getElementById("backlog-button")
let getImplementationButton = document.getElementById("implementation-button")
let getCompleteButton = document.getElementById("complete-button")

const url =
  "https://knowledgeable-inquisitive-tent.glitch.me/" + endPoint + token
const postUrl =
  "https://knowledgeable-inquisitive-tent.glitch.me/" + endPointPost + token

let getIcon = document.getElementById("mode")
getIcon.className = "icon-moon" //async and await FETCH GET DATA

document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden"
    document.querySelector("#spinner").style.visibility = "visible"
  } else {
    document.querySelector("#spinner").style.display = "none"
    document.querySelector("body").style.visibility = "visible"
  }
}
const getDataAPI = async () => {
  await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  }).then((data) => {
    parseData = data.json()
    console.log(parseData)
    parseData
      .then((result) => {
        console.log(result)
        //load on page
        onSuccess(result)
        //get data
        dbData.push(result)
        data = dbData[0]
        //empty array
        dbData = []
        // console.log(dataParse)
        console.log(data)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  await fetch(postUrl, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  })
    .then((data) => {
      let parseData = ""
      parseData = data.json()
      //  parseData = itemsList
      //delete data (optional)

      getDeleteReadAPI(parseData)
    })
    .catch((error) => {
      //get error
      console.log(error)
    })
}
// EVENTS //
//get data
getDataAPI()

const getDeleteReadAPI = (parseData) => {
  console.log("parse: " + parseData)
  parseData
    .then((item) => {
      // console.log("item: " + JSON.stringify(item))
      console.log(queryCheck)

      if (queryCheck == true) {
        getDeleteTask(item)
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

//on READ API DATA
const onSuccess = async (dataRead) => {
  console.log("Waiting on data to be read, thank you for your patience...")
  if (dataRead != "") {
    //get the titles from api
    let sections = document.querySelectorAll("section")
    // let queryTitles = []
    queryCheck = true
    for (let j = 0; j < sections.length; j++) {
      // let queryTitles = sections[j]
      //.querySelector("article").querySelector("h2")

      //console.log(sections[j])
      //  let showTitles = queryTitles.textContent.toUpperCase()
      // if (showTitles == dataRead[j].title.toUpperCase()) {
      //   queryTitles.innerHTML = dataRead[j].title
      // }
      //to make it readable on columns await until getting the data
      let queryTasks = sections[j]

      //console.log("query:" + sections[j].id)
      if (queryTasks.id == "backlog") {
        await getBackLog(queryTasks, dataRead[0])
      } else if (queryTasks.id == "implementation") {
        await getImplementation(queryTasks, dataRead[1])
      } else if (queryTasks.id == "complete") {
        console.log(queryTasks.id)
        await getComplete(queryTasks, dataRead[2])
      }
    }
  } else {
    //if empty from api
    console.log("Error on data on load.")
  }
}

//POST DATA to Api
const postDataAPI = async (data, e) => {
  console.log("post")
  //create a modal or pop-up on nav
  let getModal = document.getElementById("modal-dialog")
  // let createModal = document.createElement("article")
  // createModal.id = "message"
  // getMain.insertAdjacentElement("beforebegin", createModal)
  // let getModal = document.getElementById("message")
  getModal.innerHTML =
    // `<article><p> Sent, please wait until being added!</p><p>` +
    // JSON.stringify(data) +
    // `</p>
    //  </article>
    `<p id="spinner"><strong>spinner</strong></p>`
  let options = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
  await fetch(postUrl, options)
    .then((dataSent) => {
      console.log(dataSent)

      // i need to reload the form OR get a modal
      let onReload = (e) => {
        window.setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
      onReload()
    })
    .catch((error) => {
      //get error
      throw console.error(error)
    })
}

//update API
const putDataAPI = async (data, index) => {
  console.log(data.description)
  const patchUrl =
    "https://knowledgeable-inquisitive-tent.glitch.me/" +
    endPointDel +
    parseInt(index) +
    "?accessToken=" +
    token
  let options = {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      listId: data.listId,
    }),
  }
  await fetch(patchUrl, options)
    .then((dataSent) => {
      console.log(dataSent)

      // i need to reload the form OR get a modal
      let onReload = (e) => {
        window.setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
      onReload()
    })
    .catch((error) => {
      //get error
      throw console.error(error)
    })
}
//DELETE DATA to Api
const deleteDataAPI = async (data) => {
  console.log("delete")
  const deleteUrl =
    "https://knowledgeable-inquisitive-tent.glitch.me/" +
    endPointDel +
    data.id +
    "?accessToken=" +
    token
  //create a modal or pop-up on nav
  let getModalDialog = document.getElementById("modal-dialog")
  getModalDialog.style.display = "flex"
  // let getModal = document.getElementById("message")
  let getReadData = JSON.stringify(data)
  console.log(getReadData)
  getModalDialog.innerHTML =
    `<article id="deletedModal"><h2> Deleted! </h2><br/><p> Title:` +
    data.title +
    `</p><p> Description: ` +
    data.description +
    `</p></article>`
  let options = {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }
  await fetch(deleteUrl, options)
    .then((dataSent) => {
      console.log(dataSent)
      // i need to reload the form OR get a modal
      let onReload = (e) => {
        window.setTimeout(() => {
          window.location.reload()
        }, 2000)
      }
      onReload()
    })
    .catch((error) => {
      //get error
      throw console.error(error)
    })
}
//VALIDATE if empty
const validateData = (e, i) => {
  e.preventDefault()
  //after article appears
  //reset id
  let newData = ""
  //boolean to check to send post
  let valid = false
  // let elementsForm = document.forms["newerTask"]
  let getArticleDarkMode = document.getElementsByClassName("articleDarkMode")
  let elementsForm = getArticleDarkMode[0].childNodes[0].elements

  console.log(elementsForm)

  //create a modal or pop-up on nav
  let getModalDialog = document.getElementById("modal-dialog")
  getModalDialog.style.display = "flex"
  //let createModal = document.createElement("article")
  // getModalDialog.insertAdjacentElement("afterend", createModal)

  console.log(elementsForm)
  for (let key in elementsForm) {
    //  console.log(key)

    if (key <= 3) {
      if (
        elementsForm[0].value != "" &&
        elementsForm[1].value != "" &&
        elementsForm[2].value != ""
      ) {
        newData = {
          title: elementsForm[0].value,
          description: elementsForm[1].value,
          dueDate: elementsForm[2].value,
          listId: i,
        }
        valid = true
      }
    } else if (
      elementsForm[0].value == "" &&
      elementsForm[1].value == "" &&
      elementsForm[2].value == ""
    ) {
      getModalDialog.innerHTML = `<p id="spinner"><strong>spinner</strong></p>`

      // setTimeout(() => {
      getModalDialog.innerHTML = `<article><p><button id="exit"  type="button"><strong>Exit</strong></button></p>Please fill out all form inputs before submitting</article>`
      // }, 2000)
      // setTimeout(() => {
      //   getModalDialog.innerHTML = ""
      // }, 3000)
      getExitModal()
    } else if (elementsForm[0].value == "") {
      getModalDialog.innerHTML = `<p id="spinner"><strong>spinner</strong></p>`

      let message = "error on: task title"
      // setTimeout(() => {
      getModalDialog.innerHTML =
        `<article><p><button id="exit"  type="button"><strong>Exit</strong></button></p>` +
        message +
        `</article>`
      getExitModal()

      // }, 2000)
      // // setTimeout(() => {
      // //   getModalDialog.innerHTML = ""
      // // }, 3000)
      // break
    } else if (elementsForm[1].value == "") {
      getModalDialog.innerHTML = `<p id="spinner"><strong>spinner</strong></p>`

      let message = "error on: task description"
      // window.setTimeout(() => {
      getModalDialog.innerHTML =
        `<article><p><button id="exit" type="button"><strong>Exit</strong></button></p>` +
        message +
        `</article>`
      getExitModal()
      // console.log(message)
      // }, 2000)
      // setTimeout(() => {
      //   getModalDialog.innerHTML = ""
      // }, 3000)
      // break
    } else if (elementsForm[2].value == "") {
      getModalDialog.innerHTML = `<p id="spinner"><strong>spinner</strong></p>`

      let message = "error on: task date"
      // setTimeout(() => {
      getModalDialog.innerHTML =
        `<article> <p><button id="exit"  type="button"><strong>Exit</strong></button></p>` +
        message +
        `</article>`
      getExitModal()

      //   console.log(message)
      // }, 2000)
      // setTimeout(() => {
      //   getModalDialog.innerHTML = ""
      // }, 3000)
      // break
    }
  }
  if (valid == true) {
    //remove the modal
    getModalDialog.innerHTML = ""

    postDataAPI(newData, e)
  } else {
    //idk might happen since if oddly it passes a true if false
    console.log("catch this error.")
  }
}
const getExitModal = () => {
  let getButtonExit = document.getElementById("exit")
  let closeForm = (e) => {
    e.preventDefault()
    let x = document.getElementById("modal-dialog")
    let getConfirm = document.getElementById("confirmation")
    if (getConfirm != null) {
      getConfirm.innerHTML = ""
    }
    x.innerHTML = ""
  }
  getButtonExit.addEventListener("click", closeForm)
}
//GET COLUMNS
const sendData = (e) => {
  e.preventDefault()
  //get submit button variations
  if (e.target.id === getBackLogButton.id) {
    console.log("clicked 1: " + e.target.id)
    // getBackLogButton.disabled = true
    createTaskCard("backlog")
    let getTaskSent = document.getElementById("taskSent")
    //event on created button
    getTaskSent.addEventListener("click", (e) => {
      validateData(e, 1)
    })
  } else if (e.target.id === getImplementationButton.id) {
    console.log("clicked 2: " + e.target.id)
    createTaskCard("implementation")
    let getTaskSent = document.getElementById("taskSent")
    // getTaskSent.addEventListener("click", validateData)
    getTaskSent.addEventListener("click", (e) => {
      e.preventDefault()
      validateData(e, 2)
    })
  } else if (e.target.id === getCompleteButton.id) {
    console.log("clicked 3: " + e.target.id)
    createTaskCard("complete")
    let getTaskSent = document.getElementById("taskSent")
    getTaskSent.addEventListener("click", (e) => {
      e.preventDefault()
      validateData(e, 3)
    })
  }
}

//CREATE form modal
//create a new task note
const createTaskCard = (name) => {
  // console.log(name)
  let getArticleTask = document.getElementById(name).querySelector("article")
  // console.log("article : " + getArticleTask)
  let articleTask = document.createElement("article")
  articleTask.id = "new"
  getArticleTask.insertAdjacentElement("afterend", articleTask)
  createForms(name)
}
const createForms = () => {
  let getArticleTask = document.getElementById("new")
  let createForm = document.createElement("form")
  createForm.name = "newerTask"
  getArticleTask.insertAdjacentElement("beforeend", createForm)

  let createTitle = document.createElement("input")
  createTitle.setAttribute("required", "")
  createTitle.placeholder = "Task title here"
  let createDescription = document.createElement("textarea")
  createDescription.setAttribute("required", "")

  createDescription.placeholder = "Task description here"
  let createDate = document.createElement("input")
  createDate.type = "date"
  createDate.setAttribute("required", "")

  let createSubmitTask = document.createElement("button")
  createSubmitTask.id = "taskSent"

  createForm.insertAdjacentElement("afterend", createSubmitTask)
  createForm.insertAdjacentElement("beforeend", createTitle)
  createForm.insertAdjacentElement("beforeend", createDescription)
  createForm.insertAdjacentElement("beforeend", createDate)
  //reset id
  getArticleTask.id = ""
  getArticleTask.className = "articleDarkMode"
}
// let editData = () => {
//   // getArticleTask.id = "new"
//   //reset id
// }

//post data
///idk why it wants me to write it this way but it worked after just setting the click on loop
document.addEventListener("click", function () {
  document
    .querySelector("main section#implementation article button")
    .addEventListener("click", sendData)
  document
    .querySelector("main section#backlog article button")
    .addEventListener("click", sendData)
  document
    .querySelector("main section#complete article button")
    .addEventListener("click", sendData)
})

//dark mode or light mode
let count = 0
let getIconMode = document.getElementById("mode")

getIcon.style.color = "white"
localStorage.setItem("mode-icon", getIconMode.style.color)

getIconMode.addEventListener("click", (e) => {
  e.preventDefault()
  let element = document.body
  let elementNav = document.querySelector("header")
  console.log(element)
  getIconMode = document.getElementById("mode")
  let elementSection = document.querySelectorAll("section")
  let elementArticle = document.querySelectorAll("article")

  let elementH1 = document.querySelector("h1")
  elementH1.style.color = "black"
  localStorage.setItem("mode-icon", getIconMode.style.color)

  if (count < 1) {
    localStorage.removeItem("mode-icon")
    //element.style.backgroundColor = "black"
    elementNav.style.backgroundColor = "grey"
    element.style.backgroundColor = "black"
    elementNav.style.color = "black"
    elementH1.style.color = "white"

    for (let i = 1; i < elementSection.length; i++) {
      elementSection[i].style.backgroundColor = "#1e2326"
      let elementH2 = elementSection[i].querySelectorAll("h2")
      elementH2.forEach((item) => {
        item.style.color = "white"
      })
      localStorage.setItem(
        "mode-section",
        elementSection[i].style.backgroundColor,
      )
    }

    localStorage.setItem("mode-h1", elementH1.style.color)
    localStorage.setItem("mode", element.style.backgroundColor)
    localStorage.setItem("mode-header", elementNav.style.cssText)

    count += 1

    console.log("dark mode: " + count)
    getIconMode.className = "icon-sun"
  } else if (count == 1) {
    // localStorage.getItem("mode")
    // localStorage.getItem("mode-header")
    // localStorage.removeItem("mode-header")
    // localStorage.removeItem("mode")

    // elementNav.style.backgroundColor = "#26A8F9"
    // element.style.backgroundColor = "white"
    element.style.cssText = ``
    elementNav.style.cssText = ``
    elementH1.style.cssText = ``

    for (let i = 1; i < elementSection.length; i++) {
      elementSection[i].style.cssText = ""
      let elementH2 = elementSection[i].querySelectorAll("h2")
      elementH2.forEach((item) => {
        item.style.color = ""
      })
    }
    elementArticle.forEach((item, key) => {
      if (item.id != "") {
        item.style.backgroundColor = ""
      }
    })

    // elementNav.style.backgroundColor = "grey"
    //localStorage.setItem("mode", element.style.backgroundColor)
    // localStorage.setItem("mode-header", elementNav.style.backgroundColor)

    //localStorage.getItem("mode")
    //localStorage.getItem("mode-header")
    localStorage.clear()
    count = 0

    console.log("light mode: " + count)
    getIconMode.className = "icon-moon"
  }
})
//edit data (optional)
