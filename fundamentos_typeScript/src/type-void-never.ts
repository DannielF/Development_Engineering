// type void for functions
// Explicit type

function showInfo(user: any): void {
  console.log(`User Info ${user.id} ${user.username} ${user.firstname}`);
  //   return 'hello';
}

showInfo({ id: 1, username: 'JhonDoe', firstname: 'Jhon' });

// Inferred type
function showFormattedInfo(user: any) {
  console.log(`User Info,
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstname}`);
}

showFormattedInfo({ id: 1, username: 'JhonDoe', firstname: 'Jhon' });

// Type void as variable data type
let unusable: void;
// unusable = null; --> "strict": false tsconfig.json - to do this
unusable = undefined;

// Type never
function handleError(code: number, message: string): never {
  // Process your code
  // Generate a message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  console.log('handleError return nothing');
  handleError(404, 'Not found');
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
  // return sum;
}

sumNumbers(10); // --> Infinite loop, TS will not compile this code
