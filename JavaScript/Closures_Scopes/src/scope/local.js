// Local scope
const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld();

// Lexical scope - ambito lexico
var scope = 'im global';

const functionScope = () => {
  var scope = 'im just a local';
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
