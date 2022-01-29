// promise
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('oops!');
    }
  });
};

somethingWillHappen()
  .then((Response) => console.log(Response))
  .catch((err) => console.error(err));

// promise with error
// it's important to used new error

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000);
    } else {
      const error = new Error('Oops');
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// run all promises

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log('Array of results', response);
  })
  .catch((err) => {
    console.error(err);
  });
