/* Task 1 - Notes for JS Evaluation Predictions */

// List 1: expression you are still 'shaky' on, why?

// List 2: expressions you felt comfortable interpreting at a glance.
/* 4 + 4 / 2
(2 + -7) * 3
101 % 10
12 - 4 % 3
true && false
true && !(false || false)
!true && !(false || false)
'cat' + 'dog'
2 + 'pizza'
5 >= 11
5 === 5.0
7 !== 7.1
5 + 5 > 8
6 + 6 != 12
2 > 1 || false
'true' === true
10 % 2 === 0
21 % 2 === 0
21 % 2 !== 0
21 % 2 === 1
12 % 3 === 0
9 % 3 === 0
14 % 3 === 0
'new york'[0]
'new york'[1]
'san francisco'[2 * 3]
'engineering'[3].toUpperCase()
'engineering'.indexOf('r') > -1
'sciende'.indexOf('x') === -1


// List 3: expressions that surprised you or gave unexpected results, why?
2.5 * 'fish' // I never tried doing something like this. This one was surprising but expected
'engineering'.indexOf('G') // I thought the result was undefined because we don't have an upper case G. I didn't know the result would be -1 when not existent
'engineering'.indexOf('neer') // I thought the result would be undefined because it was given more than one character to return a index. 
 */

// Task 2 - Practice JS Basics
// 1 -
let idx = 'abcde'.indexOf('D')
idx = idx + 11
console.log(idx) // 10
idx * 2
console.log(idx) // 20 - wrong! I didn't pay attention here and thought the calculation on line 49 would automatically store the new value.

// 2 -
let num = 33
let isEven = num % 2 === 0
console.log(isEven) // false
console.log(!isEven) // true

// 3 -
let str1 = 'marker'
let num2 = 'whiteboard'.length - str1.length
console.log(num2) // 4
let str2 = 'bootcamp'
console.log(str2[num2].toUpperCase()) // C
let char = str2[num2].toLowerCase() // c
console.log(char + '!') // c!

// 4 -
let sentence = 'welcome to bootcamp prep'
let lastChar = sentence[sentence.length - 1]
console.log(lastChar) // p
console.log(sentence.indexOf(lastChar)) // 18

//Task 3 - Conditionals Practice

// 5 -
let age = 80
if (age > 30) {
	console.log('older than 30')
} else {
	console.log('younger than 30')
}

// 6 -
let str = 'cheeeeeeeeese'
if (str.length > 10) {
	console.log('long string')
} else {
	console.log('short string')
}
if (str[0] === 'p') {
	console.log('starts with p')
}

// 7 -
let num3 = 20
if (num3 % 3 === 0) {
	console.log('divisible by 3')
} else if (num3 % 5 === 0) {
	console.log('divisible by 5')
}

// 8 -
let num4 = 30
if (num4 % 3 === 0) {
	console.log('divisible by 3')
}
if (num4 % 5 === 0) {
	console.log('divisible by 5')
}

// 9 -
let str3 = 'HalloweeN'
if (str3[0] === str3[0].toUpperCase()) {
	console.log('starts with a capital!')
}
if (str3[str3.length - 1] === str3[str3.length - 1].toUpperCase()) {
	console.log('ends with a capital!')
}

// 10 -
let num5 = -13
if (num5 > 0) {
	console.log('positive')
} else if (num5 < 0) {
	console.log('negative')
} else {
	console.log(0)
}
if (num5 % 2 === 0) {
	console.log('even')
} else {
	console.log('odd')
}

// Task 4 - Conditionals Muscle Memory
// 1 -
let num6 = 27
if (num6 > 5) {
	console.log('if')
}

let num62 = 2
if (num62 > 6) {
	console.log('if')
}

let num63 = -12
if (num63 > 6) {
	console.log('if')
}

let num64 = 543
if (num64 > 6) {
	console.log('if')
}

let num65 = 999
if (num65 > 6) {
	console.log('if')
}

let num66 = 2
if (num66 > 6) {
	console.log('if')
}

let num67 = -13
if (num67 > 6) {
	console.log('if')
}

let num68 = 30
if (num68 > 6) {
	console.log('if')
}

let num69 = 0
if (num69 > 6) {
	console.log('if')
}

let num61 = 13
if (num61 > 6) {
	console.log('if')
}

// 2 -
let num71 = 23
if (num71 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num72 = 11
if (num72 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num73 = 27
if (num73 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num74 = 43
if (num74 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num75 = 0
if (num75 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num76 = -96
if (num76 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num77 = -4
if (num77 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num78 = 12
if (num78 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num79 = 88
if (num79 > 5) {
	console.log('if')
} else {
	console.log('else')
}

let num70 = 24
if (num70 > 5) {
	console.log('if')
} else {
	console.log('else')
}

// 3 -
let num80 = 17
if (num80 < 0) {
	console.log('if')
} else if (num80 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num81 = 56
if (num81 < 0) {
	console.log('if')
} else if (num81 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num82 = -78
if (num82 < 0) {
	console.log('if')
} else if (num82 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num83 = -43
if (num83 < 0) {
	console.log('if')
} else if (num83 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num84 = -1
if (num84 < 0) {
	console.log('if')
} else if (num84 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num85 = -3
if (num85 < 0) {
	console.log('if')
} else if (num85 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num86 = 98
if (num86 < 0) {
	console.log('if')
} else if (num86 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num87 = 17
if (num87 < 0) {
	console.log('if')
} else if (num87 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num88 = -21
if (num88 < 0) {
	console.log('if')
} else if (num88 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

let num89 = 555
if (num89 < 0) {
	console.log('if')
} else if (num89 > 0) {
	console.log('else if')
} else {
	console.log('else')
}

// Task 5 - Function Muscle Memory
// 1 -
function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('my dear friend'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Jimmy'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Tyler'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Taylor'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Tommy'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Tania'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Timmy'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Tracy'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Tulip'))

function sayHello(name) {
	let msg = 'Hello, ' + name + '. How are you?'
	return msg
}
console.log(sayHello('Thomas'))

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
console.log(checkNumber(-13))

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
console.log(checkNumber(65))

function checkNumber(num) {
	if (num > 0) {
		return 'positive'
	} else if (num < 0) {
		return 'negative'
	} else {
		return 'zero'
	}
}
console.log(checkNumber(85))

function checkNumber(num) {
	if (num > 0) {
		return 'positive'
	} else if (num < 0) {
		return 'negative'
	} else {
		return 'zero'
	}
}
console.log(checkNumber(100))

function checkNumber(num) {
	if (num > 0) {
		return 'positive'
	} else if (num < 0) {
		return 'negative'
	} else {
		return 'zero'
	}
}
console.log(checkNumber(788))

function checkNumber(num) {
	if (num > 0) {
		return 'positive'
	} else if (num < 0) {
		return 'negative'
	} else {
		return 'zero'
	}
}
console.log(checkNumber(23))

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
console.log(checkNumber(-12))

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
function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}

function evenCaps(sentence) {
	let newSentence = ''

	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i]

		if (i % 2 === 0) {
			let capitalChar = char.toUpperCase()
			newSentence += capitalChar
		} else {
			newSentence += char
		}
	}
	return newSentence
}


