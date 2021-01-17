const include = (file) => {
  let script = document.createElement("script")
  script.src = file
  script.type = "text/javascript"
  script.defer = true
  //   let htmlEnd = document.querySelector("head")
  //   htmlEnd.id = "script-js"
  getScript(script)
}
const getScript = (script) => {
  let htmlScript = document.getElementById("index")
  htmlScript.insertAdjacentElement("afterend", script)
}
//get files to read more than one
include("js/api.js")
include("js/data.js")
