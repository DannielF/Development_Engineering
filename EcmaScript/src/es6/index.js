// Default params and concatenarion
// old version
function newFunction(name, age, country) {
  var name = name || 'daniel';
  var age = age || 28;
  var country = country || 'Co';
  console.log(name, age, country);
}
// es6
function newFunction2(name = 'daniel', age = 28, country = 'Co') {
  console.log(name, age, country);
}
// run with default values
newFunction2();
// run with another values
newFunction2('fernando', 30, 'MX');

// templates literal'
// old way
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6 way
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
// ${} I'm bringing the values of that variable

// Let, Const, multilinea, Spread operator
// old version
let lorem =
  'qua consecua. comoddua. Ipsua val dua y yat mimna \n'
  + 'otra frase epica que mostrar.';
// es6 version
let lorem2 = `otra frase que necesitamos
  ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

// desestruturacion
// old version
let person = {
  name: 'daniel',
  age: 28,
  country: 'CO',
};
console.log(person.name, person.age, person.country);

// es6 version
let { name, age, country } = person;
console.log(name, age, country);

// propagacion
let team1 = ['daniel', 'fernando', 'ricardo'];
let team2 = ['camila', 'oscar', 'felipe'];
// inside education bring these elements and unite them into a single element
let education = ['david', ...team1, ...team2];
console.log(education);

// let --> has block scope only accessible at its block code
// const --> it can't be modified its value

// construir objetos con es6
let name = 'daniel';
let age = 28;
// es5
obj = { name: name, age: age };
// es6 version
obj2 = { name, age };
console.log(obj2);

// arrow functions
// sentencia mas reducida y un this no vinculable

// un arreglo con varios objetos
const names = [
  { name: 'daniel', age: 28 },
  { name: 'camila', age: 30 }
];

// functions anonimas
let listOfNames = names.map(function (item) {
  console.log(item.name);
})
// es6 functions anonimas
let listOfNames2 = names.map(item => console.log(item.name));

//another versions es6
const listOfNames3 = (name, age, country) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;