// Task 1 - Notes for JS Evaluation Predictions
// 4 + 4 / 2 = 4
// (2 + -7) * 3 = -15
// 101 % 10 = 1
// 12 - 4 % 3 = 2.5
// truetrue && && false = false
// true && !(false || false) = true
// !true && !(false || false) = false
// 'cat' + 'dog' = true
// 2 + 'pizza' = true
// 2.5 * 'fish' = true
// 5 >= 11 = false
// 5 === 5.0 = true
// 7 !== 7.1 = false
// 5 + 5 > 8 = true
// 6 + 6 !== 12 = false
// 2 > 1 || false = true 
// 'true' === true = false
// 10 % 2 === 0 = false
// 21 % 2 === 0 = false
// 21 % 2 !== 0 = true
// 21 % 2 === 1 = true
// 12 % 3 === 0 = false
// 9 % 3 === 0 = true
// 14 % 3 === 0 = true
// 'new york'[0] = 'n'
// 'new york'[1] = 'e'
// 'san francisco'[2 * 3] = 'r'
// 'engineering'[3].toUpperCase() = 'I'
// 'engineering'.indexOf('G') = 2
// 'engineering'.indexOf('neer') = 4 
// 'engineering'.indexOf('r') > -1 = true
// 'science'.indexOf('x') === -1 = true

// List 3 expressions that surprised you or gave unexpected results, why?

//  2.5 * 'fish' = true lol

// List 2 exprsssions you felt comfortable interpreting at a glance.
//   ||, &&
// List 1 expression you are still 'shaky' on, why?

//  % modulus i just need practice and repitition




// Task 2 - Practice JS Basics
// 1 - 

let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx);
idx * 2;
console.log(idx);

// 2 - 

let num =33;
let isEven = num % 2 === 0;
console.log(isEven);
console.log(!isEven);

// 3 - 

let str1 = 'marker';
let num1 = 'whiteboard'.length - str1.length;
console.log(num1); // ?
let str2 = 'bootcamp';
console.log(str2[num1].toUpperCase()); // ?
let char = str2[num1].toLowerCase(); // ?
console.log(char + '!'); // ?

// 4

let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // ?
console.log(sentence.indexOf(lastChar));

// 5

let age = 30; // try different numbers here
if (age > 30) {
    console.log('older than 30');
} else {
    console.log('younger than 30');
}

// 6

let str3 = 'pizza'; // try different strings here
if (str3.length > 10) {
    console.log('long string');
} else {
    console.log('short string');
}
if (str3[0] === 'p') {
    console.log('starts with p');
}

// 7

let num2 = 15; // try different numbers here
if (num2 % 3 === 0) {
    console.log('divisible by 3');
} else if (num2 % 5 === 0) {
    console.log('divisible by 5');
}

// 8

let num3 = 15; // try different numbers here
if (num3 % 3 === 0) {
    console.log('divisible by 3');
}
if (num3 % 5 === 0) {
    console.log('divisible by 5');
}

// 9

let str = 'General Assembly'; // try different strings here
if (str[0] === str[0].toUpperCase()) {
    console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
    console.log('ends with a capital!');
}

// 10

let num4 = -44; // try different numbers here
if (num4 > 0) {
    console.log('positive');
} else if (num4 < 0) {
    console.log('negative');
} else {
    console.log(0);
}
if (num4 % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}


//// Task 3 - Conditionals Practice 
// 1 - 

// 2 - 

// 3 - 

// 4 - 

// 5 - 

// 6 - 

// 7 - 

// 8 - 

// 9 -

// 10 - 

//// Task 4 - Conditionals Muscle Memory
// 1 - 

// 2 - 

// 3 - 

// 4 - 

// 5 - 

// 6 - 

// 7 - 

// 8 - 

// 9 -

// 10 - 


//// Task 5 - Function Muscle Memory
// 1 - 

// 2 - 

// 3 - 

// 4 - 

// 5 - 

