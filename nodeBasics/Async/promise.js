function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('hello, ' + name);
      resolve(name);
    }, 1000);
  });
}
function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('bla bla bla bla...');
      resolve(name);
    }, 1000);
  });
}
function adios(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('adios', name);
      resolve(name);
    }, 1000);
  });
}

//lo que se ejecutara....
console.log('Process starting...')
hello('John Doe')
  .then(talk)
  .then(talk)
  .then(talk)
  .then(talk)
  .then(adios)
  .then((name) => {
    console.log('End process');
  })
  //cualquier hilo de ejcucion lo llevará al catch para ejecutar su funcion
  .catch(error => {
    console.error('Something is going wrong');
    console.error(error);
  });