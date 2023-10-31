# learning-javascript
This repo contains all projects completed while learning Javascript and this README acts as a quick reference guide.


## Workspace Setup

- Visual Studio Code
- Preview on Web Server (VS Code plugin)
- Prettier - Code formatted (VS Code plugin)

---

## VS Code Plugin Settings

```
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
```

```
"prettier.semi": false,
"prettier.singleQuote": true,
```

---

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

---

## Javascript Statements

```javascript
console.log("hello world");
console.log("hello Africa");
console.log("hello jessica");
```

---

## Javascript Comments

```javascript
// This is a comment

/*
This is a multi-line comment
*/
```

---

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

---

## Variable Naming Rules

- variables can contain digits, letters, underscore, $
- variables must start with a letter, $, or _
- variables cannot be a keyword
- variables cannot start with a number
- variables are case-sensitive
- complex variable names are written with underscores or as camelcase

---

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

---

## String Concatenation

```javascript
const name = 'john';
const lastName = 'smith';
let fullName;

// string concatenation
fullName = name + ' ' + lastName;
console.log('Hello there ' + fullName);
```

---

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

---

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

---

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


### string

```javascript
const text = 'some text';
console.log(typeof text);
```


### number

```javascript
const number = 45;
console.log(typeof number);
```


### boolean

```javascript
let value1 = true;
let value2 = false;
console.log(typeof value1);
console.log(typeof value2);
```


### null

```javascript
// "typeof null" always returns object
const result = null;
console.log(typeof result);
```


### undefined

```javascript
let name;
console.log(typeof name);
```


The below explores the object data types:

### Arrays - []

```javascript
// Arrays are 0 index based
const friends = ['john','peter','bob','susy',45,undefined,null];

// Accessing an item in an array 
console.log(friends[4]);

// Replacing an item in an array
friends[4] = 'anna';
console.log(friends[4]);
```

### Functions - declaration and invocation

```javascript
// function declaration
function hello() {
    console.log('Hello there Susy');
}

// function invokation
hello();
```

### Functions - Parameters and Arguments

```javascript
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

### Functions - Return value

```javascript
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

### Functions - Expressions. Here a function is assigned to a variable

```javascript
// return the cm equivalent of a value in inches (1 inch = 2.54cm)
const calculate  = (value) {
    return (value * 2.54);
};

const dimensions = [calculate(100), calculate(80)];
console.log(dimensions);

// arrow function
const calculate = (value) => value * 2.54;
```

### Objects - These are key:value pairs.

```javascript
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

---

## Conditional Statements

```javascript
if(condition){
    console.log('condition was met');
} else {
    console.log('condition was not met');
}
```

---

## Comparison Operators

```javascript
const num1 = 4;
const num2 = 6;
```

### > and < operators

```javascript
if(num1 > num2) {
    console.log('num1 is bigger');
} else if (num1 < num2) {
    console.log('num2 is bigger');
} else {
    console.log('num1 is equal to num2');
}
```

### >= operator

```javascript
if(num1 >= num2){
    console.log('num1 is either greater than num2 or same as num2');
} else {
    console.log('num1 is less than num2');
}
```

### <= operator

```javascript
if(num1 <= num2){
    console.log('num1 is either less than num2 or same as num2');
} else {
    console.log('num1 is greater than num2');
}
```

### == (equality operator - checks only value)

```javascript
if(num1 == num2){
    console.log('num1 equals num2');
} else {
    console.log('num1 does equals num2');
}
```

### === (equality operator - checks value and type)

```javascript
if(num1 === num2){
    console.log('num1 equals num2');
} else {
    console.log('num1 does equals num2');
}
```

---

## Logical Operators

```javascript
const name = 'peter';
const age = 24;
```

### OR operator

```javascript
// OR operator - only one must be true
if (name === 'bob' || age === 24) {
    console.log('hello there user');
} else {
    console.log('wrong values');
}
```

### AND operator

```javascript
// AND operator - all must be true
if (name === 'bob' && age === 24) {
    console.log('hello there user');
} else {
    console.log('wrong values');
}
```

---

## Switch Statements

```javascript
// switch statements can be used in place of if..else statements
// dice values: 1 - 6

const dice = 1;

switch(dice){
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got two');
        break;
    case 3:
        console.log('you got three');
        break;
    case 4:
        console.log('you got four');
        break;
    case 5:
        console.log('you got five');
        break;
    case 6:
        console.log('you got six');
        break;
    default:
        console.log('please roll the dice');
}
```

---

## Loops

### while loops

```javascript
let amount = 10;

