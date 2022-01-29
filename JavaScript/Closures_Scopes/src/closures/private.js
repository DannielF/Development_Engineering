// Variables privadas
// manejando datos privados con closures
const person = () => {
  var saveName = 'Name';
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();
console.log(newPerson.getName()); // traer el valor que se encuentra asignado
newPerson.setName('daniel'); // asignarle otro valor
console.log(newPerson.getName()); // mostrar de nuevo el valor asignado
