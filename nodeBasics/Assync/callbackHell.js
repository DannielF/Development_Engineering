function talk(name, myCallback) {
  setTimeout(function () {
    console.log("Hello, " + name);
    myCallback(name);
  }, 1000);
}
function talk(callbackTalk) {
  setTimeout(function () {
    console.log("bla, bla, bla, bla");
    callbackTalk();
  }, 1000);
}
function goodBye(name, anotherCallback) {
  setTimeout(function () {
    console.log("Bye", name);
    anotherCallback();
  }, 1000);
}

function conversation(name, times, callback) {
  if (times >= 0) {
    talk(function () {
      conversation(name, --times, callback);
    });
  } else {
    goodBye(name, callback);
  }
}

console.log("Starting");
talk("John Doe", function (name) {
  conversation(name, 5, function () {
    console.log("End process");
  });
});