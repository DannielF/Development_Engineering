/*
  Firmando y verificando un Json Web Token (JWT)
*/
const jwt = require('jsonwebtoken');

/*
  sacamos las variables necesarias de process.argv, que devuelve un array
  el cual estamos destructurando.
*/
const [, , option, secret, nameOrToken] = process.argv;

// Se verifica que las variables no sean undefined o algun valor false
if (!option || !secret || !nameOrToken) {
  console.error('Los argumentos son requeridos');
}

// Funcion para firmar un tokens
function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

// Funcion para decodificar un token
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

/*
  Opciones para trabajar con la funcion requerida mediante el
  parametro option.
  - sign --> firmar token.
  - verify --> decodificar token.
*/
if (option === 'sign') {
  console.log(signToken({ sub: nameOrToken }, secret));
} else if (option === 'verify') {
  console.log(verifyToken(nameOrToken, secret));
} else {
  console.log('Option needs to be "sign" or "verify"');
}
