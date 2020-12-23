// old version
function newFunction(name, age, country) {
  var name = name || "daniel";
  var age = age || 28;
  var country = country || "Co";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "daniel", age = 28, country = "Co") {
  console.log(name, age, country);
}

//run with default values
newFunction2();
//run with another values
newFunction2("fernando", 30, "MX");
