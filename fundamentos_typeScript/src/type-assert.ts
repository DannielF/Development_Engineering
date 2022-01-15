export {};
// <type> // Angle Bracket syntax TS
let username: any;
username = 'jhondoe';
username = 'jhon';

// We have a string, TS trust me!
let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : 'Username is too short';
console.log('message', message);

let usernameWithId: any = 'jhondoe 1';
// How to get the username?
username = (<string>usernameWithId).substring(0, 10);
console.log('Username only', username);

// Syntax "as"
message =
  (username as string).length > 5
    ? `Welcome ${username}`
    : 'Username is too short';

let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username', username);
