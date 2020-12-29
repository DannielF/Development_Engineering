// elevar las declaraciones
// hoisting en las declaraciones y no en las inicializaciones
a = 2;
var a;
console.log(a); // 2

console.log(a); // undefined
var a = 2;

function nameOfDog(name) {
  console.log(name);
}

nameOfDog('Elmo');

// contexto de ejecuccion
// las variables y funciones son puestas en memoria antes que todo