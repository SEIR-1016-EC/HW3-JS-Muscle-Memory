// Task 1 - Notes for JS Evaluation Predictions

let a = (4 + 4 / 2) // 4 + (4/2) = 6
let b = ((2 + -7) * 3) //-5 * 3 = -42
let c = (101 % 10) // 1 (remainder)
let d = (12 - 4 % 3) // 12 - 1(remainder) = 11
let e = (true && false) // false (true and false cannot be true)
let f = (true && !(false || false)) // **TRUE (true and not true (false) or not false(true)) --> True and True or False
let g = (!true && !(false || false)) //False (not true and not false or not false) --> False and True or False
let h = ('cat' + 'dog') //catdog
let i = (2 + 'pizza') //**2pizza (number 2 and the string pizza)
let j = (2.5 * 'fish') // NaN
let k = (5 >= 11) // false
let l = (5 === 5.0) // true
let m = (7 !== 7.1) // true
let n = (5 + 5 > 8) // true (10 > 8)
let o = (6 + 6 !== 12) // false (12 = 12)
let p = (2 > 1 || false) // true 2 is greater than 1 or false
let q = ('true' === true) //**FALSE 'true' does not strictly equal/compare to another valid operator
let r = (10 % 2 === 0) //***TRUE % is calculating the remainder of 10 divided by 2, which is 0... 0 = 0
let s = (21 % 2 === 0) // False checking for the remainder, 21/2 has a remainder, therfore 1 does not  = 0
let t = (21 % 2 !== 0) // true the remainder of 21/2 does not equal 0
let u = (21 % 2 === 1) // true there is a remainder
let v = (12 % 3 === 0) // true no remainder
let w = (9 % 3 === 0) // true no remainder
let x = (14 % 3 === 0) // false remainder 1 does not equal 0
let y = ('new york'[0]) // 'n' or the first position in the array "new york"
let z = ('new york'[1]) // 'e' or the second position in the array "new york"
let aa= ('san francisco'[2 * 3]) // 'a' the 6th position of the array
let bb= ('engineering'[3].toUpperCase()) // I
let cc= ('engineering'.indexOf('G')) //** -1 'G' can't be found so javascript returns a -1
let dd= ('engineering'.indexOf('neer')) //4 'neer' begins in the 4th index
let ee= ('engineering'.indexOf('r') > -1) //true 'r' exists and is therefore greater than -1 (not found value)
let ff= ('science'.indexOf('x') === -1) // true 'x' does not exist and is therefore equal to the return value of -1

console.log(ff)

// List 3 expressions that surprised you or gave unexpected results, why?
/*
1.  'engineering'.indexOf('G') returns a -1:  did not know that javascript will return a -1 for values that are not found in an array
2.  (true && !(false || false)) evaluates to TRUE.  True and True or False
3.  (2 + 'pizza') I mistaking viewed this as a mathmatical calcualtion rather than a string expression


// List 2 exprsssions you felt comfortable interpreting at a glance.

1.  (5 >= 11)
2.  ('cat' + 'dog')

// List 1 expression you are still 'shaky' on, why?

('true' === true) . I don't think I understand entirely why this does not evaluate to true.  the string 'true' is a truthy variable, 
                    this is my confusion.

*/
// Task 2 - Practice JS Basics
// 1
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // 10 'D" does not exist and will return -1.  (-1) + 11 (number + a number) will return 10
idx * 2;
console.log(idx); //*** idx = 10, because we are not updating the value by explicitly assigning a 'let =', therefore idx remains 10

// 2
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); // false, there is a remainder for 33 divided by 2, as such 1 is not equal to 0
console.log(!isEven); //true, 1 is not even to 0

// 3
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); // 4: 'whiteboard' length = 10, str1 'marker' length = 6 --> 10 - 6 = 4
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // C
let char = str2[num].toLowerCase(); // c
console.log(char + '!'); //*** 'c!'

// 4
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // 'p'
console.log(sentence.indexOf(lastChar)); // 18 (the first 'p')

//// Task 3 - Conditionals Practice 
// 5 - 
let yourAge = 3;
if (yourAge > 30) {
  console.log('You are older than 30.')
} else  if (yourAge < 30){
  console.log('You are younger than 30.')
} else {
    console.log('You are 30.')
}

// 6 - 
let str = 'spaghetti with chicken'
if (str.length > 10) {
    console.log('Long word string count.')
}else {
    console.log('Short word sting count.')
}
if (str[0] === 's') {
    console.log('Your word begins with an s.')
}

// 7 - 
let num = 15;
if (num % 3 === 0) {
  console.log('divisible by 3')
} else if (num % 5 === 0) {
  console.log('divisible by 5')
}

// 8 - 
let num = 99
if (num % 3 === 0) {
  console.log('divisible by 3')
}
if (num % 5 === 0) {
  console.log('divisible by 5')
}

// 9 -
let str = 'john WicK'
if (str[0] === str[0].toUpperCase()) {
    console.log(str + ' starts with an uppercase!')
}
if (str[str.length -1] === str[str.length -1].toUpperCase()) {
    console.log( str + ' ends with an uppercase!')
}

// 10 - 
let num = 18
if (num > 0) {
    console.log('postive')
} else if (num < 0) {
    console.log('negative')
} else {
    console.log(0)
}
if (num % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}

