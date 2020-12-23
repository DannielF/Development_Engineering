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
// inside education bring this elements and unite them into a single element
let education = ['david', ...team1, ...team2];
console.log(education);

// let --> has block scope only accessible at its block
// const --> it can't be modified its value
