// loops sin control, no entender el closure
// siempre muestra 10, 10 veces.
// var se reasigna con 10 todas las veces.
// var tiene scope en toda la funcion
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();

// funciona 
// let soluciona el problema
// let solo tiene scope en el ciclo for
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
