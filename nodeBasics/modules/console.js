console.log('a');
console.error('miss');
console.warn('x_X');
let table = [
  {
    a: 1,
    b: 'z'
  },
  {
    c: 2,
    d: 'LL'
  }
];
console.table(table);
console.group('talk');
// Group n console.logs
console.groupEnd('talk');