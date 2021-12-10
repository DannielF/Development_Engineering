// literal object
const natalia = {
  name: "Natalia",
  age: 20,
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};


// object prototype
function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
}
// method prototype
Student.prototype.approveCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
}

const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Creación de Personajes",
  ],
);


// prototype with classes in ES6
class Student2 {

  constructor({
    name,
    approvedCourses = [],
    age,
    email,
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});