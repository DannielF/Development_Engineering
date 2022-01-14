// ------ Type: object ------
// Explicit
let user: object;
user = {}; // Object
user = {
  id: 1,
  username: 'paparazzi',
  firstname: 'Pablo',
  isPro: true,
};
console.log('user', user);
// console.log('user.username', user.username); // --> it's no accessible

/*
 * Object: instance of class object javaScript
 * object: type for non primitive types TS
 */

// ---- Object vs object (Class JS vs type TS) ----
// literal object
const myObj = {
  id: 1,
  username: 'paparazzi',
  firstname: 'Pablo',
  isPro: true,
};
const isInstance = myObj instanceof Object; // trueo or false
console.log('isInstance : ', isInstance); // class Object JavaScript
console.log('myObj.username : ', myObj.username); // --> it's accessible
