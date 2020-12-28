// flat nos permitira devolver una matriz con cualquier
// submatriz aplanada y entender como estan estructurados

let array = [1, 2, 3, [1, 2, 3[1, 2, 3]]];

console.log(array.flat(2));
//              nivel de profundidad

// flatmap me permitira mapear cada elemento y despues
// pasarle una funcion y aplanarlo segun el resultado

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// trimstart  el cual me va a permitir eliminar los espacios en blanco
// de un string

let hello = '      hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello World     ';
console.log(hello);
console.log(hello.trimEnd());

// optional catch binding
// podemos pasar de forma opcional el parametro de error
// al valor de catch

try {
  
} catch {
  error
}

// from entries
// el cual va a transformar clave-valor en un objeto
//              clave   valor
let entries = [['name','daniel'], ['age',28]];
console.log(Object.fromEntries(entries));

// symbol el cual nos va permitir acceder a una descripcion
// 
let mySymbl = `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);