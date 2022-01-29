/**
 * Created a new tag element
 * has only been created, not added to the DOM
 * 
 **/
const etiquetaH1 = document.createElement("h1");

/**
 * Created a text node
 * has only been created, not added to the DOM
*/
const texto = document.createTextNode("¡Hola, Mundo!");

/**
 * Add a child at the end of the parent
 * 
*/

// Get the parent element
const parentElement = document.querySelector("selector");
// Create the child element
const h3 = document.createElement("h3");
// Create the text node
const texto = document.createTextNode("Hola!");
// Insert the text node into the child element
h3.appendChild(h3);
// Insert the child element into the parent element
parentElement.appendChild(h3);


// Get the parent element
const parentElement = document.querySelector("selector");
// Insert the child element into the parent element
parentElement.append("agrego un texto", document.createElement("div"));


/**
 * @function InsertBefore()
 * 
 */

// Get the parent element
const parentElement = document.querySelector("selector");
// Create the child element
const titulo = document.createElement("h1");
// get the reference of the element I want to insert before
const referencia = document.querySelector("selector");
// We insert the element before the reference
parentElement.insertBefore(titulo, referencia);


/**
 * @function InsertAdjacentElement()
 * beforebegin => Inserts the element before the reference element
 * afterbegin => Inserts the element as the first child of the reference element
 * beforeend => Inserts the element as the last child of the reference element
 * afterend => Inserts the element after the reference element
*/

// Get the parent element
const parentElement = document.querySelector("selector")
// Create the element
const nodo = document.createElement("span")
parentElement.insertAdjacentElement("beforebegin", nodo)