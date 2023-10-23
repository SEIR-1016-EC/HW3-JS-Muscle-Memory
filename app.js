// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?

// List 2 exprsssions you felt comfortable interpreting at a glance.

// List 1 expression you are still 'shaky' on, why?





// Task 2 - Practice JS Basics
// 1 -

let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // ? - 10
idx * 2;
console.log(idx); // ? - 10

// 2 - 

let num0 = 33;
let isEven = num0 % 2 === 0;
console.log(isEven); // ? false
console.log(!isEven); // ? true

// 3 - 

let str1 = 'marker';
let numb = 'whiteboard'.length - str1.length;
console.log(numb); // ? 4
let str2 = 'bootcamp';
console.log(str2[numb].toUpperCase()); // ? 'C'
let char = str2[numb].toLowerCase(); // ? 'c'
console.log(char + '!'); // ? 'c!'

// 4 - 

let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // ? 'p'
console.log(sentence.indexOf(lastChar)); // ? 18

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

let age = 35; // try different numbers here
if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}

// age 0 - 30 will print 'younger than 30'; anything older will print 'older than 30'

// 6 - 

let str = 'pizza'; // try different strings here
if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}

//'pizza' will print 'short string' on one line and 'starts with p' on the next line

// 7 - 

let num1 = 15; // try different numbers here
if (num1 % 3 === 0) {
  console.log('divisible by 3');
} else if (num1 % 5 === 0) {
  console.log('divisible by 5');
}

// num1 would print 'divisible by 3'. I thought that it would also print 'divisible by 5' on the next line, but it is an else statement, so if the first else condition is met then it'll stop there.

// 8 - 

let num2 = 15; // try different numbers here
if (num2 % 3 === 0) {
  console.log('divisible by 3');
}
if (num2 % 5 === 0) {
  console.log('divisible by 5');
}

// I think this one will print both logs. Yep. 2 separate if statements so they both print because num2 (15) is true for both booleans

// 9 -

let str4 = 'General AssemblY'; // try different strings here
if (str4[0] === str4[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str4[str4.length - 1] === str4[str4.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

// changed the last index in the string to a capital and both strings will be true and will print 

// 10 - 

let num5 = -44; // try different numbers here
if (num5 > 0) {
  console.log('positive');
} else if (num5 < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num5 % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

// -44 should print 'negative' and 'even' on 2 separate lines

//// Task 4 - Conditionals Muscle Memory
// 1 - 
```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
    console.log('if'):
} else {
    console.log('else');
}
```
```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}
```

// 2 - 

```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}
```
```js
let num + 0; // feel free to change the value of this variable
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    consol.log('else');
}
``` 

// 3 - 
```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}
```
```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}
```

// 4 - 

```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}
```
```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}
```
// 5 - 
```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}
```
```js
let num = 0; //feel free to change the value of this variable
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}
```

// 6 - 

```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}
```
```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}
```

// 7 - 

```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}
```
```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}
```
// 8 - 

```
let num = 11; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}
```
```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}
```

// 9 -

```js
let num = 11; // feel free to change the value of this variable

    if (num > 5) {
        console.log('if');
    }


// 10 - 

let num = 11;
if (num > 5) {
    console.log('if');
}


//// Task 5 - Function Muscle Memory
// 1 - 

// 2 - 

// 3 - 

// 4 - 

// 5 - 

