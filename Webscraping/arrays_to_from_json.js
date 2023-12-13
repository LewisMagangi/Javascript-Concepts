// Array of superheroes
const superheroArray = [
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes",
    ],
  },
];

// Serialization
const serializedArray = JSON.stringify(superheroArray, null, 2);

// Save the serialized data to a file (in Node.js)
const fs = require("fs");
fs.writeFileSync("superhero_array.json", serializedArray);

// Deserialization
const loadedArray = JSON.parse(serializedArray);

// Accessing the data
loadedArray.forEach((superhero, index) => {
  console.log(`\nSuperhero ${index + 1}:`);
  console.log(`Name: ${superhero.name}`);
  console.log(`Age: ${superhero.age}`);
  console.log(`Secret Identity: ${superhero.secretIdentity}`);
  console.log("Powers:");
  superhero.powers.forEach((power) => {
    console.log(`  - ${power}`);
  });
});
