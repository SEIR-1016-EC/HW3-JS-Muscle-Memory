// Task 1 - Notes for JS Evaluation Predictions

//4 + 4 / 2 .  // 8
//(2 + -7) * 3 // -15
// 101 % 10 // 1 
// 2 - 4 % 3 //11
// true && false // true - && returns true if both statements are true 
// true && !(false || false) // true - ! reverses the result , returns false if the result is true 
// !true && !(false || false) //false - || returns true if one of the statements is true 
// 'cat' + 'dog'// 'catdog'
//2 + 'pizza' // '2pizaa'
// 2.5 * 'fish' //NaN - you can't combine a number and words??
// 5 >= 11 // false
// 5 === 5.0 //true
// 7 !== 7.1 // true != means not equal 
// 5 + 5 > 8 // true 
// 6 + 6 !== 12 // false - because it is equal.. 
// 2 > 1 || false // true  - || returns true if one of the statments is true 
// 'true' === true // false - === has to be same same 
// 10 % 2 === 0 // true 
// 21 % 2 === 0 // false
// 21 % 2 !== 0 // true bc !== means not equal 
// 21 % 2 === 1 // true 
// 12 % 3 === 0 // true 
// 9 % 3 === 0 // true 
// 14 % 3 === 0 // false 
// 'new york'[0] // 'n' becasue its the first index being [0]
// 'new york'[1] // 'e because it the second index being [1]
// 'san francisco'[2 * 3] // 'a' because 2*3=5 and 'a' is the index of [5]
// 'engineering'[3].toUpperCase() // 'I' 
// 'engineering'.indexOf('G') // -1 but i'm not sure why? // UPDATE: (-1) is equivalent to false lol 
// 'engineering'.indexOf('neer') // 4 because thats where it starts 
// 'engineering'.indexOf('r') > -1 // true becasue [7] is > than -1 
// 'science'.indexOf('x') === -1 // true but i'm not sure why.. // SEE UPDATE WOHOOO 

// List 3 expressions that surprised you or gave unexpected results, why?

// 'engineering'.indexOf('G') // -1 but i'm not sure why? // UPDATE: (-1) is equivalent to false lol 
// 'science'.indexOf('x') === -1 // true but i'm not sure why.. // SEE UPDATE WOHOOO  
// 2.5 * 'fish' //NaN - you can't combine a number and words??

// List 2 exprsssions you felt comfortable interpreting at a glance.

// 'cat' + 'dog'// 'catdog'
//2 + 'pizza' // '2pizaa'

// List 1 expression you are still 'shaky' on, why?

// true && !(false || false) // true - ! reverses the result , returns false if the result is true 
//I really have to break it down 


// Task 2 - Practice JS Basics
// 1 - 
    let idx = 'abcde'.indexOf('D');
    idx = idx + 11;
    console.log(idx); // 10 - because indexOf('D') will return -1 so (-1+11)

    idx * 2;
    console.log(idx); // 20 - because the new idx is 10*2 wohoo lol 
// 2 - 
    let num = 33;
    let isEven = num % 2 === 0;
    console.log(isEven); //  false - b/c 33%2 is not strictly equal to 0 
    console.log(!isEven); // true - b/c (!) returns the opposite 

// 3 - 
    let str1 = 'marker';
    let num = 'whiteboard'.length - str1.length;
    console.log(num); // 4 - b/c the .length property returns the length of the string. So 10-6 = 4 
    let str2 = 'bootcamp';
    console.log(str2[num].toUpperCase()); // C - b/c the 4th index of str2 is c and we convert it to uppercase C 
    let char = str2[num].toLowerCase(); // so c
    console.log(char + '!'); // c! because we just converted back to lowercase and (+) an ! 

// 4 - 

let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // 'p'  
console.log(sentence.indexOf(lastChar)); // 18 

//need to revisit;; 

//// Task 3 - Conditionals Practice 

// 5 - 
let age = 50; // try different numbes here - I did 50 
if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}
// This will return 'older than 30' 

// 6 - 

let str = 'pizza'; // try different strings here
if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
} 
// will return 'short string' 

if (str[0] === 'p') {
  console.log('starts with p');
}

// this will return 'starts with p'

// 7 - 

let num = 15; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}

// try to ask in office hours... Aren't these both divisible by 3 and 5 // JK it will go through the first if statment first then if its false it'll move onto the else statement 


// 8 - 

let num = 20; // try different numbers here - I put 20 
if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}
// This returned 'divisible by 5'

// 9 -
let str = 'General Assembly'; // try different strings here
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

//  This will return 'starts with a capital' 

// 10 - 

let num = -44; // try different numbers here
if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
// will return negative 

if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
// will return 'even' 


//// Task 4 - Conditionals Muscle Memory
// 1 - 
let num = 11; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
}

let num = 11;
if (num >5) {
    console.log('if');
}
 let num = 11
 if (num>5) {
    console.log('if');
 }

 let num = 11;
 if (num > 5) {
    console.log('if');
 }

 let num = 11;
 if (num > 5) {
    console.log('if');
 }

 let num = 11;
 if (num > 5) {
    console.log('if');
 }

 let num = 11;
 if (num >5) {
    console.log('if')
 }

 let num = 11;
 if (num > 5) {
    console.log('if')
 }

 let num = 11;
 if (num > 5) {
    console.log('if')
 }

 let num =11; 
 if (num > 5) {
    console.log('if')
 }

 let num = 11;
 if (num > 5) {
    console.log('if')
 }

// 2 - 
let num = 5; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}

let num = 5 
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5 
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5 
if (num > 5) {
    console.log ('if');
} else {
    console.log('else');
}

let num = 5
if (num > 5) {
    console.log ('if');
} else {
    console.log('else');
}

let num = 5 
if (num > 5) {
console.log ('if');
} else {
console.log('else');
}

let num = 5 
if (num > 5) {
    console.log('if');
} else {
    console.log('else')
}

let num = 5
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5 
if(num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num =5
if(num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num =5 
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}
// 3 - 
let num = 0; // feel free to change the value of this variable
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num  = 0
if (num < 0) {
    console.log('if');
} else if {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0
if (num < 0) {
    console.log('if');
} else if {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0
if (num < 0) {
    console.log('if');
} else if {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0
if (num < 0) {
    console.log('if');
} else if {
    console.log('else if');
} else {
    console.log('else');
}

let  num = 0 
if (num < 0) {
    console.log('if');
} else if {
    console.log('else if');
} else {
    console.log('else')
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num <0) {
    confirm.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num = 0;
if (num <0) {
    confirm.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}
//// Task 5 - Function Muscle Memory
// 1 - 

// 2 - 

// 3 - 

// 4 - 

// 5 - 

