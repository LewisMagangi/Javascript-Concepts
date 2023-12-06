function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const salva = new Person("Salva");
console.log(salva.name);      // Output: Salva
salva.introduceSelf();        // Output: Hi! I'm Salva.

const frankie = new Person("Frankie");
console.log(frankie.name);    // Output: Frankie
frankie.introduceSelf();      // Output: Hi! I'm Frankie.