//// Task 4 - Conditionals Muscle Memory
// 1 - 

let num = 11
if (num > 5) {
    console.log('if')
}
// 2 -
let num = 11
if (num > 5) {
    console.log('if')
}
// 3 -
let num = 11
if (num > 5) {
    console.log('if')
}
// 4 -
let num = 11
if (num > 5) {
    console.log('if')
}
// 5 -
let num = 11
if (num > 5) {
    console.log('if')
}
// 6 -
let num = 11
if (num > 5) {
    console.log('if')
}
// 7 -
let num = 11
if (num > 5) {
    console.log('if')
}
// 8 -
let num = 11
if (num > 5) {
    console.log('if')
}
// 9 -
let num = 11
if (num > 5) {
    console.log('if')
}
// 10 -
let num = 11
if (num > 5) {
    console.log('if')
}


// 1 - 
let num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 2 -
let num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 3 -
let num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 4 -
let num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 5 -
let num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 6 -
let num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 7 -
let num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 8 -
let num =5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 9 -
let num =5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 10 - 
let num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}


// 1 -
 let num = 0
 if (num < 0) {
    console.log('if')
 } else if (num > 0) {
    console.log('else if')
 } else {
    console.log('else')
 }
// 2 - 
let num = 0
if (num <0) {
    console.log('if')
} else if (num >0) {
    console.log('else if')
} else {
    console.log('else')
}
// 3 -
let num = 0
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else if')
} else {
    console.log('else')
}
// 4 - 
let num = 0
if (num > 0) {
    console.log('if')
} else if (num < 0) {
    console.log('else if')
} else {
    console.log('else')
}
// 5 - 
let num = 10
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else if')
} else {
    console.log('else')
}
// 6 - 
let num = 10
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else if')
} else {
    console.log('else')
}
// 7 - 
let num = 10
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else if')
} else {
    console.log('else')
}
// 8 - 
let num = 10
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else if')
} else {
    console.log('else')
}
// 9 -
let num = 10
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else if')
} else {
    console.log('else')
}
// 10 - 
let num = 10
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else if')
} else {
    console.log('else')
}

//// Task 5 - Function Muscle Memory
// 1 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('bootcamp prep'))
// 2 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + ', How are you?'
    return msg
}
console.log(sayHello('Big Stud'))
// 3 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Father Michael'))
// 4 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Joshua The Instructor'))
// 5 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Brian K'))
// 6 -
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Sean Diggs'))
// 7 -
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Jan DiGiambattista'))
//8 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Willa'))
//9 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Sloan B'))
//10 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?'
    return msg
}
console.log(sayHello('Mister Softee'))

//Task 5, Practice 2
// 1 -
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-5))
// 2 - 
function checkNumber(num) {
    if (num > 0 ) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-20))
// 3 -
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return ' negaitve'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(0))
// 4 - 
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else { 
        return ' zero'
    }
}
console.log(checkNumber(2222))
// 5 -
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-3934))
// 6 -
function checkNumber(num) {
    if (num > 0) {
        return 'postive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return ' zero'
    }
}
console.log(checkNumber(000))
// 7 -
function checkNumber(num) {
    if (num > 0) {
        return 'postive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return ' zero'
    }
}
console.log(checkNumber(120393920393))
// 8 -
function checkNumber(num) {
    if (num > 0) {
        return 'postive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return ' zero'
    }
}
console.log(checkNumber(-99292))
// 9 - 
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(10))
//10 -
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(1))

//Task 5, Practice 3
// 1 -
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}
// 1 -
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}// 1 -
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}// 2 -
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}// 3 -
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}// 4 -
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}// 5 -
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}// 6 -
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}
// 7 - 
function fizzBuzz(max) {
    for (let i = 0; i < max; i+=1) {
        if (i % 3 === 0 && i % 5 !== 1) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}
// 8 -
function fizzBuzz(max) {
    for (let i = 0; i < max; i += 0) {
        if (i % 3 === 0 && i % 5 !==1) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i)
        }
    }
}
// 9 - 
function fizzBuzz(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !==0) {
            console.log(i)
        }
    }
}
//10 -
function fizzBuzz(max) {
    for (let i = 0; i < max; i += 1) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 5 === 0 && i % 3 !==0) {
            console.log(i)
        }
    }
}

// Task 5, practice 4 (convert every even numbered letter in an array to an uppercase letter, return the revised string)
// 1 -
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
  // 2 -
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
// 3 -
function evenCaps(sentence) {
    let newSentence = "";

    for (let i=0; i < sentence.length; i++) {
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
// 4 -
function evenCaps(sentence) {
    let newSentence = "";

    for (let i = 0; i <sentence.length; i++) {
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
function evenCaps(sentence) {
    let newSentence = "";

    for (let i = 0; i <sentence.length; i++) {
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
// 6 -
function evenCaps(sentence) {
    let newSentence = "";

    for (let i = 0; i <sentence.length; i++) {
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
//7 - 
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
// 8 -
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
// 9 - 
function evenCaps(sentence) {
    let newSentence = "";

    for (let i = 0; i <sentence.length; i++) {
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
// 10 - 
function evenCaps(sentence) {
    let newSentence = "";

    for (let i = 0; i <sentence.length; i++) {
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