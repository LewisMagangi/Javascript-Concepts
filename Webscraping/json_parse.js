// Your superhero squad data
const superheroSquad = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
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
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

// Serialization
const serializedData = JSON.stringify(superheroSquad, null, 2);

// Save the serialized data to a file (in Node.js)
const fs = require("fs");
fs.writeFileSync("superhero_squad.json", serializedData);

// Deserialization
const loadedData = JSON.parse(serializedData);

// Accessing the data
const squadName = loadedData.squadName;
const homeTown = loadedData.homeTown;
const formationYear = loadedData.formed;
const secretBase = loadedData.secretBase;
const isActive = loadedData.active;
const members = loadedData.members;

// Print information
console.log(`Squad Name: ${squadName}`);
console.log(`Home Town: ${homeTown}`);
console.log(`Formed in: ${formationYear}`);
console.log(`Secret Base: ${secretBase}`);
console.log(`Active: ${isActive}`);

// Print information about each member
members.forEach((member) => {
  console.log("\nMember:");
  console.log(`Name: ${member.name}`);
  console.log(`Age: ${member.age}`);
  console.log(`Secret Identity: ${member.secretIdentity}`);
  console.log("Powers:");
  member.powers.forEach((power) => {
    console.log(`  - ${power}`);
  });
});
