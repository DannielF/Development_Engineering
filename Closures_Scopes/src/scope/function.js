// local scope inside a function
const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();

// bad practice
const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  //  let y = 2;
  console.log(x);
  console.log(y);
};

anotherFunction();
