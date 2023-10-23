// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?
//'engineering.indexOf("neer")' surprised me because I didn't know what to expect. But as I looked over stuff I realized what was happening. The value being passed is a way of specifying a character if the string contains multiple of the same character.
//2.5 * 'fish' gave me an unexpected result as well. I wasn't sure what the result would be but once I saw it I understood why
//'engineering'.indexOf('G') I wasn't expecting -1 for the output. I figured i'd get undefined or false but I understand that -1 means not found

// List 2 exprsssions you felt comfortable interpreting at a glance.
'engineering'.indexOf('r') > -1
'science'.indexOf('x') === -1
// List 1 expression you are still 'shaky' on, why?
//None...I understand each function. What I would like to know though is how we would get the last index of the second 'g' in 'engineering' using  indexOf()




// Task 2 - Practice JS Basics
// 1 - 
let idx = 'abcde'.indexOf('D'); // this assigns -1 to idx
idx = idx + 11; // -1 + 11 = 10
console.log(idx); // this will print 10
idx * 2; // 10 * 2 = 20
console.log(idx); // this will print 10 because the value of idx was not updated in the previous line
// 2 - 
let num = 33;
let isEven = num % 2 === 0; // 33 is not divisible by 2 so false is assigned
console.log(isEven); // false
console.log(!isEven); // true
// 3 - 
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); // prints 4
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // prints C
let char = str2[num].toLowerCase(); // assigns 'c'
console.log(char + '!'); // prints c!
// 4 - 
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // p
console.log(sentence.indexOf(lastChar)); // prints 18
// 5 - 
let age = 41; // try different numbers here
if (age > 30) {
  console.log('older than 30'); //this will will be printed
} else {
  console.log('younger than 30');
}
// 6 - 
let str = 'Prague'; // try different strings here
if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string'); // this will be displayed as the string length is lower than 10
}
if (str[0] === 'p') { 
  console.log('starts with p'); // this will not be printed because 'Prague' starts with a capital P and not lowercase
}
// 7 - 
let num = 30; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3'); //only this statement will be printed though 30 is also divisible by 5. The else if prevents the code from executing the second condition once the first one evaluates to true
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
// 8 - 
let num = 30; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3'); //will be printed to console
}
if (num % 5 === 0) {
  console.log('divisible by 5'); //so will this statement as the if statements are independent of each other
}
// 9 -
let str = 'PsFy'; // try different strings here
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!'); // condition is met so this gets printed
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!'); //condition is not met so console doesn't print
}
// 10 - 
let num = -84; // try different numbers here
if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative'); //negative is printed
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even'); //even is printed
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
if(num > 5) {
    console.log('if');
  }
let num = 11;
if ( num > 5) {
    console.log('if');
  }
let num = 11;
if (num > 5){
  console.log('if');
}
let num = 11;
if (num > 5) {
  console.log('if');
}
// 2 - 

let num = 5;
if (num > 5){
  console.log('if');
}else {
  console.log('else');
}

let num = 5;
if(num > 5){
  console.log('if');
}else{
  console.log('else');
}

let num = 5;
if (num > 5){
  console.log('if');
}else{
  console.log('else');
}

let num = 5;
if (num > 5){
  console.log('if');
}else{
  console.log('else');
}

let num = 5;
if (num > 5){
  console.log('if');
}else{
  console.log('else');
}

let num = 5;
if (num > 5){
  console.log('if');
}else{
  console.log('else');
}

let num = 5;
if(num > 5){
  console.log('if');
}else{
  console.log('else');
}

let num = 5;
if (num > 5){
  console.log('if');
}else{
  console.log('else');
}

let num = 5;
if (num > 5){
  console.log('if');
}else{
  console.log('else');
}

let num = 5;
if (num > 5) {
  console.log('if');
}else{
  console.log('else');
}
// 3 - 
let num = 0;
if(num < 0){
  console.log('if');
}else if (num > 0){
  console.log('else');
}else{
  console.log('else');
}

let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}

let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}

let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}

let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}

let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}

let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}

let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}
let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}
let num = 0;
if (num < 0){
  console.log('if');
}else if(num > 0) {
  console.log('else if');
}else {
  console.log('else');
}
// 4 - 

// 5 - 

// 6 - 

// 7 - 

// 8 - 

// 9 -

// 10 - 


//// Task 5 - Function Muscle Memory
// 1 - 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('bootcamp prep')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Sule')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Shaq')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Stefano')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Shakeem')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Ackeem')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Blair')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Serena')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Chuck')); 
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Nate')); 
// 2 - 
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(5));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(7));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(15));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(35));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(12));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(-3));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(0));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(-5));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(-25));
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(65));

// 3 - 
function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
  
// 4 - 
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
// 5 - 

