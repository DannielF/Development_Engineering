// Operador de reposo, el cual puede extraer las propiedades
// de un objeto que aun no se ha construido

const obj = {
  name: 'daniel',
  age: 28,
  country: 'CO',
};
// utilizar el operador de reposo para separar los elementos
// todo lo demas se pone en all
let { name, ...all} = obj;
console.log(name, all);

// Utilizando las propiedades de propagacion vamos a poder
// unir cuantos elementos queramos de objetos a un nuevo objeto

const obj = {
  name: 'oscar',
  age: 30,
};
// anidar estos elementos
const obj1 = {
  ...obj,
  country: 'CO',
};

console.log(obj1);

// promise.finally, saber cuando ha terminado el llamado y 
// poder ejecutar alguna funcion o logica de codigo

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) // validar si es verdad
      ? setTimeout(() =>  resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  });
};
// llamar funcion
helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  // llamar a lo que termino
  // ejecutar algo segun sea el caso
  .finally(() => console.log('Finish'))

// Como agrupar bloques del regex y poder acceder
// a cada uno de ellos

// grupos hechos
//                  Año [1]    Mes [2]     Dia [3]
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //literal notation's
// hacer el match para saber si los datos estan establecidos
const match = regexData.exec('2018-04-20');

// accediendo a los datos
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
