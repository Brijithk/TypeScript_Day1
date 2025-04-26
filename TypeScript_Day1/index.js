// String
var userName = "Brijith";
console.log(userName);
// Number
var age = 21;
console.log(age);
// Boolean
var isActive = true;
console.log(isActive);
// Any (can be anything — avoid using this if possible)
var randomValue = "Hello";
randomValue = 42;
randomValue = true;
console.log(randomValue);
// Unknown (similar to any, but safer)
var unknownValue = "Test";
unknownValue = 30;
console.log(unknownValue);
// Null
var nullValue = null;
console.log(nullValue);
// Undefined
var undefinedValue = undefined;
console.log(undefinedValue);
// Function returning string
function greet(name) {
    return "Hello, " + name;
}
console.log(greet('brijith keran'));
// Function returning number
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
// Function returning boolean
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(6));
// Function returning void (no return)
function logMessage(message) {
    console.log(message);
}
console.log(logMessage("hello"));
// Function accepting any type of parameter and returning any
function processData(data) {
    return data;
}
console.log(processData("brijith"));
console.log(processData(true));
console.log(processData(1));
// Function accepting unknown type of parameter
function handleInput(input) {
    if (typeof input === "string") {
        console.log("It's a string:", input);
    }
}
console.log(handleInput("brijith"));
console.log(handleInput(1));
// Function returning null
function getNull() {
    return null;
}
console.log(getNull());
// Function returning undefined
function doNothing() {
    return undefined;
}
console.log(doNothing());
