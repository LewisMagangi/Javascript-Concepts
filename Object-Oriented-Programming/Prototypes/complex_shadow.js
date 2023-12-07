// Outer scope
let name = "Outer Name";

const myObject = {
  name: "Object Name",
  sayHello: function() {
    console.log("Hello, " + this.name);
  }
};

function outerFunction() {
  // Inner scope
  let name = "Inner Name";

  // Accessing the outer and inner 'name' variables
  console.log("Outer Scope: " + name); // Output: Inner Name
  console.log("Object Property: " + myObject.name); // Output: Object Name

  // Calling the 'sayHello' method of 'myObject'
  myObject.sayHello(); // Output: Hello, Object Name
}

// Calling the outer function
outerFunction();
