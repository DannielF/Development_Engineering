// ------- Type: Array -------

// Explicit
let users: string[];
users = ['luixaviles', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test']; // --> Error

// Inferred
let otherUsers = ['luixaviles', 'paparazzi', 'lensqueen'];
// otherUsers = [1, true, 'test']; // --> Error

// Array<type>  generics
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// accessing array values
console.log('first user : ', users[0]); // --> users[index]: luixaviles
console.log('first title : ', pictureTitles[0]);

// Array properties
console.log('users.length : ', users.length);

// Array methods
users.push('aPlatziUser'); // -> add element to the end of the array
users.sort(); // --> sort the array in alphabetical order
console.log('users', users);
