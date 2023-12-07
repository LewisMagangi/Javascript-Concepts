// Creating a Date object
const myDate = new Date();

// Assigning the Date object to the 'object' variable
let object = myDate;

// Looping through the prototype chain
do {
  // Getting the prototype of the current object
  object = Object.getPrototypeOf(object);

  // Printing the prototype
  console.log(object);

} while (object);
