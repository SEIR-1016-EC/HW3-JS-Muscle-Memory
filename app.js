// // Task 1 - Notes for JS Evaluation Predictions

// // List 3 expressions that surprised you or gave unexpected results, why?

// "true" === true; //false
// //Thought 'true' is a truthy statement which is equal to true
// "new york"[0]; //n
// "new york"[1]; //e
// "san francisco"[2 * 3]; //a
// "engineering".indexOf("G"); //-1
// //Didn't know you can use [] to find indeces of a string
// //Didn't know you can use dot notation on a string

// // List 2 exprsssions you felt comfortable interpreting at a glance.
// 10 % 2 === 0; //true
// 21 % 2 === 0; //false

// // List 1 expression you are still 'shaky' on, why?
// "true" === true; //false
// //Thought 'true' is a truthy statement which is equal to true
// /* === is an exact comparison so maybe because a truthy statemeny isnt EXACTLY equal to the
// boolean of true it returns false */

// // Task 2 - Practice JS Basics
// // 1 -
// let idx = "abcde".indexOf("D");
// idx = idx + 11;
// console.log(idx); // 10
// idx * 2;
// console.log(idx); // 20
// /*The value of idx*2 does not change the value of idx becuase it isnt assigned a variable
// so my prediction was incorrect */

// // 2
// let num = 33;
// let isEven = num % 2 === 0;
// console.log(isEven); // false
// console.log(!isEven); // true

// // 3
// let str1 = "marker";
// let num1 = "whiteboard".length - str1.length;
// console.log(num1); // 4
// let str2 = "bootcamp";
// console.log(str2[num1].toUpperCase()); // C
// let char = str2[num1].toLowerCase(); // c
// console.log(char + "!"); // c!

// // 4
// let sentence = "welcome to bootcamp prep";
// let lastChar = sentence[sentence.length - 1];
// console.log(lastChar); // p
// console.log(sentence.indexOf(lastChar)); // 18

// //// Task 3 - Conditionals Practice
// // 1
// let age = 30;
// if (age > 30) {
//   console.log("older than 30");
// } else {
//   console.log("younger than 30");
// }

// // 2
// let str = "pizza";
// if (str.length > 10) {
//   console.log("long string");
// } else {
//   console.log("short string");
// }
// if (str[0] === "p") {
//   console.log("starts with p");
// }

// // 3
// let num2 = 15;
// if (num2 % 3 === 0) {
//   console.log("divisible by 3");
// } else if (num2 % 5 === 0) {
//   console.log("divisible by 5");
// }

// // 4
// if (num2 % 3 === 0) {
//   console.log("divisible by 3");
// }
// if (num2 % 5 === 0) {
//   console.log("divisible by 5");
// }

// // 5
// let str3 = "General Assembly";
// if (str3[0] === str3[0].toUpperCase()) {
//   console.log("starts with a capital!");
// }
// if (str3[str3.length - 1] === str3[str3.length - 1].toUpperCase()) {
//   console.log("ends with a capital!");
// }

// // 6
// let num3 = 0;
// if (num3 > 0) {
//   console.log("positive");
// } else if (num3 < 0) {
//   console.log("negative");
// } else {
//   console.log(0);
// }
// if (num3 % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// //// Task 4 - Conditionals Muscle Memory
// // 1 -
// let num4 = 11;
// if (num4 > 5) {
//   console.log("if");
// } else if (num4 > 0) {
//   console.log("else if");
// } else {
//   console.log("else");
// }

// // 2 -
// let num4 = 11;
// if (num4 > 5) {
//   console.log("if");
// } else if (num4 > 0) {
//   console.log("else if");
// } else {
//   console.log("else");
// }

// // 3 -
// let num4 = 11;
// if (num4 > 5) {
//   console.log("if");
// } else if (num4 > 0) {
//   console.log("else if");
// } else {
//   console.log("else");
// }
// // 4 -
// let num4 = 11;
// if (num4 > 5) {
//   console.log("if");
// } else if (num4 > 0) {
//   console.log("else if");
// } else {
//   console.log("else");
// }

// // 5 -
// let num4 = 11;
// if (num4 > 5) {
//   console.log("if");
// } else if (num4 > 0) {
//   console.log("else if");
// } else {
//   console.log("else");
// }

// // 6 -
// let num4 = 5;
// if (num4 < 0) {
//   console.log("if");
// } else {
//   console.log("else");
// }
// // 7-
// let num4 = 5;
// if (num4 < 0) {
//   console.log("if");
// } else {
//   console.log("else");
// }
// // 8 -
// let num4 = 5;
// if (num4 < 0) {
//   console.log("if");
// } else {
//   console.log("else");
// }
// // 9 -
// let num4 = 5;
// if (num4 < 0) {
//   console.log("if");
// } else {
//   console.log("else");
// }
// // 10 -
// let num4 = 5;
// if (num4 < 0) {
//   console.log("if");
// } else {
//   console.log("else");
// }
// //// Task 5 - Function Muscle Memory
// // 1 -
// function checkNumber(num) {
//   if (num > 0) {
//     return "positive";
//   } else if (num < 0) {
//     return "negative";
//   } else {
//     return "zero";
//   }
// }

// // 2 -
// function checkNumber(num) {
//   if (num > 0) {
//     return "positive";
//   } else if (num < 0) {
//     return "negative";
//   } else {
//     return "zero";
//   }
// }

// // 3 -
// function checkNumber(num) {
//   if (num > 0) {
//     return "positive";
//   } else if (num < 0) {
//     return "negative";
//   } else {
//     return "zero";
//   }
// }

// // 4 -
// function sayHello(name) {
//   let msg = "Hello, " + name + ". How are you?";
//   return msg;
// }
// // 5 -
// function sayHello(name) {
//   let msg = "Hello, " + name + ". How are you?";
//   return msg;
// }
// // 6 -
// function sayHello(name) {
//   let msg = "Hello, " + name + ". How are you?";
//   return msg;
// }
// // 7 -
// function fizzBuzz(max) {
//   for (let i = 0; i < max; i += 1) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log(i);
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log(i);
//     }
//   }
// }
// // 8 -
// function fizzBuzz(max) {
//   for (let i = 0; i < max; i += 1) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.timeLog(i);
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log(i);
//     }
//   }
// }
// // 9 -
// function fizzBuzz(max) {
//   for (let i = 0; i < max; i += 1) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log(i);
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log(i);
//     }
//   }
// }
// // 10 -
function evenCaps(sentence) {
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }
  return newSentence;
}
// 11 -
function evenCaps(sentence) {
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }
  return newSentence;
}
// 12 -
function evenCaps(sentence) {
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }
  return newSentence;
}
