console.time('todo');
let sum = 0;

console.time('loop1');
for (let i = 0; i < 1000000000; i++) {
  sum++;
}
console.timeEnd('loop1');

let sum2 = 0;
console.time('loop2');
for (let i = 0; i < 10000000000; i++) {
  sum2++;
}
console.timeEnd('loop2');

console.time('Async');
console.log('Start async');
asynchronous()
  .then(() => {
    console.timeEnd('Asynchronous');
  })


console.timeEnd('todo');


//-------------------

function asynchronous() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('End async process');
      resolve();
    }, 1000);
  })
}