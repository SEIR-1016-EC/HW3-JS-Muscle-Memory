// Task 1 - Notes for JS Evaluation Predictions

/*
4 + 4 / 2 = 6
    //(2 + -7) * 3 = 15
        // forgot the negative!
101 % 10 = 1
12 - 4 % 3 = 11
true && false = false
true && !(false || false) = true
!true && !(false || false) = false
'cat' + 'dog' = 'catdog'
2 + 'pizza' = '2pizza'
2.5 * 'fish' = NaN
5 >= 11 = false
5 === 5.0 = true
7 !== 7.1 true
5 + 5 > 8 = true
6 + 6 !== 12 = false
2 > 1 || false = true
'true' === true = false
10 % 2 === 0 = true
21 % 2 === 0 = false
21 % 2 !== 0 = true
21 % 2 === 1 = true
12 % 3 === 0 = true
9 % 3 === 0 = true
14 % 3 === 0 = false
'new york'[0] = n
'new york'[1] = e
'san francisco'[2 * 3] = a
'engineering'[3].toUpperCase() = I
    //'engineering'.indexOf('G') = NaN 
        (expected 'NaN/undefined')
'engineering'.indexOf('neer') = 4
'engineering'.indexOf('r') > -1 = true
'science'.indexOf('x') === -1 = true
*/

// List 3 expressions that surprised you or gave unexpected results, why?
  // I was surprised I forgot to consider the negative
  // I wasn't sure what to expect from a non-existant index, but -1 makes sense!

// List 2 exprsssions you felt comfortable interpreting at a glance.
  // I felt pretty comfortable with all except the indexOf mentioned above

// List 1 expression you are still 'shaky' on, why?
  // The only other that I questioned was "'san francisco'[2 * 3]", but predicted it correctly

// Task 2 - Practice JS Basics
  // Snippet 1 -
    // Predictions
      // 1: 10
      // 2: 10

  // Testing -
    // let idx = 'abcde'.indexOf('D');
    // idx = idx + 11;
    // console.log(idx);
    // idx * 2;
    // console.log(idx);

  // 2 -
    // 3: false
    // 4: true

    // let num = 33;
    // let isEven = num % 2 === 0;
    // console.log(isEven)
    // console.log(!isEven)

  // 3 -
    // 5: 4
    // 6: C
    // 7: c
    // 8: c!

    // let str1 = 'marker';
    // let num = 'whiteboard'.length - str1.length
    // console.log(num);
    // let str2 = 'bootcamp';
    // console.log(str2[num].toUpperCase());
    // let char = str2[num].toLowerCase();
    // console.log(char)
    // console.log(char + '!');

  // 4 -
    // 9: p
    // 10: 18

    // let sentence = 'welcome to bootcamp prep';
    // let lastChar = sentence[sentence.length - 1];
    // console.log(lastChar);
    // console.log(sentence.indexOf(lastChar));

// Task 3 - Conditionals Practice

  // 5 -
    // Prediction: //
      // 30 returns younger than 30
      // 31 returns older than 30
      // should be >= 30 returns '30 or older'

    // Testing: //
      // let age = 30;
      // if (age > 30) {
      //     console.log('older than 30');
      // } else {
      //     console.log('younger than 30');
      // }

  // 6 -
    // 'short string'
    // 'starts with p'

    // let str = 'pizza';
    // if (str.length > 10) {
    //     console.log('long string');
    // } else {
    //     console.log('short string');
    // }
    // if (str[0] === 'p') {
    //     console.log('starts with p');
    // }

  // 7 -
    // 'divisble by 3'

    // let num = 15;
    // if (num % 3 === 0) {
    //     console.log('divisble by 3');
    // } else if (num % 5 === 0) {
    //     console.log('divisble by 5');
    // }

  // 8 -
    // 'divisble by 5'

    // let num = 15;
    // if (num % 3 === 0) {
    //     console.log('divisible by 3');
    // }
    // if (num % 5 === 0) {
    //     console.log('divisible by 5');
    // }

  // 9 -
    // 'starts with a capital!'

    // let str = 'General Assembly';
    // if (str[0] === str[0].toUpperCase()) {
    //     console.log('starts with a capital!');
    // }
    // if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
    //     console.log('ends with a capital!')
    // }

  // 10 -
    // negative
    // even

    // let num = -44;
    // if (num > 0) {
    //     console.log('position');
    // } else if (num < 0) {
    //     console.log('negative');
    // }
    // if (num % 2 === 0) {
    //     console.log('even');
    // } else {
    //     console.log('odd');
    // }

