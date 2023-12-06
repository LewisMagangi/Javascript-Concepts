const person = {};

const myDataName = "height";
const myDataValue = "1.75m";

// Using bracket notation to dynamically update a property
person[myDataName] = myDataValue;

// Output the updated person object
console.log("Updated Person:");
console.log("Height:", person.height);
