// Task 1 - Notes for JS Evaluation Predictions

/* 
1. 6
2. -15
3. 1
4. 11
5. false
6. true
7. false
8. catdog
9. 2pizza
10. NaN
11. false
12. false // incorrect was true thought strict operator will would take in consideration the type Of Num
13. true
14. true
15. false
16. true
17. false
18. true
19. false
20. true
21. true
22. true
23. true
24. false
25. 'n'
26. 'e'
27. 'a'
28. 'I'
29. undefined // indexOf returns -1 when index is not found not undefined
30. 4
31. true
32. true

*/




// List 3 expressions that surprised you or gave unexpected results, why?
// 29 i thought would returned undefined, now learned that if index is not found it always returns -1
// 12 i thought since the strict operator was being used it would evaluate to false since one has no decimal point, maybe got confused because in other they would be different types such as float and int

// List 2 exprsssions you felt comfortable interpreting at a glance.
// all of them were easy, 25, 26 and 27, were kinda new since so far we've used that syntax to find index of arrays, but didnt take me long to figure out it would apply to the index of the characters of the string
// List 1 expression you are still 'shaky' on, why?
//none





// Task 2 - Practice JS Basics
// 1 - 
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx);
idx * 2;
console.log(idx);
// saw what you did there! idx * 2 wasnt set to idx, that line did nothing to the var, for my answer to be correct it would have had to be idx = idx * 2
// 2 - 
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven);
console.log(!isEven)

// 3 - 
let str1 = 'marker'
let num1 ='whiteboard'.length - str1.length
console.log(num1)
let str2 = 'bootcamp'
console.log(str2[num1].toUpperCase());
let char = str2[num1].toLowerCase();
console.log(char + '!')
// 4 - 
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1]
console.log(lastChar)
console.log(sentence.indexOf(lastChar))
// 5 - 
let age = 30
if (age > 30) {
    console.log('older than 30')
} else {
    console.log('younger than 30')
}
// 6 - 
let str = 'pizza'
if (str.length > 10) {
    console.log('long string')
} else {
    console.log('short string')
} 
if (str[0] === 'p') {
    console.log('starts with p')
}
// 7 - 
let num2 = 15
if (num2 % 3 === 0) {
    console.log('divisible by 3')
} else if (num2 % 5 === 0) {
    console.log('divisible by 5')
}

// 8 - 
let num3 = 20
if (num3 % 3 === 0) {
    console.log('divisible by 3')
} else if (num3 % 5 === 0) {
    console.log('divisible by 5')
}

// 9 -
let str3 = 'General AssemblY'
if (str3[0] === str3[0].toUpperCase()) {
    console.log('starts with a capital!')
} 
if (str3[str3.length-1] === str3[str3.length-1].toUpperCase()){
    console.log('ends with a capital!')
}

// 10 - 
let num4 = 86;
if (num4 > 0){
    console.log('positive')
} else if (num4 < 0) {
    console.log('negative')
} else {
    console.log(0)
}
if (num4 % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
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
if (num > 5) {
    console.log('if');
}
if (num > 5) {
    console.log('if');
}
if (num > 5) {
    console.log('if');
}
if (num > 5) {
    console.log('if');
}
if (num > 5) {
    console.log('if');
}
if (num > 5) {
    console.log('if');
}
if (num > 5) {
    console.log('if');
}

if (num > 5) {
    console.log('if');
}

if (num > 5) {
    console.log('if');
}

if (num > 5) {
    console.log('if');
}

num = 5
if (num > 5) {
    console.log ('if');
} else {
    console.log ('else');
}

if (num > 5) {
    console.log ('if');
} else {
    console.log('else');
}

if (num > 5) {
    console.log ('if');
} else {
    console.log ('else');
}

if (num > 5) {
    console.log ('if');
} else {
    console.log('else');
}

if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

num = 0
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

if (num < 0) {
    console.log('if');
} else if (num < 0) {
    console.log('else if');
} else {
    console.log('else');
}

if (num < 0) {
    console.log('if');
} else if (num < 0) {
    console.log ('else if');
} else {
    console.log ('else');
}

if (num < 0) {
    console.log('if');
}   else if (num < 0) {
    console.log('else if');
} else {
    console.log('else');
}

if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
}

if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else')
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


//// Task 5 - Function Muscle Memory
// 1 - 

// 2 - 

// 3 - 

// 4 - 

// 5 - 

