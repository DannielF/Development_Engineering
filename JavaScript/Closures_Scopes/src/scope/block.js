// block scope
const fruits = () => {
  if (true) {
    var fruits1 = 'apple'; // se puede acceder en toda la funcion
    let fruits2 = 'banana'; // dentro del block scope
    const fruits3 = 'kiwi'; // dentro del block scope
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
};

fruits();

let x = 1; // valor global
{
  let x = 2; // valor local
  console.log(x);
}
console.log(x);

// se esta reasignando var con el ultimo valor 10.
// se imprime entonces 10, 10 veces.
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();

// forma correcta
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
