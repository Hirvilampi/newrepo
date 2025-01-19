/*
Convert the following pieces of ES5 style code to modern JavaScript

You can run the program with Node.js in any command shell:
% node es6ify.js

Uncomment the test to see the output.

*/

console.log(`The program should output:
1 Hello, World!
2 Hi Teppo!    
3 100
4 46
5 65536        
6 Tom Cruise true 57
7 { name: 'result', value: 42 }
8 apple 3
9 [ 'one', 'two', 'three', 'four' ]
10 { id: 723647, name: 'Tom Cruise', age: 58, profession: 'actor' }
Bonus [ 'f', 'o', 'o', 'b', 'a', 'r' ]
`);


// 1 (arrow function)
// convert to arrow function
//
function hello() {
    console.log('1 Hello, World!');
}

// test 1
// hello();

// 2 (arrow function, string interpolation)
// convert to arrow function
// 
function sayHi(name) {
    console.log('2 Hi ' + name + '!');
}

// test 2
// sayHi('Teppo');

// 3 (arrow function)
// convert to arrow function
//
function multiplyByTen(a) {
    return a * 10;
}

// test 3
// console.log(3, multiplyByTen(10)); 

// 4 (arrow function)
// convert to arrow function
//
function sum(a, b) {
    return a + b;
}

// test 4
// console.log(4, sum(12,34));

// 5 (arrow function)
// convert to arrow function
//
function power(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

// test 5
// console.log(5, power(2, 16)); 

// 6 (object destructuring)
// assign object properties into separate variables
//
var person = {
    firstName: 'Tom',
    lastName: 'Cruise',
    actor: true,
    age: 58
}

var firstName = person.firstName;
var lastName = person.lastName;
var actor = person.actor;
var age = person.age;

// test 6
// console.log(6, firstName, lastName, actor, age); 

// 7 (property initializer shorthand)
// set object properties from variables
//
var name = 'result';
var value = 42;

var data = {
    name: name,
    value: value
}

// test 7
// console.log(7, data);

// 8 (array destructuring assignment)
// define separate variables and assign values from an array
//
var arrayOfItems = ['apple', 3];

var item = arrayOfItems[0];
var amount = arrayOfItems[1];

// test 8
// console.log(8, item, amount); 

// 9 (spread operator)
// combine arrays into a new array
//
var array1 = ['one', 'two'];
var array2 = ['three', 'four']
var array3 = array1.concat(array2);

// test 9
// console.log(9, array3); 

// 10 (spread operator)
// update the state of object with with partial content, leaving other attributes in tact
//
var entity = {
    id: 723647,
    name: 'Tom Cruise',
    age: 57
};

var update = {
    age: 58,
    profession: 'actor'
};

entity.age = update.age;
entity.profession = update.profession;

// test 10
// console.log(10, entity);


// Bonus (spread operator)
// Nice to know: spread works on strings too!
// split string into array of characters
//
var str = 'foobar';
var arr = [];
for (var i = 0; i < str.length; i++) {
    arr[i] = str[i];
}

// test bonus
// console.log("Bonus", arr);

