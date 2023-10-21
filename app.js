// Task 1 - Notes for JS Evaluation Predictions
/*
let a = (4 + 4 / 2) // 4 + (4/2) = 6
let b = ((2 + -7) * 3) //-5 * 3 = -42
let c = (101 % 10) // 1 (remainder)
let d = (12 - 4 % 3) // 12 - 1(remainder) = 11
let e = (true && false) // false (true and false cannot be true)
let f = (true && !(false || false)) // **TRUE (true and not true (false) or not false(true)) --> True and True or False
let g = (!true && !(false || false)) //False (not true and not false or not false) --> False and True or False
let h = ('cat' + 'dog') //catdog
let i = (2 + 'pizza') //**2pizza (number 2 and the string pizza)
let j = (2.5 * 'fish') // NaN
let k = (5 >= 11) // false
let l = (5 === 5.0) // true
let m = (7 !== 7.1) // true
let n = (5 + 5 > 8) // true (10 > 8)
let o = (6 + 6 !== 12) // false (12 = 12)
let p = (2 > 1 || false) // true 2 is greater than 1 or false
let q = ('true' === true) //**FALSE 'true' does not strictly equal/compare to another valid operator
let r = (10 % 2 === 0) //***TRUE % is calculating the remainder of 10 divided by 2, which is 0... 0 = 0
let s = (21 % 2 === 0) // False checking for the remainder, 21/2 has a remainder, therfore 1 does not  = 0
let t = (21 % 2 !== 0) // true the remainder of 21/2 does not equal 0
let u = (21 % 2 === 1) // true there is a remainder
let v = (12 % 3 === 0) // true no remainder
let w = (9 % 3 === 0) // true no remainder
let x = (14 % 3 === 0) // false remainder 1 does not equal 0
let y = ('new york'[0]) // 'n' or the first position in the array "new york"
let z = ('new york'[1]) // 'e' or the second position in the array "new york"
let aa= ('san francisco'[2 * 3]) // 'a' the 6th position of the array
let bb= ('engineering'[3].toUpperCase()) // I
let cc= ('engineering'.indexOf('G')) //** -1 'G' can't be found so javascript returns a -1
let dd= ('engineering'.indexOf('neer')) //4 'neer' begins in the 4th index
let ee= ('engineering'.indexOf('r') > -1) //true 'r' exists and is therefore greater than -1 (not found value)
let ff= ('science'.indexOf('x') === -1) // true 'x' does not exist and is therefore equal to the return value of -1

console.log(ff)
*/
/*
// List 3 expressions that surprised you or gave unexpected results, why?

1.  'engineering'.indexOf('G') returns a -1:  did not know that javascript will return a -1 for values that are not found in an array
2.  (true && !(false || false)) evaluates to TRUE.  True and True or False
3.  (2 + 'pizza') I mistaking viewed this as a mathmatical calcualtion rather than a string expression


// List 2 exprsssions you felt comfortable interpreting at a glance.

1.  (5 >= 11)
2.  ('cat' + 'dog')

// List 1 expression you are still 'shaky' on, why?

('true' === true) . I don't think I understand entirely why this does not evaluate to true.  the string 'true' is a truthy variable, 
                    this is my confusion.

*/

// Task 2 - Practice JS Basics
// 1
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // 10 'D" does not exist and will return -1.  (-1) + 11 (number + a number) will return 10
idx * 2;
console.log(idx); //*** idx = 10, because we are not updating the value by explicitly assigning a 'let =', therefore idx remains 10

// 2
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); // false, there is a remainder for 33 divided by 2, as such 1 is not equal to 0
console.log(!isEven); //true, 1 is not even to 0

// 3
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); // 4: 'whiteboard' length = 10, str1 'marker' length = 6 --> 10 - 6 = 4
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // C
let char = str2[num].toLowerCase(); // c
console.log(char + '!'); //*** 'c!'

// 4
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // 'p'
console.log(sentence.indexOf(lastChar)); // 18 (the first 'p')

// 5 - 

// 6 - 

// 7 - 

// 8 - 

// 9 -

// 10 - 


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

