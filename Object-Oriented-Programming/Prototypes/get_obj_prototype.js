B// Creating an object using the object literal syntax
var myObject = {};

// Getting the prototype of myObject
var prototypeOfMyObject = Object.getPrototypeOf(myObject);

// Printing the prototype of myObject
console.log("Prototype of myObject:", prototypeOfMyObject); // Output: Object { }

// Checking if the prototype is an empty object
console.log("Is this the prototype of an empty object?", prototypeOfMyObject); // Output: true

// Checking if the prototype is the built-in Object prototype
console.log("Is this prototype the built-in Object prototype ?", prototypeOfMyObject === Object.prototype); // Output: true
