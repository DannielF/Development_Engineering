function otherFunction() {
  itsBroken();
}
function itsBroken() {
  return 3 + z;
}
function itsBrokenAsync(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error('Error in async function');
      cb(err);
    }
  });
}
try {
  //otherFunction();
  itsBrokenAsync(function (err) {
    console.log('There is an error');
  })
} catch (err) {
  console.error('Something going wrong');
  console.error(err);
  console.log('But the error it is has been caught')
}
console.log('This is the end');