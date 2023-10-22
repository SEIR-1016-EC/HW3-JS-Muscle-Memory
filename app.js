// Task 1 - Notes for JS Evaluation Predictions
//4 + 4 / 2 -> 6
// (2 + -7) * 3 -> 15
// 101 % 10 -> 1
// 12 - 4 % 3 -> 11
// true && false -> false
// true && !(false || false) -> true
// !true && !(false || false) - > false
// 'cat' + 'dog' -> 'catdog'
// 2 + 'pizza' -> 2pizza
// 2.5 * 'fish' -> NaN
// 5 >= 11 -> false
// 5 === 5.0 -> true
// 7 !== 7.1 -> true
// 5 + 5 > 8 -> true
// 6 + 6 !== 12 -> false
// 2 > 1 || false
// 'true' === true
// 10 % 2 === 0 -> true
// 21 % 2 === 0 -> false
// 21 % 2 !== 0 -> false
// 21 % 2 === 1 -> true
// 12 % 3 === 0 -> true
// 9 % 3 === 0 -> true
// 14 % 3 === 0 -> false
// 'new york'[0] -> 'n'
// 'new york'[1] -> 'e'
// 'san francisco'[2 * 3] -> 'a'
// 'engineering'[3].toUpperCase() -> 'I'
// 'engineering'.indexOf('G') -> -1
// 'engineering'.indexOf('neer') -> 4
// 'engineering'.indexOf('r') > -1 -> true
// 'science'.indexOf('x') === -1 -> true

// List 3 expressions that surprised you or gave unexpected results, why?
// 2 + 'pizza' surpised me because I figured it would have been undefined, my thought process was you cant add a string a number together
// 6 + 6 !== 12 this one surprised me because 6+6 = 12 im still kind of confused on it
// 'engineering'.indexOf('G') -> -1 i figured this one would output [2,10]

// List 2 exprsssions you felt comfortable interpreting at a glance.
// (2 + -7) * 3 -> 15
// 101 % 10 -> 1

// List 1 expression you are still 'shaky' on, why?
// science'.indexOf('x') === -1 -> true i dont undsertand how this equates to true




// Task 2 - Practice JS Basics

// 1 - 

//let idx = 'abcde'.indexOf('D');
//idx = idx + 11;
//console.log(idx); //10 
//idx * 2;
//console.log(idx); //20 -> actually printed 10

// 2 - 

//let num =33
//let isEven = num % 2 === 0
//console.log(isEven) // false
//console.log(!isEven) // true

// 3 - 

// let str1 = 'marker'
// let num = 'whiteboard'.length - str1.length
// console.log(num) // 4
// let str2 = 'bootcamp'
// console.log(str2[num].toUpperCase()) // C
// let char =str2[num].toLowerCase()
// console.log(char + '!') // c!

// 4- 

// let sentence = 'welcome to bootcamp prep'
// let lastChar = sentence[sentence.length -1]
// console.log(lastChar) // p
// console.log(sentence.indexOf(lastChar)) // 20 -> actually printed 18

//// Task 3 - Conditionals Practice 

// 1 - 

// let age = 56
// if (age > 30) {
//     console.log('older than 30')
// } else {
//     console.log('younger than 30')
// }
// age = 30 -> younger than 30
// age 56 -> older than 30

// 2 - 

// let str = 'private party'
// if (str.length > 10) {
//     console.log('long string')
// } else {
//     console.log('short string')
// }
// if (str[0] === 'p') {
//     console.log('starts with p')
// }
// str = 'pizza' -> short string, starts with p
// str = 'connor -> short string
// str = 'private party' -> long string, starts with p

// 3 - 

// let num = 10
// if (num % 3 === 0) {
// console.log('divisable by 3')
// }else if (num % 5 === 0) {
//     console.log('divisable by 5')
// }
// num = 15 -> divisable by 3
// num = 10 -> divisable by 5

// 4 - 

// let num = 37
// if (num % 3 === 0) {
//     console.log('divisable by 3')
// }
// if (num % 5 === 0) {
//     console.log('divisable by 5')
// }
// num = 15 -> divisable by 3, divisable by 5
// num = 37 -> false -> actually printed nothing

// 5 - 

// let str = 'General AssemblY'
// if (str[0] === str[0].toUpperCase()) {
//     console.log('starts with capital!')
// }
// if (str[str.length-1] === str[str.length-1].toUpperCase()) {
//     console.log('ends with a capital!')
// }
// str = 'General Assembly' -> starts with a capital
// str = 'General AssemblY -> starts with a capital, ends with a capital

// 6 -

// let num =  53
// if (num >0) {
//     console.log('positive')
// } else if (num < 0){
//     console.log('negative')
// } else {
//     console.log(0)
// }
// if (num % 2 === 0) {
//     console.log('even')
// }else {
//     console.log('odd')
// }
// num = -44 -> negative, even
// num = 53 -> positive, odd

//// Task 4 - Conditionals Muscle Memory

// 1 - 

// let num =11
// if (num>5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
// let num = 11
// if (num > 5) {
//     console.log('if')
// }

// 2 - 

// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }
// let num = 5
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// 3 - 

// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('if')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if ( num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }
// let num = 0
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

//// Task 5 - Function Muscle Memory

// 1 - 

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('bootcamp prep'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('bootcamp prep'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('bootcamp prep'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg 
}
console.log(sayHello('bootcamp prep'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg 
}
console.log(sayHello('bootcamp prep'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('bootcamp prep'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg 
} 
console.log(sayHello('bootcamp prep'))

function
// 2 - 

// 3 - 

// 4 - 

// 5 - 

