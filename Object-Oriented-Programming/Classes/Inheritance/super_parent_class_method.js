class Parent {
  sayHello() {
    console.log('Hello from the parent class!');
  }
}

class Child extends Parent {
  sayHello() {
    super.sayHello(); // Calling the method from the parent class
    console.log('Hello from the child class!');
  }
}

const childInstance = new Child();
childInstance.sayHello();
