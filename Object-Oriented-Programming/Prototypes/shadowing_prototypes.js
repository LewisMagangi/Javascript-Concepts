// Creating a Date object with the date December 17, 1995
const myDate = new Date(1995, 11, 17);

// Using getYear() method (deprecated, use getFullYear() instead)
console.log(myDate.getYear()); // Output: 95

// Overriding the getYear() method for this specific instance
myDate.getYear = function () {
  console.log("something else!");
};

// Calling the overridden getYear() method
myDate.getYear(); // Output: 'something else!'
