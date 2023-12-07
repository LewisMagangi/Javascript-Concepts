function createPerson(name, age) {
  // Private variables
  let _name = name;
  let _age = age;

  // Public methods
  return {
    getName: function() {
      console.log(`Accessing private variable: _name = ${_name}`);
      return _name;
    },

    getAge: function() {
      console.log(`Accessing private variable: _age = ${_age}`);
      return _age;
    },

    setName: function(newName) {
      console.log(`Modifying private variable: _name = ${newName}`);
      _name = newName;
    },

    setAge: function(newAge) {
      console.log(`Modifying private variable: _age = ${newAge}`);
      if (newAge >= 0) {
        _age = newAge;
      } else {
        console.error("Age cannot be negative.");
      }
    },

    greet: function() {
      console.log(`Hello, my name is ${_name} and I am ${_age} years old.`);
    }
  };
}

const person = createPerson("John", 30);

// Try to access private variables directly (illustrating encapsulation)
console.log(person._name); // Output: undefined (cannot directly access _name)
console.log(person._age);  // Output: undefined (cannot directly access _age)

// Accessing data through public methods
console.log(person.getName()); // Output: Accessing private variable: _name = John
console.log(person.getAge());  // Output: Accessing private variable: _age = 30

// Modifying data through public methods
person.setName("Jane");
person.setAge(25);

// Using another method
person.greet(); // Output: Hello, my name is Jane and I am 25 years old.
