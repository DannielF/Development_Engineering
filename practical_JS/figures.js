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


// Receive values from HTML

function calculatePerimeterSquare() {
  const input = document.getElementById('inputSquare');
  const value = input.value;

  const perimeter = perimeterSquare(value);
  alert(perimeter + ' cm');
}

function calculateAreaSquare() {
  const input = document.getElementById('inputSquare');
  const value = input.value;

  const area = areaSquare(value);
  alert(area);
}

// Triangle

function calculatePerimeterTriangle() {
  const input1 = document.getElementById('inputTriangle')
  const input2 = document.getElementById('inputTriangle2')
  const input3 = document.getElementById('inputTriangle3')

  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);

  const perimeter = perimeterTriangle(value1, value2, value3);
  alert(perimeter);
}

function calculateAreaTriangle() {
  const input1 = document.getElementById('inputTriangle')
  const input3 = document.getElementById('inputTriangle3')

  const value1 = parseInt(input1.value);
  const value3 = parseInt(input3.value);
  const height = Math.sqrt(value1 ** 2 - (value3 ** 2 / 4))

  const area = areaTriangle(value3, height);
  alert(area);
}

function calculateHeightTriangle() {
  const input1 = document.getElementById('inputTriangle')
  const input2 = document.getElementById('inputTriangle2')
  const input3 = document.getElementById('inputTriangle3')

  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);

  if (value1 == value2 && value1 != value3) {
    const height = Math.sqrt(value1 ** 2 - (value3 ** 2 / 4))
    alert(height);
  }
  else {
    alert('Side 1 must be equal to side 2 and different to base for to be an Isosceles Triangle')
  }
}

//Circle

function calculateDiameterCircle() {
  const input = document.getElementById('inputCircle');
  const value = parseInt(input.value)

  const diameter = diameterCircle(value);
  alert(diameter);
}

function calculatePerimeterCircle() {
  const input = document.getElementById('inputCircle');
  const value = parseInt(input.value)

  const perimeter = perimeterCircle(value);
  alert(perimeter);
}

function calculateAreaCircle() {
  const input = document.getElementById('inputCircle');
  const value = parseInt(input.value)

  const area = areaCircle(value);
  alert(area);
}
