// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?

1. 2.5 * 'fish' ..... NaN 
2. 5 >= 11 ..... False
3. 'san grancisco'[2 * 3]


// List 2 exprsssions you felt comfortable interpreting at a glance.
1. 'engineering'.indexOf('r') > -1
2. 'science'.indexOf('x') === -1


// List 1 expression you are still 'shaky' on, why?
1.  'engineering'.indexOf('r') > -1
2.  'science'.indexOf('x') === -1





// Task 2 - Practice JS Basics
// 1 - 

let idx = 'abcde'.indexOf('D');
idx = idx + 11;

console.log(idx);

idx * 2;
console.log(idx); 


// 2 - 

let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); 

console.log(!isEven);


// 3 - 
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;

console.log(num); 

let str2 = 'bootcamp';
console.log(str2[num].toUpperCase());

let char = str2[num].toLowerCase(); 
console.log(char + '!'); 

// 4 -  
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];

console.log(lastChar); // ?

console.log(sentence.indexOf(lastChar)); 




//// Task 3 - Conditionals Practice 
// 1 - 

let age = 30; // try different numbers here
if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}

console.log(90);
console.log(40);



// 2 - 

let str = 'pizza'; 
if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}

console.log('Cream');

// 3 - 
let num = 15; 
if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}

console.log(90);

// 4 -

let num = 15; 
if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}

console.log(52);


// 5 - 

let str = 'General Assembly'; 

if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

console.log('General Assembly');

// 6 -

let num = -44; 
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

console.log(25);


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