while (amount > 0){
    console.log('I have ' + amount + ' dollars');
    amount--;
}
```

### do while loops


```javascript
// do while loops run at least once
let money = 0;

do{
    console.log('I have ' + money + ' dollars');
    money++;
} while (money < 10);
```

### for loops
```javascript
let i;

for(i = 0; i < 10; i++){
    console.log('I have ' + i + ' dollars');
}

for(let number = 11; number >= 0; number--){
    console.log('I have ' + number + ' dollars');
}
```

---

## String methods

```javascript
let  text = 'John Smith';

// some string methods
// you can also chain properties and methods
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('p'));
console.log(text.trim());
cosole.log(text.startsWith('peter'));
cosole.log(text.includes('ohn'));
cosole.log(text.slice(0, 2));
cosole.log(text.slice(-1));
```

A complete list of string methods can be found at:

- [w3schools](https://www.w3schools.com/js/js_string_methods.asp)
- [mozilla mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

## Template Literals

```javascript
// Backtick characters `` and interpolation ${}

const name = 'john';
const age = 25;

const senetence = `Hey it's ${name}, he is ${age} years old and 4 + 4 = ${4+4}`;
console.log(senetence);
```

---

## Array Methods

```javascript
let names = ['john', 'bob', 'barry', 'olga', 'ben'];
```

### length

```javascript
console.log(names.length);
console.log(names[names.length - 1]);
```

### concat

```javascript
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
```

### reverse

```javascript
console.log(allNames.reverse())
```

### unshift

```javascript
// unshift adds to the beginning of the array
allNames.unshift('susy');
console.log(allNames);
```

### shift

```javascript
// shift removes items from the beginning of the array
allNames.shift();
console.log(allNames);
```

### push

```javascript
// push adds to the end of the array
allNames.push('susy');
console.log(allNames);
```

### pop

```javascript
pop removes items from the beginning of the array
allNames.pop();
console.log(allNames);
```

### splice

```javascript
const specificNames = allNames.splice(2,1);
console.log(specificNames);
console.log(allNames);
```

---

## Value vs Reference

- When applying a method on a primitive data type, the value is not changed directly.
- When applying a method on a non-primitive data type, the value is changed directly.

---

## Null vs Undefined

- Javascript returns undefined when it cannot find the value for the variable
- Javascript returns null when the developer sets this value either implicitly or explicitly

---

## Truthy and Falsy

Some values in JavaScript can be evaluated as either true or false.

```javascript
// These values are Falsy and evaluate to False
// "", '', ``, 0, -0, NaN, false, null, undefined

const text1 = 'john';
const text2 = '';

// Truthy
if (text1) {
    console.log('hey the value is Truthy!');
} else {
    console.log('hey the value is Falsy!');
}

// Falsy
if (text2) {
    console.log('hey the value is Truthy!');
} else {
    console.log('hey the value is Falsy!');
}
```

---

## Ternary Operators

```javascript
// condition ? (code to run if true) :  (code to run if false)

