// callbacks and request to API's
// It's going to execute node on the console, in this case.
// We use xmlhttprequest and no fetch Because we are using callbacks

// instance - petition
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest(); // Objects reference
    xhttp.open('GET', url_api, true); // Generate aperture, bring information. true == Asynchronous on
    // Hear a element - If this change happens it's going to
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        // Handle a problem with a promise
        resolve(JSON.parse(xhttp.responseText))
        reject(new Error('Error', url_api))
      }
    });
    // Here, request is sended
    xhttp.send();
  });
}
// Using module.exports because I'm using node and node still using common vs
module.exports = fetchData;
