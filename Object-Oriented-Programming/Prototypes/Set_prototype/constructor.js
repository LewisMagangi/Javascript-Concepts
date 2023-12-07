const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype.greet = personPrototype.greet;
Person.prototype.greet()
