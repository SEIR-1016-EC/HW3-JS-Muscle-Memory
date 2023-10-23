// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?
// - math operations beyond adding numbers to strings result in a NaN output? 
// - numbers that equate to the same result is considered true (not truthy) in JS, even if there is a different between "subtypes(?)" (float vs integer) 
// - if the argument .indexOf() does not exist within the string/array, it will return -1

// List 2 exprsssions you felt comfortable interpreting at a glance.
// - order of operations *does* apply with equations

// List 1 expression you are still 'shaky' on, why?
// - order of operations *does* apply with equations - i frequently forget my order of operations, lol





// Task 2 - Practice JS Basics
// 1 - 10, 10
let idx = 'abcde'.indexOf('D')
idx = idx + 11
console.log(idx)
idx * 2
console.log(idx)

// 2 - false, true
let num = 33
let isEven = num % 2 === 0
console.log(isEven)
console.log(!isEven)

// 3 - 4, C, char='c', c!
let str1 = 'marker'
num = 'whiteboard'.length - str1.length
console.log(num)
let str2 = 'bootcamp'
console.log(str2[num].toUpperCase())
let char = str2[num].toLowerCase()
console.log(char + '!')

// 4 - p, 18
let sentence = 'welcome to bootcamp prep'
let lastChar = sentence[sentence.length - 1]
console.log(lastChar)
console.log(sentence.indexOf(lastChar))

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

// 5 - 'younger than 30'
let age = 30
if (age > 30) {
    console.log('older than 30')
} else {
    console.log('younger than 30')
}

// 6 - 'short string' 'starts with p'
let str = 'pizza'
if (str.length > 10 ) {
    console.log('long string')
} else {
    console.log('short string')
}
if (str[0] === 'p' ) {
    console.log('starts with p')
}

// 7 - 'divisible by 3'
num = 15
if (num % 3 === 0) {
    console.log('divisible by 3')
} else if (num % 5 === 0) {
    console.log('divisible by 5')
}

// 8 - 'divisible by 3' 'divisible by 5'
num = 15
if (num % 3 === 0) {
    console.log('divisible by 3')
}
if (num % 5 === 0) {
    console.log('divisible by 5')
}

// 9 - 'starts with a capital!' 
str = 'General Assembly'
if (str[0] === str[0].toUpperCase()){
    console.log('starts with a capital!')
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()){
    console.log('ends with a capital!')
}

// 10 - 'negative' 'even'
num = -44
if (num > 0) {
    console.log('positive')
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
// let num = 11
// if (num > 5) {
//     console.log('if')
// }
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
num = 11
if (num > 5) {
    console.log('if')
}
// 2 - 
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
num = 5
if (num > 5) {
    console.log('if')
} else {
    console.log('else')
}
// 3 - 
num = 0
if (num < 0) {
    console.log('if')
} else if (num > 0) {
    console.log('else if')
} else {
    console.log('else')
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
// 2 - 
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(5))
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(4))
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(3))
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(2))
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
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(0))
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-1))
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-2))
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-3))
function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(checkNumber(-4))
// 3 - 
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i + 'fizz')
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i + 'buzz')
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + 'fizzbuzz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzz1(16)
// 4 - 
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
function evenCaps(sentence) {
    let newSentence = ""
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]

        if (i %2 === 0) {
            let capitalChar = char.toUpperCase()
            newSentence += capitalChar
        } else {
            newSentence += char
        }
    }
    return newSentence
}
console.log(evenCaps('the quick brown fox jumps over the lazy dog'))
// 5 - 

