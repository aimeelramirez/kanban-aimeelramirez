// read data
const getBackLog = (queryTasks, dataRead) => {
  console.log(queryTasks.id + ":" + dataRead.items)
  // let getId = document.getElementById("backlog")
  //   let getBackLog = document.getElementById("backlog");
  let backlogTasks = queryTasks.querySelectorAll("article")
  let getLastArticle = backlogTasks[backlogTasks.length - 1]
  getLastArticle.remove()
  for (let i = 0; i < dataRead.items.length; i++) {
    //TODO sort the ids
    queryTasks.innerHTML +=
      ` <article><h3>` +
      dataRead.items[i].title +
      `</h3>
          <p>` +
      dataRead.items[i].description +
      `</p>
          <p>
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
    //TODO sort ids
    queryTasks.innerHTML +=
      ` <article><h3>` +
      dataRead.items[i].title +
      `</h3>
          <p>` +
      dataRead.items[i].description +
      `</p>
          <p>
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
  //TODO sort ids
  //   let sortData = []
  //   for (let key in dataRead.items) {
  //     sortData.push({
  //       id: dataRead.items[key].id,
  //       title: dataRead.items[key].title,
  //       description: dataRead.items[key].description,
  //     })
  //   }

  for (let i = 0; i < dataRead.items.length; i++) {
    // dataRead.items.sort(function (a, b) {
    //   return a.id - b.id
    // })
    // console.log("check:" + JSON.stringify(dataRead.items))

    queryTasks.innerHTML +=
      ` <article><h3>` +
      dataRead.items[i].title +
      `</h3>
          <p>` +
      dataRead.items[i].description +
      `</p>
          <p>
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
