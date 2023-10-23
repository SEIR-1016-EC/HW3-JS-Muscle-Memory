/* Task 1 - Notes for JS Evaluation Predictions */

// List 1: expression you are still 'shaky' on, why?


// List 2: expressions you felt comfortable interpreting at a glance.
/* 4 + 4 / 2
(2 + -7) * 3
101 % 10
12 - 4 % 3
true && false
true && !(false || false)
!true && !(false || false)
'cat' + 'dog'
2 + 'pizza'
5 >= 11
5 === 5.0
7 !== 7.1
5 + 5 > 8
6 + 6 != 12
2 > 1 || false
'true' === true
10 % 2 === 0
21 % 2 === 0
21 % 2 !== 0
21 % 2 === 1
12 % 3 === 0
9 % 3 === 0
14 % 3 === 0
'new york'[0]
'new york'[1]
'san francisco'[2 * 3]
'engineering'[3].toUpperCase()
'engineering'.indexOf('r') > -1
'sciende'.indexOf('x') === -1


// List 3: expressions that surprised you or gave unexpected results, why?
2.5 * 'fish' // I never tried doing something like this. This one was surprising but expected
'engineering'.indexOf('G') // I thought the result was undefined because we don't have an upper case G. I didn't know the result would be -1 when not existent
'engineering'.indexOf('neer') // I thought the result would be undefined because it was given more than one character to return a index. 
 */

// Task 2 - Practice JS Basics
// 1 - 
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // 10
idx * 2;
console.log(idx); // 20 - wrong! I didn't pay attention here and thought the calculation on line 49 would automatically store the new value.

// 2 - 
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); // false
console.log(!isEven); // true

// 3 - 
let str1 = 'marker';
let num2 = 'whiteboard'.length - str1.length;
console.log(num2); // 4
let str2 = 'bootcamp';
console.log(str2[num2].toUpperCase()); // C
let char = str2[num2].toLowerCase(); // c
console.log(char + '!'); // c!

// 4 - 
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // p
console.log(sentence.indexOf(lastChar)); // 18


//Task 3 - Conditionals Practice 

// 5 - 
let age = 80;
if (age > 30) {
    console.log('older than 30')
} else {
    console.log('younger than 30')
}

// 6 -
let str = 'cheeeeeeeeese'
if (str.length > 10) {
    console.log('long string');
} else {
    console.log('short string')
}
if (str[0] === 'p') {
    console.log('starts with p')
}

// 7 - 
let num3 = 20
if (num3 % 3 === 0) {
    console.log('divisible by 3')
} else if (num3 % 5 === 0) {
    console.log('divisible by 5')
}

// 8 - 
let num4 = 30
if (num4 % 3 === 0) {
    console.log('divisible by 3')
}
if (num4 % 5 === 0) {
    console.log('divisible by 5')
}

// 9 -
let str3 = 'HalloweeN'
if (str3[0] === str3[0].toUpperCase()) {
    console.log('starts with a capital!')
}
if (str3[str3.length - 1] === str3[str3.length - 1].toUpperCase()) {
    console.log('ends with a capital!')
}


// 10 - 
let num5 = -13
if (num5 > 0) {
    console.log('positive')
} else if (num5 < 0) {
    console.log('negative')
} else {
    console.log(0)
}
if (num5 % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}

// Task 4 - Conditionals Muscle Memory
// 1 - 
let num6 = 27
if (num > 5) {
    console.log('if')
}

// 2 - 
let num7 = 23
if (num7 > 5) {
    console.log('if')
} else {
    console.log('else')
}

// 3 - 
let num8 = 17
if (num8 < 0) {
    console.log('if')
} else if (num8 > 0) {
    console.log('else if')
} else[
    console.log('else')
]


// Task 5 - Function Muscle Memory
// 1 - 


// 2 - 

// 3 - 

// 4 - 

// 5 - 

