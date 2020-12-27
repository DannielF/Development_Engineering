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

// trailing commas
// dejar la coma al final para evitar errores

const obj = {
  name: 'daniel',
};

// Async Await
// 1. crear una funcion 2. luego una promesa e invocarla

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false) // para poder mostrar un error
      ? setTimeout(() => resolve('hello world'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

// async forma correcta
// try -> vamos a probar sobre lo que va a ejecutar y en 
// dado caso que esto tenga un error u otro valor que no
// coincida con la logica que estamos haciendo, va a caer
// en el try catch y vamos a poder capturar este error.
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();