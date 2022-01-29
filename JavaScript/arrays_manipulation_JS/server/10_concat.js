const elements = [1,1,2,2];
const othersElements = [3,3,4,4];


const rta = elements.concat(othersElements);
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, ...'random'];

console.log('concat', rta);
console.log('...', rta2);

// Becareful with spread operator in strings, what do you need to do
console.log('rta3', rta3);

elements.push(...othersElements);
console.log('elements', elements);

