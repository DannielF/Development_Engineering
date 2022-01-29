var hello = 'hello'; //global scope
let world = 'hello world';
const helloworld = 'Hello World';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloworld);
};

anotherFunction();

// bad practice
const helloWorld = () => {
  globalVar = 'Im global';
};
helloWorld();
console.log(globalVar);

const helloGlobal = () => {
  var myGlobal = globalVar = 'im global';
};
helloGlobal();
console.log(globalVar);
