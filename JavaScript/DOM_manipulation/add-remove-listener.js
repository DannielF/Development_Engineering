// Select node
const input = document.querySelector('#firstName');

// Action when receive the event
const action = () => {
  console.log('Ha sucedido un click');
};

// Catch the event
input.addEventListener('click', action);

// Detect changes in the input
input.addEventListener('input', (event) => { // event: default argument
  console.log(`Hey!: ${event}`);
});

// Print target on click
input.addEventListener('click', (event) => {
  console.log(event.target);
});

// Another way to print target on click
input.addEventListener('click', function () {
  console.log(this.target);
  // the this inside this scope capture the information of event
  // However, this does not work in the arrow function
  // in arrow function we use the argument (event)
});


// Select node
const email = document.querySelector('#email');

const action1 = () => console.log('Acción 1');
const action2 = () => console.log('Acción 2');

// Catch the event
email.addEventListener('click', action1);
email.addEventListener('click', action2);


// Remove event, we must always put the action in a separate function to be able to remove it
email.removeEventListener('click', action1);