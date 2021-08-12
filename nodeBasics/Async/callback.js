function itsAsync(myCallback) {
  setTimeout(function () {
    console.log("It's asynchronous ");
    myCallback();
  }, 1000);
};

console.log('Start Process...');
itsAsync(function () {
  console.log('Finish process...');
});