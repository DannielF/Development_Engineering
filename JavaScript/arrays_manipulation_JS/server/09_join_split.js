const elements = ["Fire", "Air", "Water"];


const rta = elements.join('--')
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);