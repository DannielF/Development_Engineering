// type Any --> For dynamic variables
// Explicit type
let idUser: any;
idUser = 1; // Number
idUser = '1'; // String
console.log('iduser ', idUser);
console.log(typeof idUser);

// Inferred type
let otherId;
otherId = '1';
otherId = 1;
// otherId = true;
console.log('otherId ', otherId);
console.log(typeof otherId);

let suprise: any = 'Hello typescript';
// suprise.sayHello(); // Error
const res = suprise.substring(10); // Error in runtime if value change
console.log(`res ${res}`);
