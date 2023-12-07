class Professor {
  // Properties
  constructor(name, teaches) {
    this.name = name;
    this.teaches = teaches;
  }

  // Methods
  grade(paper) {
    // Implementation for grading a paper
  }

  introduceSelf() {
    console.log(`Hello, I am Professor ${this.name}, and I teach ${this.teaches}.`);
  }
}
// Creating an instance of the Professor class
const myProfessor = new Professor("Dr. Smith", "Computer Science");

// Calling methods
myProfessor.introduceSelf();
myProfessor.grade("Research Paper");
