// callbacks y peticion a API's
// se va a ejecutar sobre node o la consola, en este caso
// se utiliza xmlhttprequest y no fetch por que estamos usando callbacks

//instanciar
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData (url_api, callback) {
  let xhttp = new XMLHttpRequest(); // generar la referencia al objeto
  xhttp.open('GET', url_api, true); // generando apertura, traer informacion. true == activar asincronismo
  // escuchando el elemento
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      // el primero es el error y el segundo el valor que se desencadena -resultado-
      callback(null, JSON.parse(xhttp.responseText));
    } else {
      const error = new Error('Error ' + url_api);
      return callback(error, null); // null no se esta mandando ningun resultado
    }
  };
  // aqui se envia la solicitud
  xhttp.send();
}
