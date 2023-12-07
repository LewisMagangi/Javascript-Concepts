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


walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
