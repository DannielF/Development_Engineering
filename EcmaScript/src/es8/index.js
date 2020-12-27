// object entries, devuelve la clave y los valores de una matriz
// saber cuantos valores contiene nuestro arreglo

const data = {
  frontend: 'daniel',
  backend: 'juan',
  design: 'oscar',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// object values, me devuelve los valores de un objeto a un arreglo
// los devuelve como strings
// realizar conversiones

const data = {
  frontend: 'daniel',
  backend: 'juan',
  design: 'oscar',
};

const values = Object.values(data);
const key = Object.keys(data); // nombres de las propiedades
console.log(key);
console.log(values);
console.log(values.length);

// padding, como podemos anteponer o agregar una cadena
// vacia o elementos a este string
// generar transformaciones

const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, '-----')); // se añade al final

// llamado trailing commas
// dejar la coma al final para evitar errores

const obj = {
  name: 'daniel',
};