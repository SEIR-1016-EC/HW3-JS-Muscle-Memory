// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?
//2+"pizza" -> "2pizza" was surprising. did not expect 2 to be added to the string
// 10%2 === 0 -> true initially thought it would be false because 10 divided by 2 equals 5.
// "science".indexOf("x") === -1 -> true. it surprised me as that is the first time I have seen a negative index position 
// List 2 exprsssions you felt comfortable interpreting at a glance.
//"new york"[0]->"n"
// true && false -> false
// List 1 expression you are still 'shaky' on, why?
// 101%10 -> 1 I understand it is the remainder, however if I was on a calculator, not a computer this would not be the output




// Task 2 - Practice JS Basics
// 1 - 
/*let idx="abcde".indexOf("d");
idx = idx+11;
console.log(idx);//14
idx * 2;
console.log(idx);//14
*/
// 2 - 
/*let num = 33;
let isEven = num % 2 ===0;
console.log(isEven); // false
console.log(!isEven); // true */
// 3 - 
/*let str1 = "marker";
let num = "whiteboard".length - str1.length;
console.log(num); // 4
let str2 = "bootcamp";
console.log(str2[num].toUpperCase()); // "C"
let char = str2[num].toLowerCase();
console.log(char + "!"); //"c!" */
// 4 - 
/*let sentence = "welcome to bootcamp prep";
let lastChar = sentence[sentence.length-1];
console.log(lastChar); //p
console.log(sentence.indexOf(lastChar));//18
*/
// 5 -
/*let age = 27;
if (age > 27) {
    console.log("older than 27");
} else {
    console.log("younger than 27");
}
*/
// 6 - 
/*let str = "hamburger";
if (str.length>10) {
    console.log("long string");
} else {
    console.log("short string");
}
if (str[0] === "p") {
    console.log("starts with p");
} */
// 7 - 
/* let num = 69;
if (num%3 === 0){
    console.log("divisible by 3");
} else if (num % 5 === 0) {
    console.log("divisible by 5");
}
*/

// 8 - 
/*let num = 13;
if (num % 3 === 0) {
    console.log("divisible by 3");
}
if (num % 5 === 0) {
    console.log("divisible by 5");
} */
// 9 -
/*let str = "dollar general";
if (str[0] === str[0].toUpperCase()){
    console.log("starts with a capital!");
}
if (str[str.length - 1]=== str[str.length - 1].toUpperCase()){
    console.log("ends with a capital!");
} */
// 10 - 
/*let num = 69;
if (num>0){
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log(0);
}
if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
} */


//// Task 3 - Conditionals Practice 
// 1 - 

// 2 - 

// 3 - 

// 4 - 

// 5 - let age = 29;
/*if (age > 30){
    console.log("older than 30");
} else {
    console.log("younger than 30");
} */

// 6 - 
/* let str = "hamburger";
if (str.length > 10) {
    console.log("long string");
} else {
    console.log("short string");
}
if (str[0] === "p") {
    console.log("starts with p");
} */

// 7 - 
/* let num = 69;
if (num%3 === 0) {
    console.log("divisible by 3");
} else if (num % 5 === 0) {
    console.log("divisible by 5");
} */

// 8 - 
/* let num = 47;
if (num % 3 === 0) {
    console.log("divisible by 3");
}
if (num % 5 === 0) {
    console.log("divisible by 5")
} */
// 9 -
/* let str = "dollar general";
if (str[0]=== str[0].toUpperCase()) {
    console.log("starts with a capital!");
}
if (str[str.length-1] === str[str.length-1].toUpperCase()) {
    console.log("ends with a capital!");
} */

// 10 - 
/* let num = -47;
if (num>0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    if (num%2 === 0){
        console.log("even");
    } else {
        console.log("odd")
    }
}

//// Task 4 - Conditionals Muscle Memory
// 1 - 
/* let num = 11;
if (num > 5) {
    console.log('if');
} 1
let num = 11;
if (num > 5) {
    console.log('if');
} 2
let num = 11;
if (num > 5) {
    console.log('if');
} 3
let num = 11;
if (num > 5) {
    console.log('if');
} 4
let num = 11;
if (num > 5) {
    console.log('if');
} 5
let num = 11;
if (num > 5) {
    console.log('if');
} 6
let num = 11;
if (num > 5) {
    console.log('if');
} 7
let num = 11;
if (num > 5) {
    console.log('if');
} 8
let num = 11;
if (num > 5) {
    console.log('if');
} 9
let num = 11;
if (num > 5) {
    console.log('if');
} 10
*/

// 2 - 
/* let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 1
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 2
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 3
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 4
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 5 
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 6
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 7
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 8
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('if');
} 9
let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
} 10
*/
// 3 - 
/* let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 1
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 2
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 3
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 4
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 5
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num < 0) {
    console.log('else if');
} else {
    console.log('else');
} 6
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 7
let num = 0; 
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 8
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 9
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else');
} 10
*/


//// Task 5 - Function Muscle Memory
// 1 - 
/* function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
1
function sayHello(name) {
    let msg = 'Helllo, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
2
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
3
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
4
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
5
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
6
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
7
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
8
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
9
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep'));
10 */
// 2 -
/* function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
} 
console.log(checkNumber(5));
1
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
2
function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero'
    }
}
console.log(checkNumber(5));
3
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
4
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
5
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
6
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
7
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
8
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
9
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
10 
*/
// 3 - 
/* function fizzBuzz1(max) {
    for (let i = 0; i < max; i +=1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
1
function fizzBuzz1(max) {
    for (let i = 0; i < max; i +=1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
2
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
3
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
4
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
5
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
6
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
7
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
8
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
9
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {

        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}
10
*/
// 4 - 
/*
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
1
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
2
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
3
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
4
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
5
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
6
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
7
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
8
function evenCaps(sentence) {
    let newSentence = "";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (i % 2 === 0) {
            let capitalChar = char.toUpperCase();
        } else {
            newSentence += char;
        }
    }
    return newSentence;
}
9
function evenCaps(sentence) {
    let newSentence = "";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (i % 2 === 0) {
            let capital Char = char.toUpperCase();
        } else {
            newSentence += char;
        }
    }
    return newSentence;
}
10
*/
// 5 - 

