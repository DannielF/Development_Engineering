// imprimiremos el evento click para ver toda su informacion
const accion = (event) => console.log(event)

$0.addEventListener('click', accion)

/* Bucamos la propiedad llamada target que es la que nos dice cual elemento 
se esta ejecutando, target representa un nodo cuando utilizamos createElement
es igual a lo que esta dentro del target 


Dentro del target hay una propiedad que se llama nodeName que contiene
el nombre del nodo


*/

const accion = (event) => { console.log(`Hola desde ${event.currentTarget.nodeName}`) }

//obtenemos el elemento al cual le agregaremos el evento

const avocado = document.querySelector('id');

//obtenemos el padre del elemento

const card = document.querySelector('id');

//obtenos el body

const body = document.querySelector('body')

//agregamos el mismo evento a cada nodo

avocado.addEventListener('click', accion);

card.addEventListener('click', accion);

body.addEventListener('click', accion)

/* cuando damos click en el elemento hijo 
   vemos que aunque el evento sucedio en el primer elemento este
   se propago hasta el elemento padre que seria hasta el elemento
   mas externo que tambien esta escuchando el mismo evento que en
   este caso es el body

    Hola desde + H2
    Hola desde + DIV
    Hola desde + BODY

   Y si unicamente damos click en un elemento padre del que anteriormente
   le dimos click vemos como el evento propaga desde ahi hasta
   el elemento mas externo en este caso el body

   Hola desde + DIV
   Hola desde + BODY

    Entonces sabremos que desde el elemento que inicia hacia arriba
    el evento se propagara
*/

/*

    La propagacion de eventos se puede detener usando la misma web API

    La forma de deterlo es usando el método stopPropagation() que viene
    dentro del argumento event que cualquier evento nos provee

*/


const accion = (event) => { console.log(`Hola desde ${event.currentTarget.nodeName}`) }

//obtenemos los elementos y le aplicamos los eventos
const body = document.querySelector('body');

body.addEventListener('click', accion);

const h3 = document.querySelector('h3');

h3.addEventListener('click', (evento) => {

  //utilizamos el metodo stopPropagation y con esto pararemos la propagacion
  // es como decirle al elemento que solo queremos ejecutarlo a el y a los demas no
  evento.stopPropagation()
  console.log(`Hola desde: + ${evento.currentTarget.nodeName}`)



})