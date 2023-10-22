// Task 1 - Notes for JS Evaluation Predictions
 
// List 3 expressions that surprised you or gave unexpected results, why?
    // 2 + 'pizza'
    // I didn't anticipate that the number and string would be added into the same string

    // 10 % 2 === 0
    // Anticipated the output to log as false - I thought the first value also needed to be 0 for it to be interpreted as true

    // 'engineering'.indexOf('G')
    // I was confused at what the output would even provide, and more confused about what output was actually produced. Unfamiliar with indexOf and what -1 meant in the index
// List 2 exprsssions you felt comfortable interpreting at a glance.
    // 9 % 3 === 0
    // 5 >= 11

// List 1 expression you are still 'shaky' on, why?
    // 5 === 5.0
    // I understand === as requiring both values to be written in the exact same form. because 5.0 is not written the same way as 5 is, I'd expect the console log to be false




// Task 2 - Practice JS Basics
// 1 - 
// let idx = 'abcde'.indexOf('D');
// idx = idx + 11;
// console.log(idx); // 10
// idx * 2;
// console.log(idx); // 20

// 2 - 
// let num = 33;
// let isEven = num % 2 === 0;
// console.log(isEven); // false
// console.log(!isEven); // true

// 3 - 
// let str1 = 'marker';
// let num = 'whiteboard'.length - str1.length;
// console.log(num); // 4
// let str2 = 'bootcamp';
// console.log(str2[num].toUpperCase()); // C
// let char = str2[num].toLowerCase(); // c
// console.log(char + '!'); // c!

// 4 - 
// let sentence = 'welcome to bootcamp prep';
// let lastChar = sentence[sentence.length - 1];
// console.log(lastChar); // p
// console.log(sentence.indexOf(lastChar)); // 23 (correct answer : 18)

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
let age = 20;
if (age  > 30){
    console.log('older than 30');
}else{
    console.log('younger than 30')
    }

// 6 - 
// let str = 'Pennsylvania'; // try different strings here
// if (str.length > 10) {
//   console.log('long string');
// } else {
//   console.log('short string');
// }
// if (str[0] === 'p') {
//   console.log('starts with p');
// }

// 7 - 
// let num = 19; // try different numbers here
// if (num % 3 === 0) {
//   console.log('divisible by 3');
// } else if (num % 5 === 0) {
//   console.log('divisible by 5');
// }

// 8 - 
// let num = 21; // try different numbers here
// if (num % 3 === 0) {
//   console.log('divisible by 3');
// }
// if (num % 5 === 0) {
//   console.log('divisible by 5');
// }

// 9 -
let str = 'General AssemblY'; // try different strings here
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

// 10 - 
// let num = NaN; // try different numbers here
// if (num > 0) {
//   console.log('positive');
// } else if (num < 0) {
//   console.log('negative');
// } else {
//   console.log(0);
// }
// if (num % 2 === 0) {
//   console.log('even');
// } else {
//   console.log('odd');
// }

//// Task 4 - Conditionals Muscle Memory
// 1 - 
// let num = 11;
// if (num > 5) {
//     console.log('if')
// }

// let num = 4;
// if (num > 5 ) {
//     console.log('if')
// }

// let num = 100;
// if (num > 5) {
//     console.log('if')
// }

// let num = 22;
// if (num > 5) {
//     console.log('if')
// }

// let num = 0;
// if (num > 5) {
//     console.log('if')
// }

// let num = 89;
// if (num > 5) {
//     console.log('if')
// }

// let num = -50;
// if (num > 5) {
//     console.log('if')
// }

// let num = NaN;
// if (num > 5) {
//     console.log('if')
// }

// let num = 2000;
// if (num > 5) {
//     console.log('if')
// }

// 2 - 
// let num = 5;
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// let num = 6;
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// let num = NaN;
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// let num = 101;
// if (num >5) {
//     console.log('if')
// } else {
//     console.log ('else')
// }

// let num = 'cat';
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// let num = 0.78;
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// let num = -50;
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// let num = '21';
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// let num = 5.01;
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// let num = 4.9;
// if (num > 5) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// // 3 - 
// let num = 0;
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

// let num = NaN;
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

// let num = str[0];
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

// let num = 10.2;
// if (num < 0) {
//     console.log('if')
// } else if {
//     console.log('else if')
// } else {
//     console.log('else')
// }

// let num = -90 && 'pizza';
// if (num < 0) {
//     console.log('if')
// } else if (num > 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

// let num = '20';
// if (num > 0) {
//     console.log('if')
// } else if (num < 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

// let num = 2;
// if (num > 0) {
//     console.log('if')
// } else if (num < 0) {
//     console.log('else if')
// } else {
//     console.timeLog('if')
// }

// let num = 72;
// if (num > 0) {
//     console.log('if')
// } else if (num < 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

// let num = -81;
// if (num > 0) {
//     console.log('if')
// } else if (num < 0) (
//     console.log('else if')
// ) else {
//     console.log('else')
// }

// let num = 50000;
// if (num > 0) {
//     console.log('if')
// } else if (num < 0) {
//     console.log('else if')
// } else {
//     console.log('else')
// }

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
console.log(sayHello('Valerie'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('Chewy'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('Lorem Ipsum'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('Sunishchal'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello(' '))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello(42))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello(NaN))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('mom'))

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('dad'))

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
console.log(checkNumber(5))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(0))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(0.1))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(-1))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0 ) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber('zebra'))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(NaN))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero'
    }
}
console.log(checkNumber(90))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-90))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero'
    }
}
console.log(checkNumber(+-20))

function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-0.1))

// 3 - 
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i+=1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}

function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}
// 4 - 
// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence += capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps('hello'))

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence = capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps("hellos"))

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence = capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps("silly"))

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence = capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps('traffic'))

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence = capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps(1))

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence = capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps('Hello World'))

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence = capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps('pizza' + 1))

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence = capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps('forest'))

// function evenCaps(sentence) {
//     let newSentence = "";

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];

//         if (i % 2 === 0) {
//             let capitalChar = char.toUpperCase();
//             newSentence = capitalChar;
//         } else {
//             newSentence += char;
//         }
//     }

//     return newSentence;
// }
// console.log(evenCaps(22))

function evenCaps(sentence) {
    let newSentence = "";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (i % 2 === 0) {
            let capitalChar = char.toUpperCase();
            newSentence = capitalChar;
        } else {
            newSentence += char;
        }
    }

    return newSentence;
}
console.log(evenCaps(NaN))
// 5 - 

