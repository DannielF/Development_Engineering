//módulo para crear un servidor
const http = require('http')
//módulo para trabajar con archivos
const fs = require('fs')
//inicializamos el servidor
const server = http.createServer()
//manejamos los eventos del servidor
server.on('request', (request, response) => {
  /**
   * lee el archivo como un stream
   * el tamaño del chunk por defecto es de 64kb
   * para un fs, para un stream normal es de 16kb
   */
  fs.readFile('./big', (err, data) => {
    if (err) {
      console.error('Error', err);
    }
    res.end(data);
  });
});

server.listen(3000)

// Overcharge the system memory, because it doesn't have limits in the buffer storage.