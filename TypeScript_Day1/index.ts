// String
let userName: string = "Brijith";
console.log(userName);

// Number
let age: number = 21;
console.log(age);

// Boolean
let isActive: boolean = true;
console.log(isActive);

// Any (can be anything — avoid using this if possible)
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;
console.log(randomValue);

// Unknown (similar to any, but safer)
let unknownValue: unknown = "Test";
unknownValue = 30;
console.log(unknownValue)

// Null
let nullValue: null = null;
console.log(nullValue)

// Undefined
let undefinedValue: undefined = undefined;
console.log(undefinedValue)

// Function returning string
function greet(name: string): string {
    return "Hello, " + name;
  }
  console.log(greet('brijith keran'));
  
  // Function returning number
  function add(a: number, b: number): number {
    return a + b;
  }
  console.log(add(1,2));
  
  // Function returning boolean
  function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  console.log(isEven(6));
  
  // Function returning void (no return)
  function logMessage(message: string): void {
    console.log(message);
  }
  console.log(logMessage("hello"));
  
  // Function accepting any type of parameter and returning any
  function processData(data: any): any {
    return data;
  }
  console.log(processData("brijith"));
  console.log(processData(true));
  console.log(processData(1));
  
  // Function accepting unknown type of parameter
  function handleInput(input: unknown): void {
    if (typeof input === "string") {
      console.log("It's a string:", input);
    }
  }
  console.log(handleInput("brijith"));
  console.log(handleInput(1));

  // Function returning null
  function getNull(): null {
    return null;
  }
  console.log(getNull());
  
  // Function returning undefined
  function doNothing(): undefined {
    return undefined;
  }
  console.log(doNothing());
  