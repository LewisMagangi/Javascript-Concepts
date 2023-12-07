"""
In this example, even though toString is present in the object due to its prototype chain, hasOwnProperty('toString') returns false because it's not an own property of the object.
"""
var person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

var hasToStringProperty = 'toString' in person;  // Checking in prototype chain

console.log(hasToStringProperty);  // Output: true
console.log(person.hasOwnProperty('toString'));  // Output: false
