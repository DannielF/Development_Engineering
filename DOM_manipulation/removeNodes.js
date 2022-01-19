// remove child nodes from a parent node

// get the node to remove
const nodoAEliminar = document.querySelector("selector")

// select the parent node
const parentElement = nodoAEliminar.parentElement

// delete the child node
parentElement.removeChild(nodoAEliminar)

"<------------------------->"

//remove() new version of removeChild()
// get the node to remove
const nodoAEliminar = document.querySelector("selector")

// delete the node
nodoAEliminar.remove()

"<------------------------->"

//replaceChild()
// select the parent node
const padre = document.querySelector("selector")

// select the node to replace
const toReplace = document.querySelector("selector")

// Create a new node
const node = document.createElement("h1")
// put some text in the new node
node.textContent = "Un texto cualquiera"

// replace the node
parent.replaceChild(node, toReplace)