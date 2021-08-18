//importamos el modulo readable
const { Readable } = require('stream')

//instanciamos un nuevo readable stream
const readableStream = new Readable({
  /**
   * constructor
   * @param {*} size tamaño del buffer
   * de lectura este se representa en bytes
   * y el valor por defecto es 16kb para un
   * readable stream y para fs es de 64kb
   * parámetro opcional
   */
  read(size) {
    setTimeout(() => {
      //la letra es mayor que z
      if (this.chartCode > 90) {
        //finalizamos la lectura
        this.push(null)
        return;
      }
      /**
       * agregamos la letra al buffer y después
       * se le suma 1 
       */
      this.push(String.fromCharCode(this.chartCode++))
    }, 100)
  }
})

/**
 * inicializamos el atributo chartCode
 * y le asignamos el valor  ASCII de la letra A
 */
readableStream.chartCode = 65
/**
 * manejamos el stream de lectura y le asignamos
 * un stream de salida por pantalla
 */
readableStream.pipe(process.stdout)