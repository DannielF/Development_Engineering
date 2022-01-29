// callbacks and request to API's
// It's going to execute node on the console, in this case.
// We use xmlhttprequest and no fetch Because we are using callbacks

// instance - petition
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest(); // Objects reference
  xhttp.open('GET', url_api, true); // Generate aperture, bring information. true == Asynchronous on
  // Hear a element - If this change happens it's going to
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      // Error's first and the second is the value that create -result-
      callback(null, JSON.parse(xhttp.responseText)); // JSON's result parse to txt
    } else {
      const error = new Error('Error ' + url_api);
      return callback(error, null); // null is not sending anything
    }
  };
  // Here, request is sended
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
