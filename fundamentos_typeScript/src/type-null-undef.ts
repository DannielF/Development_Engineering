//  ------------------ NULL ------------------
// Explicit
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // --> Error

// Inferred
let otherVariable = null; // --> any
otherVariable = 'test';

console.log('nullVariable : ', nullVariable);
console.log('otherVariable : ', otherVariable);

//  ----------------- UNDEFINED -----------------
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // --> Error

let otherUndefined = undefined; // --> any
otherUndefined = 1;

console.log('undefinedVariable : ', undefinedVariable);
console.log('otherUndefined : ', otherUndefined);

//  ------- NULL && UNDEFINED: as subtypes -------

/**
 * @description tsc --watch src/type-null-undefined.ts --strictNullChecks
 * strictNullChecks: to check if the variable is null or undefined
 * @file tsconfig.json "strictNullChecks": true
 */

let albumName: string;
// albumName = null;
// albumName = undefined;
