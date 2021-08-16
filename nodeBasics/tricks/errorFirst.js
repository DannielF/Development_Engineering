function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);

    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asincrona(function (error, dato) {

  if (error) {
    console.error('tenemos un error');
    console.error(error);
    return false;
    // throw error; It doesn't work on async functions
  }

  console.log('todo ha ido bien', data);

})
