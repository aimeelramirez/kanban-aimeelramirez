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
      ` <article>` +
      dataRead.items[i].id +
      `)` +
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
      ` <article>` +
      dataRead.items[i].id +
      `)` +
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
      ` <article>` +
      dataRead.items[i].id +
      `)` +
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
