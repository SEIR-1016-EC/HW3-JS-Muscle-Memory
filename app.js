// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?
// 1. 2 + 'pizza' -> I was surprised to see when combining a number and a string, the result returned a combined string ('2pizza'). Similarly, I was surprised to see that when mulitplying a number by a string, it returned NaN.
// 2. 5 === 5.0 -> It makes sense now that I've seen it, but I was surprised because I thought === only was truthy if the values were identical, I thought the .0 (although not adding any mathematical value), may have caused it to return false
// 3. 'new york'[1] -> I had never seen an instance before where you determine the index of a string - but after testing it makes sense that the result is the letter which corresponds to the index value.

// List 2 exprsssions you felt comfortable interpreting at a glance.
// 1. 21 % 2 === 1 -> I am comfortable with % expressions, which determine the remainder, and using comparison operators to determine if the result is truthy or falsey when compared to a number
// 2. !true && !(false || false) -> After reviewing the Js control flow lesson, I now feel more comfortable with operators and comparing two values for their truthy or falsiness. In this case it's using an && operator, and since the first value is not true (false), it stops immediately and returns false.

// List 1 expression you are still 'shaky' on, why?
// 1. 'engineering'.indexOf('G') -> I expected this result to be undefined, because the exact string 'G' does not exist, but it returned -1. I am under the impression when it comes to index values, -1 is the equivalent of undefined?


// Task 2 - Practice JS Basics
// 1 - My predictions before running code: 10; 20
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx);
idx * 2;
console.log(idx); // -> I predicted 20, but realized now that even though in line 21 we mulitplied idx by 2, we never redefined idx's value with a let idx =, so the console still returns 10 on this line

// 2 - My predictions before running code: false; true
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven);
console.log(!isEven);

// 3 - My predictions before running code: 4; C; c; c!
let str1 = 'marker';
let num1 = 'whiteboard'.length - str1.length; // -> changed num to num1 to avoid conflict with initialization of num in step 2 above
console.log(num1);
let str2 = 'bootcamp';
console.log(str2[num1].toUpperCase());
let char = str2[num1].toLowerCase(); // -> realized that while this value is c, it didn't log anything to the console because we didn't console.log this line
console.log(char + '!');

// 4 - My predictions before running code: 'p', 23
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar);
console.log(sentence.indexOf(lastChar)); // -> returned 18, which I believe is because p shows up first at index 18 before being the final character at 23 - so it returns the first instance of the character? Interesting!

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

// 5 - My predictions before running code: 'younger than 30'
let age = 30;
// let age = 40; -> testing different number
if (age > 30) {
    console.log('older than 30');
} else {
    console.log('younger than 30');
}

// 6 - My predictions before running code: short string
let str = 'pizza';
// let str = 'pineapple pizza' -> testing different string
if (str.length > 10) {
    console.log('long string');
} else {
    console.log('short string');
}
if (str[0] === 'p') {
    console.log('starts with p')
}

// 7 - My predictions before running code: 'divisible by 3'
let num2 = 15; // -> used num2 because num was used above
// let num2 = 19; -> testing different number
if (num2 % 3 === 0) {
    console.log('divisible by 3');
} else if (num2 % 5 === 0) {
    console.log('divisible by 5');
}

// 8 - My predictions before running code: 'divisible by 3'; 'divisible by 5'
let num3 = 15; // -> used num3 because num was used above
//let num3 = 25; -> testing different number
if (num3 % 3 === 0) {
    console.log('divisible by 3');
}
if (num3 % 5 === 0) {
    console.log('divisible by 5');
}

// 9 - My predictions before running code: 'starts with a capital!';
let str3 = 'General Assembly'; // -> used str3 because str was used above
// let str3 = 'WOW' -> testing with another string
if (str3[0] === str3[0].toUpperCase()) {
    console.log('starts with a capital!');
}
if (str3[str3.length - 1] === str3[str3.length -1].toUpperCase()) {
    console.log('ends with a capital!');
}

// 10 - My predictions before running code: 'negative'; 'even'
let num4 = -44; // -> used num4 because num was used above
// let num4 = 31; // -> testing another number
if (num4 > 0) {
    console.log('positive');
} else if (num4 < 0) {
    console.log('negative');
    }  else {
        console.log(0);
    }
if (num4 % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}

//// Task 4 - Conditionals Muscle Memory
// 1 -
let num5 = 11;
if (num5 > 5) {
    console.log('if');
}

let num6 = 11;
if (num6 > 5) {
    console.log('if');
}

let num7 = 11;
if (num7 > 5) {
    console.log('if');
}

let num8 = 11;
if (num8 > 5) {
    console.log('if');
}

let num9 = 11;
if (num9 > 5) {
    console.log('if');
}

let num10 = 11;
if (num10 > 5) {
    console.log('if');
}

let num11 = 11;
if (num11 > 5) {
    console.log('if');
}

let num12 = 11;
if (num12 > 5) {
    console.log('if');
}

let num13 = 11;
if (num13 > 5) {
    console.log('if');
}

let num14 = 11;
// let num14 = 3; -> testing another number
if (num14 > 5) {
    console.log('if');
}

// 2 - 
let num15 = 5;
if (num15 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num16 = 5;
if (num16 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num17 = 5;
if (num17 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num18 = 5;
if (num18 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num19 = 5;
if (num19 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num20 = 5;
if (num20 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num21 = 5;
if (num21 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num22 = 5;
if (num22 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num23 = 5;
if (num23 > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num24 = 5;
// let num24 = 10; -> testing another number
if (num24 > 5) {
    console.log('if');
} else {
    console.log('else');
}

// 3 - 
let num25 = 0;
if (num25 < 0) {
    console.log('if');
} else if (num25 > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num26 = 0;
if (num26 < 0) {
    console.log('if');
} else if (num26 > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num27 = 0;
if (num27 < 0) {
    console.log('if');
} else if (num27 > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num28 = 0;
if (num28 < 0) {
    console.log('if');
} else if (num28 > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num29 = 0;
if (num29 < 0) {
    console.log('if');
} else if (num29 > 0) {
    console.log('else if');
} else {
    console.log('else')
}

let num30 = 0;
if (num30 < 0) {
    console.log('if');
} else if (num30 > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num31 = 0;
if (num31 < 0) {
    console.log('if');
} else if (num31 > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num32 = 0;
if (num32 < 0) {
    console.log('if');
} else if (num32 > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num33 = 0;
if (num33 < 0) {
    console.log('if');
} else if (num33 > 0) {
    console.log('else if');
} else {
    console.log('else');
}

let num34 = 0;
// let num34 = 15; // -> testing another number
if (num34 < 0) {
    console.log('if');
} else if (num34 > 0) {
    console.log('else if');
} else {
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

// 2 - 

// 3 - 

// 4 - 

// 5 - 

