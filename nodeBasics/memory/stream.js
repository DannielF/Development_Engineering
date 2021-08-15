const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8')
readableStream.on('data', (texto) => {
  data += texto
})

readableStream.on('end', () => {
  console.log(data)
})

// stream de escritura:
// process.stdout.write('hola')
// process.stdout.write('mundo')

const Transform = stream.Transform;
function Mayus() {
  Transform.call(this)
}
util.inherits(Mayus, Transform)

Mayus.prototype._transform = function (texto, codif, cb) {
  textoMayuscula = texto.toString().toLowerCase()
  this.push(textoMayuscula)
  cb()
}
let mayus = new Mayus()

readableStream
  .pipe(mayus)
  .pipe(process.stdout);