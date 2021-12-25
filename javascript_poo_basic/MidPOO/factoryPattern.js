/**
 * Architecture pattern - Factory - Creational
 * 
 * RORO - Receives a object and returns an object
 * 
 */

// Requerimientos de parametros obligatorios
function requiredParam(param) {
  throw new Error(param + " Campo obligatorio");
}

// Fabrica de estudiantes
function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  return {
    name,
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

const carlos = createStudent({
  name: 'Carlito',
  age: 20,
  email: 'carlito@mazzarolito.com',
  twitter: 'carlitosmzz',
}); // {}