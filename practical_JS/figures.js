// Square code
console.group('Squares');

/* const sideSquare = 5;
console.log(`Each side of the square measures: ${sideSquare} cm`); */

function perimeterSquare(side) {
  return side * 4;
}

/* console.log(`Perimeter of the square is: ${perimeterSquare(side)} cm`); */

function areaSquare(side) {
  return side * side;
}
/* console.log(`Area of the square is: ${areaSquare(side)} cm²`); */

console.groupEnd();

// Triangle code
console.group('Triangles');

function perimeterTriangle(side1, side2, base) {
  return side1 + side2 + base;
}


function areaTriangle(base, height) {
  return (base * height) / 2;
}

console.groupEnd();

// Circle code
// Arrow functions

console.group('Circles');

const diameterCircle = (radius) => radius * 2;

const PI = Math.PI;

const perimeterCircle = (radius) => diameterCircle(radius) * PI;

const areaCircle = (radius) => (radius ** 2) * PI;

console.groupEnd();