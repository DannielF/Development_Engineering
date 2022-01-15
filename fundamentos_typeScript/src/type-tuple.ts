export {};

// [1, 'user']
let user: [number, string];
user = [1, 'jhonDoe'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuples with many values
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];
console.log('userInfo', userInfo);

// Array with tuples
let array: [number, string][] = [];
array.push([1, 'jhonDoe']); // 0
array.push([2, 'paparazzi']); // 1
array.push([3, 'lensQueen']); // 2
console.log('array', array);

// Array methods
// lensQueen -> lensQueen001

array[2][1] = array[2][1].concat('001'); // lensQueen001
console.log('array', array);
