// Task 1 - Notes for JS Evaluation Predictions
/*
 4 + 4 / 2 ---> 6
(2 + -7) * 3 ---> -15
101 % 10 ---> 1
12 - 4 % 3 ---> 11
true && false ---> false
true && !(false || false) ---> true
!true && !(false || false) ---> false (surprised)
'cat' + 'dog' ---> 'catdog'
2 + 'pizza' ---> '2pizza
2.5 * 'fish' ---> not a number
5 >= 11 ---> false
5 === 5.0 ---> true (surprised)
7 !== 7.1 --->true
5 + 5 > 8 --->true
6 + 6 !== 12 --->false
2 > 1 || false ---> true
'true' === true ---> false
10 % 2 === 0 ---> true
21 % 2 === 0 ---> false 
21 % 2 !== 0 ---> true 
21 % 2 === 1 ---> true 
12 % 3 === 0 ---> true
9 % 3 === 0 ---> true
14 % 3 === 0 ---> true
'new york'[0] ---> 'n'
'new york'[1] ---> 'e'
'san francisco'[2 * 3] ---> 'a' but the second a (surprised)
'engineering'[3].toUpperCase() ---> 'I"
'engineering'.indexOf('G') ---> -1
'engineering'.indexOf('neer') --->  4
'engineering'.indexOf('r') > -1 ---> true
'science'.indexOf('x') === -1 ---> true
*/
// List 3 expressions that surprised you or gave unexpected results, why?
/*
4 + 4 / 2 
5 === 5.0
'science'.indexOf('x') === -1

*/
// List 2 exprsssions you felt comfortable interpreting at a glance.
/*
'new york'[0] ---> 'n'
6 + 6 !== 12 --->false
*/
// List 1 expression you are still 'shaky' on, why?
//'science'.indexOf('x') === -1, how is it finding a position for x? but I think it's understands it as a negative regardless so it's more "falsy"




// Task 2 - Practice JS Basics

// 1 - // 1
/*
let idx = 'abcde'.indexOf('D');
idx = idx + 11; // 10
console.log(idx); // 10, 'D' is -1 positioning so 11 +(-1) is 10.
idx * 2; //20
console.log(idx); // 10
*/

// 2 - // 2
/*
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); // false
console.log(!isEven); // true
*/

// 3 - // 3
/*

let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); // 4
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // 'C' the 4th positioning is c but with uppercasing it becomes a captial 'C'
let char = str2[num].toLowerCase(); //
console.log(char + '!'); // 'c!'
*/

// 4 - // 4
/*
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // 'p' 
console.log(sentence.indexOf(lastChar)); // 18 I am assuming  it is getting the first instance of 'p'
*/
/*


//// Task 3 - Conditionals Practice 
/*
// 5 - 
let age = 23;
if(age > 30){
    console.log('older than 30');
} else {
    console.log('younger than 30');
}

will print out 'younger than 30'

*/

// 6 - 
/*
let str = 'Whistle Pig';
if (str.length > 10){
    console.log('long string');
} else {
    console.log('short string')
}
if(string[0] === 'w'){
    console.log('starts with w');
}

will print out 'long string'

*/
/*
// 7 - 
let num = 30;
if (num % 3 === 0){
    console.log('divisible by 3');
}
if (num % 5 === 0){
    console.log('divisble bby 5');
}

will print out both.

*/

/*
// 8 - 
let num = 27;
if (num % 3 === 0){
    console.log('divisble by 3');
} if (num % 5 === 0){
    console.log('divisble by 5');
}

will print out 'divisble by 3'

*/

/*
// 9 -
let str = 'Brickell Lounge';
if (str[0] === str[0].toUpperCase()){
    console.log('starts with a capital!');
}
if(str[str.length - 1] === str[str.length - 1].toUpperCase()){
    console.log('ends with a capital!');
}

will print out 'starts with a capital!'

*/
// 10 - 
/*
let num = -99;
if (num > 0){
    console.log('positive');
} else if (num < 0){
    console.log('negative');
} else {
    console.log(0);
}
if (num % 2 === 0){
    console.log('even');
} else {
    console.log('odd')
}

/*
will print out both 'negative' and 'odd'

*/

//// Task 4 - Conditionals Muscle Memory
// 1
/*
let num = 11;
if(num >5){
    console.log('if');
}

// 2 - 

let num = 12;
if(num > 5){
    console.log('if');
}

// 3 - 
let num = 13;
if(num > 5){
    console.log('if');
}

// 4 - 
let num = 14;
if(num > 5){
    console.log('if');
}

// 5 - 
let num = 15;
if(num > 5){
    console.log('if');
}

// 6 - 
let num = 16;
if(num > 5){
    console.log('if');
}
// 7 - 
let num = 17;
if(num > 5){
    console.log('if');
}
// 8 - 
let num = 18;
if(num > 5){
    console.log('if');
}

// 9 -
let num = 19;
if (num > 5){
    console.log('if');
}
// 10 - 
let num = 20
if(num > 5){
    console.log('if');
}

// 1 - 
let num = 5;
if (num > 5){
    console.log('if');
} else {
    clg
}
// 2 - 

// 3 - 

// 4 - 

// 5 - 

// 6 - 

// 7 - 

// 8 - 

// 9 - 

// 10 - 

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

