// Task 1 - Notes for JS Evaluation Predictions

// List 3 expressions that surprised you or gave unexpected results, why?

    // "2.5 * 'fish'" gave an unexpected result mainly because I had forgotten that NaN could come into play in a moment like this. 
    // "'new york'[0]" was unexpected becuase I struggled to see 'new york' as an array, as opposed to a simple string.
    // "'engineering'.indexOf('G')" surprised me because I initially expected an index of 2.

// List 2 exprsssions you felt comfortable interpreting at a glance.

    // (2 + -7) * 3
    // 7 !== 7.1

// List 1 expression you are still 'shaky' on, why?

    // Any expression that invovles the "%" operator throws me off. I can predict most results, but I struggle to explain to myself the use cases for it.



// Task 2 - Practice JS Basics
// 1 - 
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx);

idx * 2;
console.log(idx);

// 2 - 
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); 
console.log(!isEven); 

// 3 - 
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); 
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); 
let char = str2[num].toLowerCase(); 
console.log(char + '!'); 


// 4 - 
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); 
console.log(sentence.indexOf(lastChar));


// 5 - 

// 6 - 

// 7 - 

// 8 - 

// 9 -

// 10 - 


//// Task 3 - Conditionals Practice 
// 1 - 
let age = 36;
if (age > 30) {
    console.log('older than 30');
} else {
    console.log('younger than 30');
}
console.log(age);

// 2 - 
let str = 'pizza';
if (str.length > 10) {
    console.log('long string');
} else {
    console.log('short string')
}
if (str[0] === 'p') {
    console.log('starts with p')
}

console.log(str.length);


// 3 - 
let num = 20;
if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}

console.log(num);

// 4 - 
let num = 25;
if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}

console.log(num); 

// 5 - 
let str = 'General Assembly'; 
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

console.log(str);

// 6 - 
let num = 27; // try different numbers here
if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}

console.log(num); 

// 7 - 

// 8 - 

// 9 -

// 10 - 

//// Task 4 - Conditionals Muscle Memory
// 1 - 
let num = 11;
if (num > 5) {
    console.log('if');
}

let num = 11; 
if (num > 5) {
    console.log('if');
}

let num = 11;
if (num > 5) {
    console.log('if');
}

let num = 11;
if (num > 5) {
    console.log('if');
}

let num = 11;
if (num > 5) {
    console.log('if');
}

let num = 11; 
if (num > 5) {
    console.log('if');
}

let num = 11;
if (num > 5) {
    console.log('if');
}

let num = 11;
if (num > 5) {
    console.log('if'); 
}

let num = 11; 
if (num > 5) {
    console.log('if');
}

let num = 11; 
if (num > 5) {
    console.log('if');
}

// 2 - 
let num = 5; 
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5; 
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5; 
if (num > 5) {
    console.log('if'); 
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5;
if (num > 5) {
    console.log('if');
} else {
    console.log('else'); 
}

let num = 5; 
if (num > 5) {
    console.log('if');
} else {
    console.log('else')
}

let num = 5; 
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

let num = 5; 
if (num > 5) {
    console.log('if');
} else {
    console.log('else');
}

// 3 - 
let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
    console.log('else if');
} else {
    console.log('else'); 
}

let num = 0;
if (num < 0) {
    console.log('if');
} else if (num > 0) {
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
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('bootcamp prep')); 

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log(sayHello('Conor'));

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
  console.log(checkNumber(-2));

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(0));

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(4));

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(100));

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(-100));

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(1));

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(280));

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(-20));

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  console.log(checkNumber(9));

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

  function fizzBuzz1(max) {
    for (let i = 0; i < max; i += 1) {
  
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }

// 4 - 
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

// 5 -

