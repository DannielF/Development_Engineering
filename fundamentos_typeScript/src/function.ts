// Make a picture
// function createPicture(title, date, size) {
// //  title
// }

type SquareSize = '100x100' | '500x500' | '1000x100';

// We use TS, We define the type of the params
// function createPicture(title: string, date: string, size: SquareSize) {
//     // picture created
//     console.log('create Picture using', title, date, size);
// }

// createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia Trip', '2020-03');

// Optional Params in functions

function createPicture(title?: string, date?: string, size?: SquareSize) {
  // picture created
  console.log('create Picture using', title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '2020-03');
createPicture('Colombia Trip');
createPicture();

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
  // return {
  //     title: title,
  //     date: date,
  //     size: size
  // };
  return { title, date, size };
};

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);

// return types in functions TS

function handleError(code: number, message: string): never | string {
  // code processing
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'An error has occurred';
  }
}

try {
  let result = handleError(200, 'OK'); // string
  console.log('result', result);
  result = handleError(404, 'error'); // never
  console.log('result', result);
} catch (error) {}
