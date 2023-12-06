const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Emmanuel",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

// Calling introduceSelf for person1
person1.introduceSelf();

// Calling introduceSelf for person2
person2.introduceSelf();
