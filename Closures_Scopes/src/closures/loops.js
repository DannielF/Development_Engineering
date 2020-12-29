// loops sin control, no entender el closure
// siempre muestra 10, 10 veces.
// var se reasigna con 10 todas las veces.
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
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
