// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?

// San Francisco [2 * 3] OI was a little suprised wse could evealute expressions inside of the brackets

// !true && !(false || false) 
// I'm assuming it's taking the ! and adding it to both the false booleans in the parathesis. Still suprising though. 

//2.5 * 'fish'

// I would have though JS would try to convert the number into a string like it does when adding and it did not. 
// List 2 exprsssions you felt comfortable interpreting at a glance.

//  14 % 3 === 0
//2 + 'pizza'

// List 1 expression you are still 'shaky' on, why?

//!true && !(false || false)
// I just still have to read it out in my head in order to evalute it. 



// Task 2 - Practice JS Basics

// Note: If my prediction is right I won't leave a comment for the result. If it is wrong I will make a follow up comment on the output. 


// this is a tricky one. I'm guess undefined prints out?
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); 
idx * 2;
console.log(idx); 
 // the index value neded up printing out and then being evaluted. Interesting! 

// I predict both true and false will print out since we didn't do a if/else statement here. 
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); 
console.log(!isEven); 

// this one is so long, I can't make a prediction here beforehand. I'm going to have to evalate this one line by line.
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); // ?
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); 
let char = str2[num].toLowerCase();
console.log(char + '!');
// I came up with the output of 'c!' and that is what the console also had.

// I think e is going to print out
let sentence = 'coding bootcamp is awwesome ';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // ?
console.log(sentence.indexOf(lastChar));
//oh it gave back the value of 'e' which was indexed at 21. Interesting!


// 'younger than 30' will print out
let age = 28; // 
if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}
// 1 - I predict short string will print out since pizza is not longer than 10 characters
let str ='pizza'
if (str.length > 10) {
    console.log('long string');
  } else {
    console.log('short string');
  }
  if (str[0] === 'p') {
    console.log('starts with p');
  }
  // I predict 'divisible by 3 will print out
  let num = 12; 
  if (num % 3 === 0) {
    console.log('divisible by 3');
  } else if (num % 5 === 0) {
    console.log('divisible by 5');
  }
  // I predict nothing will print out
  let num = 8; 
  if (num % 3 === 0) {
    console.log('divisible by 3');
  }
  if (num % 5 === 0) {
    console.log('divisible by 5');
  }
  // the console will print out 'starts with captial!' I believe since I capitialize the first character.
  let str = 'Nick Vanderipe'; 
  if (str[0] === str[0].toUpperCase()) {
    console.log('starts with a capital!');
  }
  if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
    console.log('ends with a capital!');
  }

// postive and odd  will print out to the console
  let num = 27;
if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
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


//// Task 3 - Conditionals Practice 
//nothing should print out here 
let num = 3; 
if (num > 5) {
  console.log('if');
}

//if should print out now. Else should print out if condition is false since we now have an else statment.
let num = 17; 
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}

// else should print out since the two other conditons are false.
let num = 20; 
if (num < 20) {
  console.log('if');
} else if (num > 20) {
  console.log('else if');
} else {
  console.log('else');
}

//// Task 4 - Conditionals Muscle Memory



//// Task 5 - Function Muscle Memory

// so this was definitely as much syntax practice as mush as it was function pratice alot of missed curly braces and figuring out where they go! 
 
  function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('Nick ')); 


function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(10));

// 'postive' was returned


function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}

console.log(fizzBuzz1(56))


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
}
console.log(evenCaps('I am attending a coding bootcamp!'))
  

// 2 - 

// 3 - 

// 4 - 

// 5 - 

