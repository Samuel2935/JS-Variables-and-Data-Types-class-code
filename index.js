
// Declaring variables using var, let, and const
// Var
var name = "Clifford";
var height = 74;
name = "Isaiah"; // Reassigning the value of the variable 'name'

// Let
let name = "Clifford";
let height = 74;
name = "Isaiah"; // Reassigning the value of the variable 'name'

// Const
const name = "Clifford";
const height = 74;
// name = "Isaiah"; // Error: Cannot reassign a constant variable

// Printing variables
console.log(name);
console.log(height);

// Printing variables using string concatenation
console.log("My name is " + name + " and I am " + height + " inches tall");

// Printing variables using string interpolation
console.log(`My name is ${name} and I am ${height} inches tall`);



// Numbers
const numberOne = 10;
const numberTwo = 20;
const numberThree = 30;

const finallyResult = numberOne + numberTwo + numberThree;

console.log("===========================");
console.log("The result of adding", numberOne, "+", numberTwo, "+", numberThree, "is", finallyResult);
console.log("===========================");

// Explanation:
// In this code, we declare three variables (numberOne, numberTwo, and numberThree) and assign them with numeric values.
// We then add these three numbers together and store the result in the variable finallyResult.
// Finally, we print the result to the console using a descriptive message.

// Printing the result
console.log("===========================");
console.log("The result of adding", numberOne, "+", numberTwo, "+", numberThree, "is", finallyResult);
console.log("===========================");



// Strings
const firstName = "Clifford";
const lastName = "Barnes";
let fullName = firstName + " " + lastName;

console.log("===========================");
console.log("The full name is:", fullName);
console.log("===========================");

// Explanation:
// In this code, we declare two variables: firstName and lastName, and assign them with string values.
// We then concatenate the firstName and lastName using the + operator and store the result in the variable fullName.
// Finally, we print the full name to the console using a descriptive message.

// Printing the full name
console.log("===========================");
console.log("The full name is:", fullName);
console.log("===========================");




// Booleans
// Determine if a person can vote or not

console.log("===========================");
const age = 18;
const ofAge = age >= 18;

if (ofAge) {
console.log("You are eligible to vote.");
} else {
console.log("You are not eligible to vote.");
}
console.log("===========================");

// Explanation:
// In this code, we declare a variable age and assign it the value 18.
// We then create a variable ofAge and assign it the boolean value of whether the age is greater than or equal to 18.
// Using an if-else statement, we check the value of ofAge.
// If it is true, we print "You are eligible to vote." to the console.
// If it is false, we print "You are not eligible to vote." to the console.
// Finally, we print a line of equal signs for visual separation.

// Printing the eligibility to vote
console.log("===========================");
if (ofAge) {
console.log("You are eligible to vote.");
} else {
console.log("You are not eligible to vote.");
}
console.log("===========================");


// Arrays
const numbers = [1, 2, 3, 4, 5];
console.log("===========================");
console.log("Numbers Array:", numbers);
console.log("===========================");

// Strings
let Name = [];
// Pushing elements to the Name array
Name.push("Clifford");
Name.push("Barnes");
Name.push("Isaiah");
Name.push("Barnes");

console.log("===========================");
console.log("Name Array:", Name);
console.log("===========================");

// Explanation:
// In this code, we demonstrate the usage of arrays.
// We declare a numbers array and initialize it with several numeric values.
// We then print the numbers array to the console.
// Next, we create an empty Name array and use the push() method to add elements to it.
// We push the strings "Clifford", "Barnes", "Isaiah", and "Barnes" to the Name array.
// Finally, we print the Name array to the console.

// Printing the arrays
console.log("===========================");
console.log("Numbers Array:", numbers);
console.log("===========================");

console.log("===========================");
console.log("Name Array:", Name);
console.log("===========================");


// Objects
const person = {
  firstName: "Clifford",
  lastName: "Opoku",
  age: 18,
  ofAge: true,
  location: "Accra",
};
console.log(person);

console.log("===========================");
const personTwo = {
  firstName: "Clifford",
  lastName: "Opoku",
  age: 18,
  ofAge: true,
  location: "Accra",
};

console.log(personTwo);

// Printing first name, last name, age, ofAge, and location
console.log("===========================");
console.log("First Name:", personTwo.firstName);
console.log("Last Name:", personTwo.lastName);
console.log("Age:", personTwo.age);
console.log("Eligible to Vote:", personTwo.ofAge);
console.log("Location:", personTwo.location);

// Null and Undefined
let empty = null;
console.log("===========================");
console.log("Null:", empty);
console.log("===========================");
  /*


// Explanation:
In this code, we demonstrate the usage of objects, null, and undefined.

We have two objects: `person` and `personTwo`, representing individuals with properties such as first name, last name, age, eligibility to vote, and location. We print the objects to the console.

Next, we print specific properties of `personTwo`, including first name, last name, age, eligibility to vote, and location.

Lastly, we demonstrate the use of null by assigning the `empty` variable a null value and printing it to the console.
*/