const value = 2 > 1;
value ? console.log('value is true') : console.log('value is false');
```

---

## Global Scope vs Local Scope

__Global scope__
- any variable outside code block {} is said to be in the Global scope
- Global variables can be accessed from anywhere in our code
- Global variables can be modified from anywhere in our code

__Local scope__
- any variable inside code block {} is said to be in the Local scope
- Local variables cannot be accessed outside a code block it was declared in
- Local variables cannot be modified outside a code block it was declared in

---

## Variable Lookup

Javascript looks up variables in the following order:
- local scope
- global scope

---

## Callback Functions and Higher Order Functions

- Callback functions are passed as an argument to a higher-order function and executed in that function.
- Higher-order functions accept another function as an argument.

### Callback Function

```javascript
// callback function
function morning(name) {
    return `Good morning ${name.toUpperCase}`;
}
```

### Higher-order Function

```javascript
// higher-order function
function greet(name, cb) {
    const myName = 'john';
    console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter', morning);
```

---

## Array Methods - Iterators

```javascript
// create an array
const people = [
{name: 'bob, age: 20, position: 'developer', id: 1, salary: 200},
{name: 'peter', age: 25, position: 'designer', id: 2, salary: 300},
{name: 'susy', age: 30, position: 'director', id: 3, salary: 400},
];
```

### forEach

```javascript
// foreach does not return a new array

function showPerson(person) {
    console.log(person.position.toUpperCase());
}

people.forEach(showPerson);
```

### map

```javascript
// map returns a new array
// map does not change the size of the original array
// map uses values from the original array when making a new one

const ages = people.map(function (person) {
    return person.age + 20;
});

const newPeople = people.map(function (person) {
    return {
        firstName: person.name.toUpperCase(),
        newAge: person.age + 20,
    };
});

console.log(ages);
console.log(newPeople);
```

### filter

```javascript
// filter returns a new array
// filter changes the size of the original array
// filter returns based on condition

const youngPeople = people.filter(function(person) {
    return person.age <=25;
});

const developers = people.filter(function(person) {
    return person.position === 'developer';
});
```

### find

```javascript
// find returns single object instance
// find returns the first match, and undefined if no match is found
// find is great for getting unique values

const person = people.find(function (person) {
    return person.id === 3;
});

console.log(person);
```

### reduce

```javascript
// reduce reduces the values in an array to a single value
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - the current iteration

const total = people.reduce(function (acc, curr) {
    acc += curr.salary;
    return acc;
}, 0);

console.log(total);
```

---

## Math Object

### floor

```javascript
// floor - truncates the decimal part
const result = Math.floor(4.56789);
console.log(result);
```

### ceiling

```javascript
// ceiling - gives you the next whole number
const result = Math.ceil(4.12222);
console.log(result);
```

### square root

```javascript
const result = Math.sqrt(4.89);
console.log(result);
```

### PI

```javascript
const result = Math.PI
console.log(result);
```

### minimum

```javascript
const result = Math.min(4, 5, 6, 7, 8, 9);
console.log(result);
```

### maximum

```javascript
const result = Math.max(4, 5, 6, 7, 8, 9);
console.log(result);
```

### random
```javascript
// random number from 0 to 0.9999..
const result = Math.random();
console.log(result);
```

---

## Date Object

```javascript
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const date = new Date();
const month = date.getMonth();
const day = date.getDay();

console.log(months[month]);
console.log(days[day]);
console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

console.log(sentence);
```

---

## DOM - Document Object Model

The DOM is similar to CSS; you select the element or group of elements that you want to affect.

```javascript
// assign to a variable
const element1 = document.getElementById('element');
const element2 = document.querySelector('element');
```

__DOM window object__

```javascript
// window object
console.log(window);
```

__DOM properties and Methods__

```javascript
// find the properties and methods
console.dir(document);
```

---

## Operations on the DOM

### getElementById('id')

```javascript
const h1 = document.getElementById('title')
h1.style.color = 'red';

document.getElementById('btn').style.backgroundColor = 'blue';
```

### getElementByTagName('tag')

```javascript
// returns a node-list array-like object

const headings = document.getElementByTagName('h2');
headings[0].style.color = 'red';

const items = document.getElementByTagName('li');
const betterItems = [..items]

betterItems.forEach(function (item) {
    console.log(item);
});
```

### getElementByClassName('class')

```javascript
// returns a node-list array-like object

const listItems = getElementByClassName('special');
console.log(listItems);
```

### querySelector('any css')

```javascript
// selects a single element

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const result = document.querySelector('.special');
console.log(item);

const result = document.querySelector('li:lastchild');
console.log(item);
```

### querySelectorAll('any css')

```javascript
// selects all elements

const list = document.querySelectorAll('.special');

list.forEach(function(item) {
    console.log(item);
    item.style.color = 'yellow';
});
```

---

## DOM - Child Nodes

```javascript
const result = document.querySelector('#result');
```

### childNodes

```javascript
// this returns all child element nodes, text nodes, and comment nodes.
// whitespace between elements are also text nodes.
const children = result.childNodes;
console.log(children);
```

### children

```javascript
// this returns all child elements (ignores text and comments).
const children = result.children;
console.log(children);
```

### firstChild

```javascript
// this returns the first child element node, text node, or comment node.
// whitespace between elements are also text nodes.
console.log(result.firstchild);

// The firstElementChild property returns the first child element (ignores text and comment nodes).
console.log(result.firstElementChild);
```

### lastChild

```javascript
// this returns the last child element node, text node, or comment node.
// whitespace between elements are also text nodes.
console.log(result.lastchild);

// The lastElementChild property returns the last child element (ignores text and comment nodes).
console.log(result.lastElementChild);
```

---

## DOM - Parent Nodes

```javascript
// parentNode property returns the parent node of an element or node.

const heading = document.querySelector('h2');
const parent = heading.parentElement;

parent.style.color = 'red';

// there is also parentElement
```

---

## DOM - Sibling Nodes

sibling nodes return previous sibling and next sibling

### nextSibling

```javascript
// nextSibling returns the next sibling element node, text node, or comment node.
// Whitespace between elements are also text nodes.
const first = document.querySelector('.first');
const second =  first.nextSibling; // whitespace
console.log(second);
const second =  first.nextSibling.nextSibling; // no whitespace
console.log(second);

// The nextElementSibling property returns the next sibling element (ignores text and comment nodes).
console.log(first.nextElementSibling);
```

### previousSibling

```javascript
// previousSibling returns the previous sibling element node, text node, or comment node.
// Whitespace between elements are also text nodes.
const last = document.querySelector('#last');
const third =  last.previousSibling; // whitespace
console.log(third);
const third =  last.previousSibling.previousSibling; // no whitespace
console.log(third);

// The previousElementSibling property returns the previous sibling element (ignores text and comment nodes).
console.log(last.previousElementSibling);
```

---

## DOM - Element Sibling Nodes 

Element sibling node returns previous element sibling and next element sibling without whitespace

### nextElementSibling

```javascript
// nextElementSibling
const first = document.querySelector('.first');
const second =  first.nextElementSibling;
second.style.color = 'red';
```

### previousElementSibling

```javascript
// previousElementSibling
const last = document.querySelector('#last');
const third =  last.previousElementSibling;
third.style.color = 'red';
```

---

## nodevalue

for the operations that return whitespaces, we can use nodevalue to get the actual value

```javascript
const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(value);
console.log(easyValue);
```

---

## Getting and Setting HTML Attributes

### getAttribute

```javascript
// getAttribute
const first = document.querySelector('.first');
const idValue = first.getAttribute('id');

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
```

### setAttribute

```javascript
// setAttribute

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have a  class of first'

console.log(last)
```

---

## Adding CSS dynamically using class list and class name


```javascript
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
```

### Class name

```javascript
// getting css class value
const classValue = first.className;
console.log(classValue)
```

```javascript
// setting css class value - this overwrites existing css classes
second.className = 'colors'
```

### Class list

```javascript
// using classList
third.classList.add('colors');
third.classList.remove('text');

let result = third.classList.contains('colors');
```

---

## Adding Elements Dynamically to a Document

```javascript
const result = document.querySelector('#result')
```

### createElement()

```javascript
// createElement - create empty element
const bodyDiv = document.createElement('div');
```

### createTextNode()

```javascript
// createTextNode - create a text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);
```

### appendChild()

```javascript
// create h2
const heading = document.createElement('h2');
const headingText = document.createTextNode('a dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');
result.appendChild(heading);
```

### insertBefore()

```javascript
// insertBefore('element', 'location');
document.body.insertBefore(bodyDiv, result);
```

### replaceChild()

```javascript
// replaceChild('old', 'new');
document.body.replaceChild(bodyDiv, result);
```

---

## prepend and innerText

```javascript
const heading = document.createElement('h2');
heading.innerText = `i am a dynamic heading`;
document.body.prepend(heading);
```

---

## remove and removeChild

```javascript
// remove
const result = document.querySelector('#result');
result.remove()

//removeChild
const heading = result.querySelector('h1');
result.removeChild(heading);
```

---

## innerHTML and textContent

innerHTML preserves the HTML structure while textContent treats supplied value as text

```javascript
const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.querySelector('.item')

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">list item</li>
                <li>list item<li> <li> list item>`;
document.body.appendChild(ul);
```

---

## CSS Style Property

```javascript
const random = document.querySelector('.random');

// the following styles are defined in a css with classname "title"
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTeansform = 'capitalize';

random.classList.add('title');
```

---

## Event Listeners

Event listeners work by first selecting the element and then adding a listener to it.

```javascript
const btn = document.querySelector('.btn');

// addEventListener( what event, what to do)
btn.addEventListener('click', function () {
    const heading = document.querySelector('h2');
    heading.classList.add('red');
})
```

```javascript
const btn = document.querySelector('.btn');

// Using function reference
function changeColors() {
    let hasClass = heading.classList.contains('red');
    hasClass ? heading.classList.remove('red') : heading.classList.add('red');
}

btn.addEventListener('click', changeColors);
```

---

## Mouse Events

```javascript
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
```

### click event

```javascript
// click
btn.addEventListener('click', function() {
    console.log('you clicked me');
});
```

### mousedown event

```javascript
// mousedown
btn.addEventListener('mousedown', function() {
    console.log('up');
});
```

### mouseup event

```javascript
// mouseup
btn.addEventListener('mouseup', function() {
    console.log('down');
});
```

### mouseenter event

```javascript
// mouseenter
heading.addEventListener('mouseenter', function() {
    heading.classList.add('blue');
});
```

### mouseleave event

```javascript
// mouseleave
heading.addEventListener('mouseleave', function() {
    heading.classList.remove('blue');
});
```

---

## Key Events

```javascript
const nameInput = document.getElementById('name');
```

### keypress event

```javascript
// keypress
nameInput.addEventListener('keypress', function() {
    console.log('you pressed a key');
});
```

### keydown event

```javascript
// keydown
nameInput.addEventListener('keydown', function() {
    console.log('you pressed a key');
});
```

### keyup event

```javascript
// keyup
nameInput.addEventListener('keyup', function() {
    console.log(nameInput.value);
});
```

---

## Event Objects

```javascript
// event.type
// event.currentTarget
// event.preventDefault()
// this

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

heading.addEventListener('click', function(event) {
    console.log(event.currentTarget);
    event.currenTarget.classList.add('blue');
});

btn.addEventListener('click', function(event) {
    console.log(event.currentTarget);
    event.currenTarget.classList.add('blue');
});
```

---

## Current target vs target

```javascript
const btns =  document.querySelectorAll('.btn');
```

```javascript
// currentTarget - this always refers to the element to which the event handler has been attached to

btn.forEach(function(btn) {
    btn.addEventListener('click', function(e) 
        console.log(e.currentTarget);
        e.currentTarget.style.color = 'green';
        });
});
```

```javascript
// target - this identifies the element on which the event occurred

btn.forEach(function(btn) {
    btn.addEventListener('click', function(e) 
        console.log(e.target);
        e.target.style.color = 'green';
        });
});
```

---

## Event Bubbling and Capturing - this allows us to select dynamic elements

Event Bubbling and capturing allows us to select dynamic elements:

- event propagation: this is the order in which the events are fired
- event capturing: this registers the event at the root and keeps going until it reaches the target
- event bubbling: this selects the clicked element first, then bubble-ups

```javascript
const container = document.querySelector('.container');
const list = document.querySelector(.list-items);

function showBubbling(e) {
    console.log('current target: ', e.curentTarget);
    console.log('target: ', e.target);
};

list.addEventListener('click', showBubbling);
container.addEventListener('click', showBubbling);

// event propagation
btn.addEventListener('click', function() {
    const element = document.createElement('h1');
    element.classList.add('heading');
    element.textContent = `i'm inside the container`;
    container.appendChild(element);
});

