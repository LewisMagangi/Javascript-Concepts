// First attempt with an array for the name
const person1 = {
  name: ["Bob", "Smith"],
};

// Output for person1
console.log("Person 1:");
console.log("First Name:", person1.name[0]);
console.log("Last Name:", person1.name[1]);
console.log("\n");

// Second attempt with an object for the name
const person2 = {
  name: {
    first: "Bob",
    last: "Smith",
  },
};

// Output for person2
console.log("Person 2:");
console.log("First Name:", person2.name.first);
console.log("Last Name:", person2.name.last);
