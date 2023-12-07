// Person class
class Person {
    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// Professor class extends Person
class Professor extends Person {
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    grade(paper) {
        console.log(`Professor ${this.name} is grading ${paper}.`);
    }

    introduceSelf() {
        console.log(`Hello, I am Professor ${this.name}, and I teach ${this.teaches}.`);
    }
}

// Student class extends Person
class Student extends Person {
    constructor(name, year) {
        super(name);
        this.year = year;
    }

    introduceSelf() {
        console.log(`Hi, I am ${this.name}, a ${this.year}-year student.`);
    }
}

// Example usage
const person = new Person("John Doe");
person.introduceSelf();

const professor = new Professor("Dr. Smith", "Computer Science");
professor.introduceSelf();
professor.grade("research paper");

const student = new Student("Alice", 2);
student.introduceSelf();
