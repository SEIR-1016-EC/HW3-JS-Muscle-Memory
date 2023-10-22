// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?

2 + 'pizza' // I thought it would throw an error because 2 is not a string
5 === 5.0 // With strict equality I thought it might be false, but I realize those numbers are identical
'san francisco'[2 * 3] // forgot about zero indexing for a moment


// List 2 expressions you felt comfortable interpreting at a glance.

101 % 10
true && false

// List 1 expression you are still 'shaky' on, why?
'engineering'.indexOf('neer') // I assume that it returns where this starts in the index, but why not a range?


// Task 2 - Practice JS Basics
// 1 - 
// let idx = 'abcde'.indexOf('D')
// idx = idx + 11
// idx * 2
//console.log(idx)
// 2 - 
// let num = 33
// let isEven = num % 2 === 0
// console.log(isEven)
// console.log(!isEven)
// 3 - 
// let str1 = 'marker'
// let num = 'whiteboard'.length - str1.length
// console.log(num)
// let str2 = 'bootcamp'
// console.log(str2[num].toUpperCase())
// let char = str2[num].toLowerCase()
// console.log(char + '!')
// 4 - 
// let sentence = 'welcome to bootcamp prep'
// let lastChar = sentence[sentence.length -1]
// console.log(lastChar)
// console.log(sentence.indexOf(lastChar)) // Tricky, but I noticed it would return the first 'p' in the string
//// Task 3 - Conditionals Practice 
// 5 - 
// let age = 50
// if (age > 100) {
//     console.log('looking good for your age')
// } else {
//     console.log('lol not even a century yet')
// }
// 6 - 
// let str = 'please sir, I want some more'
// if(str.length > 10) {
//     console.log('long string')
// } else {
//     console.log('short string')
// }
// if (str[0] === 'p') {
//     console.log('starts with p')
// }
// 7 - 
// let num = 333
// if (num % 3 === 0) {
//     console.log('divisible by 3')
// } else if (num % 5 === 0) {
//     console.log('divisible by 5')
// }
// 8 - 
// let num = 300
// if (num % 3 === 0){
//     console.log('divisible by 3')
// }
// if (num % 5 === 0) {
//     console.log('divisible by 5')
// }
// 9 -
// let str = 'General AssemblY'
// if (str[0] === str[0].toUpperCase()) {
//     console.log('starts with a capital!')
// }
// if (str[str.length - 1] === str[str.length - 1].toUpperCase()){
//     console.log('ends with a capital!')
// }

// 10 - 
// let num = 43
// if (num > 0) {
//     console.log('positive')
// } else if (num < 0){
//     console.log('negative')
// } else {
//     console.log(0)
// }
// if (num % 2 === 0){
//     console.log('even')
// } else {
//     console.log('odd')
// }


//// Task 4 - Conditionals Muscle Memory
// 1 - 
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }

// // 2 - 

// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('if');
// } else if (num > 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }

// // 3 - 
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('if');
// } else if (num > 0){
//     console.log('else if');
// } else {
//     console.log ('else');
// }

// // 4 - 
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }
// // 5 - 
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }
// // 6 - 
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }
// // 7 - 
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }
// // 8 - 
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }
// // 9 -
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }
// // 10 - 
// let num = 11;
// if (num > 5) {
//     console.log('if');
// }

// let num = 5;
// if (num > 5) {
//     console.log('if');
// } else {
//     console.log('else');
// }

// let num = 0;
// if (num < 0) {
//     console.log('else if');
// } else {
//     console.log('else');
// }

//// Task 5 - Function Muscle Memory
// 1 - 

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name){
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));
// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));

// function sayHello(name) {
//     let msg = 'Hello, ' + name + '. How are you?';
//     return msg;
// }
// console.log(sayHello('bootcamp prep'));
// 2 - 
// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(5));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log (checkNumber(-1))

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(0));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(5));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(6));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(7));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(8));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(9));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(10));

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(checkNumber(100));
// 3 - 
// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }    
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }    
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }    
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }    
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }    
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }    
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }    
// }

// function fizzBuzz1(max) {
//     for (let i = 0; i < max; i += 1) {

//         if (i % 3 === 0 && i % 5 !== 0) {
//             console.log(i);
//         } else if (i % 5 === 0 && i % 3 !== 0) {
//             console.log(i);
//         }
//     }    
// }
// console.log(fizzBuzz1(15))
// 4 - 
// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];
   
//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if(i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }
//     return newSentence;
// }

// console.log(evenCaps('This is a test'))

// 5 - 

// I only see four code snippets in the exercise