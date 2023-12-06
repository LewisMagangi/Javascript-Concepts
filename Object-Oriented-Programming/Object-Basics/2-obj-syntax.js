const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer',
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