//// Task 4 - Conditionals Muscle Memory
// // 1 -
// let num = 11;
// if (num > 5) {
//   console.log('if');
// }
// let num = 11;
// if (num > 5) {
//   console.log('if');
// }
// let num = 11;
// if (num > 5) {
//   console.log('if');
// }
// let num = 11;
// if (num > 5) {
//   console.log('if');
// }
// let num = 11;
// if (num > 5) {
//   console.log('if');
// }
// if (num > 5) {
//   console.log('if');
// }
// if (num > 5) {
//   console.log('if');
// }
// let num = 11;
// if (num > 5) {
//   console.log('if');
// }
// // 2 -
// let num = 5;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }
// let num = 5;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }
// let num = 5;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }
// let num = 5;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }
// let num = 5;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else')
// }
// let num = 5;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else');
// }
// let num = 5;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else')
// }
// let num = 5;
// if (num > 5) {
//   console.log('if');
// } else {
//   console.log('else')
// }
// // 3 -
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }
// let num = 0;
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// }


//// Task 5 - Function Muscle Memory
// 1 -
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('world'));
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('world'));
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('world'));
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('world'));
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('world'));
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('world'));
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('world'));
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('world'));
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?;'
  return msg;
}
console.log(sayHello('world'));

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
console.log(checkNumber(5));
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
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

// 3 -
function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i)
    }
  }
}



// 4 -
function evenCaps(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence [i];
    
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }

  return newSentence;
}
function evenCaps(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence [i];
    
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }

  return newSentence;
}
function evenCaps(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence [i];
    
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }

  return newSentence;
}
function evenCaps(sentence) {
  let newSEntence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence [i];
    
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }

  return newSentence;
}

function evenCaps(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence [i];
    
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }

  return newSentence;
}
function evenCaps(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence [i];
    
    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }

  return newSentence;
}


//// Task 6 -

// 1
function tripler(array) {
  const out = [];
  for (let item of array) {
    out.push(item * 3);
  }
  return out;
}

// 2
function oddRange(end) {
  const nums = [];
  let i = 0;
  while (i <= end) {
    if (i % 2) nums.push(i);
    i++;
  }
  return nums;
}

// 3
function isPrime(number) {
  if (number < 0 || isNaN(parseInt(number)) || (number + "i").includes(".")) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// 4
function catBuilder(name, color, toys) {
  cat = {};

  cat.name = name;
  cat.color = color;
  cat.toys = toys;

  return cat;
}

// 5
function valuePair(obj1, obj2, key) {
  return [obj1[key], obj2[key]];
}

// 6
function doesKeyExist(obj, key) {
  return obj.hasOwnProperty(key);
}

// 7
function adults(people) {
  const out = [];
  for (let i of people) {
    if (i.age > 18) out.push(i.name);
  }
  return out;
}

// 8
function countScores(people) {
  ppl = {};
  for (person in people) {
    if (ppl[people[person].name]) {
      ppl[people[person].name] += people[person].score;
    } else {
      ppl[people[person].name] = people[person].score;
    }
  }
  return ppl;
}

// 9
function isPrime(number) {
  if (number < 0 || isNaN(parseInt(number)) || (number + "i").includes(".")) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function firstNPrimes(n) {
  const primes = [];
  for (let i = 2; i <= 1000 && primes.length < n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

function sumOfNPrimes(n) {
  let sum = 0;
  const primes = firstNPrimes(n);
  for (let i in primes) {
    sum += primes[i];
  }
  return sum;
}


module.exports = { firstNPrimes, isPrime, sumOfNPrimes };
module.exports = countScores;
module.exports = adults;
module.exports = doesKeyExist;
module.exports = valuePair;
module.exports = catBuilder;
module.exports = isPrime;
module.exports = oddRange;
module.exports = tripler;