container.addEventListener('click', function(e) {
    (event.target.classList.contains('heading') ? console.log('hello there');
});
```

---

## HTML Forms

```javascript
const form = documetn.getElementById('form');
const name = documetn.getElementById('name');
const password = documetn.getElementById('password');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('form submitted');
    console.log(name.value);
    console.log(password.value);
});
```

---

## Local Storage

### setItem()

```javascript
// setItem
localStorage.setItem('name', 'john');
localStorage.setItem('friend', 'john');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');
```

### getItem()

```javascript
// getItem
name = localStorage.getItem('name', 'john');
console.log(name);
```

### removeItem()

```javascript
// removeItem
localStorage.removeItem('name');
```

### clearItem()

```javascript
// clear
localStorage.clear();
```

---

## JSON

```javascript
const friends = ['john', 'peter', 'bob'];
```

### JSON.stringify()

```javascript
// JSON.stringify()
localStorage.setItem('friends', JSON.stringify(friends));
```

### JSON.parse()

```javascript
// JSON.parse()
const values = JSON.parse(localStorage.getItem('friends');
console.log(values[2]);
```

### JSON use case

```javascript
let fruits;

if(localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
    fruits = []
}

console.log(fruits);
fruits.push('apple');
localStorage.setItem('fruits', JSON.stringify(fruits));
```
