# learning-javascript
This repo contains all projects completed while learning Javascript and this README acts like a quick reference guide.


## Workspace Setup

- Visual Studio Code
- Preview on Web Server (VS Code plugin)
- Prettier - Code formatted (VS Code plugin)

## VS Code Plugin Settings

```
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
```

```
"prettier.semi": false,
"prettier.singleQuote": true,
```

## Javascript Helper Methods

These methods help in getting feedback when testing out Javacript code:

```javascript
document.write();
```

```javascript
alert();
```

```javascript
console.log();
```

## Javascript Statements

```javascript
console.log("hello world");
console.log("hello Africa");
console.log("hello jessica");
```

## Javascript Comments

```javascript
// This is a comment

/*
This is a multi-line comment
*/
```

## Javascript Variables

```javascript
// declaration and assignment
let name = "john shrimp taco V";

// declaration
let address, zip, state;

// assignment
address = "101 main street";
zip = "60612";
state = "CA";

console.log(name);
console.log(address, zip, street);
```

## Variable Naming Rules

- variables can contain digits, letters, underscore, $
- variables must start with a letter, $, or _
- variables cannot be a keyword
- variables cannot start with a number
- variables are case-sensitive
- complex variable names are written with underscores or as camelcase

## LET vs CONST vs VAR

```javascript
// using var (old)
var value = "some value";

// using let (new - preferable over var)
let name = "john";

// using const (cannot change assigned value)
const = "jordan";

console.log(name);
console.log(value);
console.log(lastName);
```

## String Concatenation

```javascript
const name = 'john';
const lastName = 'smith';
let fullName;

// string concatenation
fullName = name + ' ' + lastName;
console.log('Hello there ' + fullName);
```

## Number Operations

```javascript
const number = 34;
const number2 = 2.456;

// addition
const add = number + number2;

// subtraction
const sub = number - number2;

// multiplication
const mult = number * number2;

// division
const div = number / number2;

let number3 = 40;

// add a value to a number
number3 += 5;

// subtract a value to a number
number3 -= 5;

// divide a number by a value
number3 /= 5;

// multiply a number by a value
number3 *= 5;

// add one to a number
number3 ++;

// modulus operator - get the remainder after a division
const amount = number % 3
```

## Implicit Type Conversion

When the programmer mixes data types, Javascript attempts to perform type conversion. Below are the consequences.

- if any of the variables is a string, javascript assumes the other also to be a string
- if both are strings that can be converted to numbers, javascript does an implicit conversion for arithmetic operations except addition
- if both are strings, javascript throws an error if the operation is not an addition

However, we can perform an explicit type conversion of string to integer

```javascript
let value = '500'              // string
value = parseInt(value)        // integer
```

## Data Types in Javascript

There are two major forms of data types in javascript:

- Primitive data types: string, number, boolean, null. undefined, symbol
- Object data types: arrays, functions, objects

To find out the data type of a variable, we use the typeof method

```javascript
let anon = 'anonymous group';
console.log(typeof anon);
```

The below explores the primitive data types:

```javascript
// string 
const text = 'some text';
console.log(typeof text);

// number
const number = 45;
console.log(typeof number);

// boolean
let value1 = true;
let value2 = false;
console.log(typeof value1);
console.log(typeof value2);

// null
// "typeof null" always returns object
const result = null;
console.log(typeof result);

// undefined
let name;
console.log(typeof name);
```

The below explores the object data types:

```javascript
// Arrays - []
// Arrays are 0 index based
const friends = ['john','peter','bob','susy',45,undefined,null];

// Accessing an item in an array 
console.log(friends[4]);

// Replacing an item in an array
friends[4] = 'anna';
console.log(friends[4]);
```

```javascript
// Functions - declaration and invocation

// function declaration
function hello() {
    console.log('Hello there Susy');
}

// function invokation
hello();
```

```javascript
Functions - Parameters and Arguments

// first declare function with parameters
function hello(name) {
    console.log('Hello there' + ' ' + name);
}

// then invoke functions with arguments

// greet bob
hello('bob')

// greet anna
hello('anna')

// greet susan
hello('susan')
```

```javascript
// Functions - Return value
// If you don't explicitly return a value from your function, it implicitly returns null

// return the cm equivalent of a value in inches (1 inch = 2.54cm)
function calculate(value){
    console.log('The value in cm is : ' + (value * 2.54) + cm)
    return (value * 2.54)
}

const width = calculate(100);
const height = calculate(80);

const dimensions = [width, height];
console.log(dimensions);
```

```javascript
Functions - Expressions. Here a function is assigned to a variable

// return the cm equivalent of a value in inches (1 inch = 2.54cm)
const calculate  = (value) {
    return (value * 2.54);
};

const dimensions = [calculate(100), calculate(80)];
console.log(dimensions);

// arrow functions
const calculate = (value) => value * 2.54;
```

```javascript
// Objects - These are key:value pairs.

// create a person object
const person = {
    name:'john',
    lastName:'peters',
    age:40,
    education:false,
    married:true,
    siblings:['anna','susan','peter'],
    // person method
    greeting:function() {
        console.log('Hello my name is JOHN');
    },
};

// access the person object
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

// modify the person object
person.name = 'bob';
```

```javascript
```













