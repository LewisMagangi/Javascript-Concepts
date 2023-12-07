const personPrototype = {
    greet() {
	console.log("hello how are you ?");
    },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
