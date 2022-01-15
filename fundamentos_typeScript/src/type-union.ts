export {};

// // 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // Find the username by ID
// function getUsernameById(id: number | string) {
//     // business logic, find the user
//     return 'jhonDoe';
// }

// getUsernameById(20);
// getUsernameById('20');

// Alias of types: TS
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Find the username by ID
function getUsernameById(id: IdUser): Username {
  // business logic, find the user
  return 'jhonDoe';
}

getUsernameById(20);
getUsernameById('20');

// literal types: TS
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; //Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
