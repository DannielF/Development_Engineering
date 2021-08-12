async function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('hello, ' + name);
      resolve(name);
    }, 1000);
  });
}
async function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('bla bla bla bla...');
      resolve(name);
    }, 1000);
  });
}
async function adios(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('adios', name);
      resolve(name);
    }, 1000);
  });
}

async function main() {
  let name = await hello('Carlos')
  await talk()
  await talk()
  await talk()
  await talk()
  await adios(name)
  console.log('End process')
};

console.log('Start process')
main()