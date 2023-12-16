class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Calling the constructor of the parent class
    this.age = age;
  }
}

const childInstance = new Child('Lewis', 23);
console.log(childInstance.name); // Output: Lewis
console.log(childInstance.age);  // Output: 23
