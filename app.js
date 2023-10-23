// Task 1 - Notes for JS Evaluation Predictions

//prediction: JS will follow order of operations 4/2=2, 4+2=6
//console.log(4 + 4/2);

//prediction:JS will follow order of operations (2 + -7) = -5, -5 * 3 = -15
// console.log((2+ -7) * 3);

//prediction: 101 % 10 = 1
// console.log(101%10); 

//prediction: 4 % 3 = 1, 12 - 1 = 11
// console.log(12 - 4 % 3);

//prediction: I'm not sure what will happen. Maybe it will be 'undefined'?
// console.log(true && false); //JS defaults to 'false' if using a truth value and false value together in a && statement

//prediction: !bang is applied to both 'false' values making them true. JS evaluates statement
//to be (true && true) ---> true
// console.log(true && !(false || false));

//prediction: !true = false, !(false || false) = true, --> false && true --> false
// console.log(!true && !(false || false));

//prediction: 'cat' + 'dog' = catdog 
// console.log('cat' + 'dog');

//prediction: 2 + 'pizza' = 2pizza  
// console.log(2 + 'pizza');  //JS will convert a number datatype to a string if it is concatenated with a string datatype

//prediction: Will this be 'fish fish'? 
// console.log(2 * 'fish');  
//JS evaluated this to be NaN. When a number type is multiplied by a non-number data type JS will evaluate it to be a NaN

//prediction: false
// console.log( 5 >= 11); //JS automatically evaluates this as an 'if' satement 

//prediction: false
// console.log(5 === 5.0); //JS evaluates this as true since both dataypes are a number and their values are the same, 
//despite the addition of a decimal point 

//prediction: true
// console.log(7 !== 7.1);

//prediction: true 
// console.log(5 + 5 > 8);

//prediction: false
// console.log(6 + 6 !== 12);

//prediction: false
// console.log(2 > 1 || false); //JS will ignore false value if there is a num data type as it is 
//autmoatically evaluatec to being 'true'

//prediction: false, the datatypes do not match
// console.log('true' === true)

//prediction: true
// console.log(10 % 2 === 0);

//prediction: false // the remainder of 21 / 2 = 1
// console.log(21 % 2 === 0);

//prediction: true
// console.log(21 % 2 !== 0);

//prediction: true
// console.log(21 % 2 === 1);

//prediction: true 
// console.log(12 % 3 === 0);

//prediction:true 
// console.log(9 % 3 === 0)

//prediction:false
// console.log(14 % 3 === 0);

//prediction: 'n'
// console.log('new york'[0]);

//prediction: 'e'
// console.log('new york'[1]);

//prediction: NaN
// console.log('san francisco'[2 * 3]); //'a' is returned 
//this is because JS operates on the indexes first before looking at the string to evaluate
//additionally JS considers spaces made in a string to be a character istself, 2*3 =6 
//the 6th character in 'san francisco' including the space is 'a' in francisco 

//prediction: 'engIneering' 
// console.log('engineering'[3].toUpperCase()); 
//JS only outputs the single letter at the index number
// I is returned 

//prediction: since "G" is not technically in the string it will return undefined
//console.log('engineering'.indexOf('G')); 
//JS returns -1 as the starting index for characters not found in the string, and adds 
//additional characters not found in string as negative numbers.

//prediction: I'm not sure, maybe 4, 5, 6 ,7
//console.log('engineering'.indexOf('neer'));
//JS will interpret the index value of a part of a string at the starting index of the entire string
//in this case the starting index of 'neer' is 4, so JS evaluates the whole string as having an index of 4

//prediction: true //index of r is 7 and 7 > -1
//console.log('engineering'.indexOf('r') > -1);

//prediction:false // 'x' is not the same datatype as -1
//console.log('science'.indexOf('x') === -1);
//JS evaluates this as true regardless of data type

// List 3 expressions that surprised you or gave unexpected results, why?

//"san francisco'[2 * 3]" Since indexes represent parts of a string I didnt know what JS would do. 
//But I realised that it would evaluate the numbers first 2*3=6 and then use the result as the index number

//'engineering'.indexOf('neer') --> I was not sure how JS would evaluate a partial string, but it seems like it evaluates it using the
//index number the partial string starts on

//'science'.indexOf('x') === -1  --> this surprised me because I was expecting JS to not compare a string with a num datatype, I assumed the answer would be false

// List 2 exprsssions you felt comfortable interpreting at a glance.
//true && !(false || false)
//'cat' + 'dog'

// List 1 expression you are still 'shaky' on, why?
//'science'.indexOf('x') === -1  I'm still not really sure how this works




// Task 2 - Practice JS Basics
// 1 - 
//let idx = 'abcde'.indexOf('D'); //'D' is not in string so it is logged as -1
//idx = idx + 11;  //-1 + 11 = 10;
//console.log(idx); // ? idx = 10;
//idx * 2; // 10 * 2 = 20;
//console.log(idx); // ?  I asumed idx would be 20, unless JS ingores the line above because it does contain the 
//assignment operator; 

// 2 - 
//let numb = 33;
//let isEven = num % 2 === 0; //33 % 2 does not equal 0, so the value will be false
//console.log(isEven); // ? This will be false
//console.log(!isEven); // ? This will be true

// 3 - 
// let str1 = 'marker'; // length = 5;
// let num = 'whiteboard'.length - str1.length;  //9 - 5 = 4
// console.log(num); // ?  output --> 4
// let str2 = 'bootcamp'; // length -> 7
// console.log(str2[num].toUpperCase()); // ? str2[4].toUpperCase = 'C'
// let char = str2[num].toLowerCase(); // ? str2[4].toLowerCase = 'c'
// console.log(char + '!'); // ? output -> c! 

// 4 - 
// let sentence = 'welcome to bootcamp prep'; //23 chars or 24 i think the length is +1 of actual characters in a string
// let lastChar = sentence[sentence.length - 1]; //23 -1= 22 or 24 -1 = 23  sentence[23] = p
// console.log(lastChar); // ?  output --> 'p'
// console.log(sentence.indexOf(lastChar)); // ? maybe 22 or 23 //output --> 18

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
// let age = 30; //try different numbers here
// if (age > 30){ 
    // console.log('older than 30'); //30 is not greater than 30, this will be false
// }else{
    // console.log('younger than 30'); //this will probably be the output
//}

// 6 - 
// let str = 'pizza'; // try different strings here
// if (str.length > 10){
    // console.log('long string'); //the string 'pizza' is not greater than 10, this will be false
// }else{
    // console.log('short string'); //this will likely output
//}
// if(str[0] === 'p'){
    // console.log('starts with p'); //this is true, since it's true JS may skip the preceeding else statement and run this instead
//} JS skipped the 'else' statement and its output is the following true value from the new if statement

// 7 - 
// let num = 15; //try different numbers here
// if (num % 3 === 0){ 
    // console.log('divisible by 3'); // the remainder of 15/3 is 0 so this will probably be the output
// }else if(num % 5 === 0){ 
    // console.log('divisible by 5');// the remainder 15/5 is 0 this is also true
    //I predict JS will just run with the first true value and ignore the second true value.
//}

// 8 - 
// let num = 15; 
// if(num % 3 === 0){
    // console.log('divisible by 3'); // while both if statements are true I beleive JS will 
    // only output the first if statement because it is true and ignore the second if satement
//}
// if(num % 5 === 0){
    // console.log('divisible by 5')
//}  //JS actually outputted both if statements because they are both true. JS regards separate if 
//statements as separate conditionasl except if the choice involves defaulting on an else statemnt
//then JS will skip the else and run the next true statement even if it is in a new conidtional if statement

// 9 -
// let str = 'General Assembly'; //15 chars
// if (str[0] === str[0].toUpperCase()){ // this statement is true
    // console.log('starts with a capital!');
//}
//    console.log('ends with a capital!'); //I beleive this statement is false and will be ignored
//}

// 10 - 
// let num = -44;
// if(num > 0) {//this statement has a value of false
    // console.log('positive'); 
// }else if(num < 0){//this statement is true and will most likely be outputted
    // console.log('negative'); 
// }else{
//}
// if (num % 2 === 0){   //this statement is true
    // console.log('even'); //most liekly this statement will also be outputted
// }else{
    // console.log('odd');
//}

//// Task 4 - Conditionals Muscle Memory
// 1 - 
let num =11; 
if (num > 5){
    console.log('if');
} will output 'if

let num = 11; 
if(num > 5){
    console.log('if');
}

let num = 22;
if(num > 5){
    console.log('if');
}

let num = 33;
if(num > 5){
    console.log('if');
}

let num = 44;
if(num > 5){
    console.log('if');
}

let num = 55;
if(num > 5){
    console.log('if');
}

let num = 66;
if(num > 5){
    console.log('if');
}

let num = 77;
if(num >5){
    console.log('if'); 
}

let num = 88;
if(num > 5){
    console.log('if'); 
}

let num = 99;
if(num > 5){
    console.log('if');
}

let num = 1010; 
if(num > 5){
    console.log('if');
}

// 2 - 
let num = 1; 
if (num > 5){ //this statement is false so the 'else' statement is most likely to run
    console.log('if');
}else{
    console.log('else');
}

let num = 2;
if(num > 5){
    console.log('if');

}else{
    console.log('else');
}


let num = 3; 
if(num > 5){
    console.log('if');
}else{
    console.log('else');
}

let num = 4;
if(num > 5){
    console.log('if');
}else{
    console.log('else');
}

let num = 5;
if( num > 6){
    console.log('if');
}else{
    console.log('else');
}

let num = 6; 
if(num > 5){
    console.log('if');
}else{
    console.log('else');
}

let num = 7;
if(num > 5){
    console.log('if');
}else{
    console.log('else')
}

let num = 8;
if(num > 5){
    console.log('if');
}else{
    console.log('else')
}

let num = 9; 
if(num > 5){
    console.log('if')
}else{
    console.log('else')
}

let num = 10;
if(num > 5){
    console.log('if');
}else{
    console.log('else');
}

// 3 - 
 let num = 0;
 if (num < 0){ //0 is not more than 0, false value
     console.log('if');
 }else if(num > 0){  //0 is not greater than 0, false value
  console.log('else if');
 }else{                  //most likly to run else statement as both preceedings statements are false
     console.log('else');
}
 
let num = 1; 
if(num < 1){
    console.log('if');
}else if( num > 1){
    console.log('else if');
}else{
    console.log('else');
}

let num = 2;
if(num < 1){
    console.log('if');
}else if(num > 1){
    console.log('else if');
}else{
    console.log('if');
}

let num = 3;
if(num < 1){
    console.log('if');
}else if(num > 1){
    console.log('else if');
}else{
    console.log('else');
}

let num = 4; 
if(num < 1){
    console.log('if');
}else if(num > 1){
    console.log('else if');
}else{
    console.log('else');
}

let num = 5;
if(num > 1){
  console.log('if');
}else if(num > 1){
    console.log('else if');
}else{
    console.log('else');
}

let num = 6;
if(num < 1){
    console.log('if');
}else if(num > 1){
    console.log('else if');
}else{
    console.log('else');
}

let num = 7;
if(num < 1){
    console.log('if');
}else if(num > 1){
    console.log('else if');
}else{
    console.log('else');
}

let num = 8;
if(num < 1){
    console.log('if');
}else if(num > 1){
    console.log('else if');
}else{
    console.log('else');
}

let num = 9; 
if(num < 1){
    console.log('if');
}else if(num > 1){
    console.log('else if');
}else{
    console.log('else');
}



//// Task 5 - Function Muscle Memory

//Exercise 1
// 1 - 
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
} 
console.log(sayHello('bootcamp prep'));

// 2 -
function sayHello(name) {
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log(sayHello('bootcamp prep')); 

//3 -
function sayHello(name){
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log('bootcamp prep'); 

//4 -
function sayHello(name){
    let msg = 'Hello, ' + name + '. How are you?';
    return msg;
}
console.log('bootcamp prep');

// 5 -
function sayHello(name){
    let msg = 'Hello, ' + name + '. How are you?';
    return msg; 
}
console.log('bootcamp prep');

// 6 -
function sayHello(name){
    let msg = 'Hello, ' + name + '. How are you?';
    return msg; 
}
console.log('bootcamp prep');

// 7 -
function sayHello(name){ 
    let msg = 'Hello, ' + name + '. How are you'; 
    return msg; 
}
console.log('bootcamp prep'); 

// 8 -
function sayHello(name){
    let msg = 'Hello, ' + name + '. How are you'; 
    return msg; 
}
console.log('bootcamp prep');

// 9 -
function sayHello(name){
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log('bootcamp prep'); 

// 10 -
function sayHello(name){
    let msg = 'Hello, ' + name + '. How are you';
    return msg;
}
console.log('bootcampt prep'); 



//Exercise 2

// 1
function checkNumber(num){
    if (num > 0){
        return 'positive'; 
    }else if(num < 0){
        return 'negative';
    }else{
        return 'zero'; 
    }
}
console.log(checkNumber(1));

//2 
function checkNumber(num){
    if(num > 0){
        return 'positive';
    }else if (num < 0){
        return 'negative'; 

    }else{
        return 'zero';
    }
}
console.log(checkNumber(2)); 

//3
function checkNumber(num){
    if(num > 0){
        return 'positive';
    }else if(num < 0){
        return 'negative'
    }else{
        return 'zero';
    }
}
console.log(checkNumber(3));

//4
function checkNumber(num){
    if(num > 0){
        return 'positive';
    }else if(num < 0){
        return 'negative';
    }else{
        return 'zero';
    }
}
console.log(checkNumber(4));

//5
function checkNumber(num){
    if(num > 0){
        return 'positive';
    }else if(num < 0){
        return 'negative';
    }else{
        return 'zero';
    }
}
console.log(checkNumber(5));

//6
function  checkNumber(num){
    if(num > 0){
        return 'positive';
    }else if(num < 0){
        return 'negative';
    }else{
        return 'zero';
    }
}
console.log(checkNumber(6));

//7
function checkNumber(num){
    if( num > 0){
    return 'positive';
}else if(num < 0){
    return 'negative';
}else{
    return 'zero';
    }
}
console.log(checkNumber(7));

//8
function checkNumber(num){
    if(num > 0){
        return 'positive';
    }else if(num < 0){
        return 'negative';
    }else{
        return 'zero';
    }
}
console.log(checkNumber(8));

//9
function checkNumber(num){
    if(num > 0){
        return 'positive';
    }else if(num < 0){
        return 'negative';
    }else{
        return 'zero';
    }
}
console.log(checkNumber(9));

//10
function checkNumber(num){
    if(num > 0){
        return 'positive';
    }else if(num < 0){
        return 'negative';
    }else{
        return 'zero';
    }
}
console.log(checkNumber(10)); 

//Exercise 3 
// 1

function fizzBuzz1(max) {
    for(let i = 0; i < max; i += 1){
        if(i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

// 2

function fizzBuzz2(max) {
    for(let i = 0; i < max; i += 1){
        if( i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

// 3

function fizzBuzz3(max) {
    for(let i = 0; i < max; i += 1){
        if(i % 3 === 0 && i % 5 !== 0 ){
            console.log(i);
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

// 4 
function fizzBuzz4(max){
    for(i = 0; i < max; I += 1){
        if(i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

// 5 
function fizzBuzz5(max){
    for(i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log(i); 
        }
    }
}

// 6

function fizzBuzz6(max) {
    for(i = 0; i < max; i += 1){
        if(i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        }else if( i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

// 7 
function fizzBuzz7(max) {
    for(i = 0; i < max; i += 1){
        if(i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        }else if (i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

// 8

function fizzBuzz8(max){
    for(i = 0; i < max; i += 1){
        if( i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

// 9
function fizzbuzz9(max){
    for(i = 0; i<max; i += 1){
        if(i % 3 === 0 && i % 5 !== 0 ){
            console.log(i); 
        }else if(i % 5 === 0 && i % 3 !== 0){
            console.log(i);
        }
    }
}

// 10

function fizzBuzz10(max){
    for(i = 0; i < max; i += 1){
        if(i % 3 === 0 && i % 5 !== 0){
            console.log(i);
        }else if(i % 5 === 0 && i % 3 !== 0)[
            console.log(i)
        ]
    }
}

//Exercise 4

//1 
function evenCaps(sentence) {
    let newSentence = " ";

    for( let i = 0; i < sentence.length; i++){
        if( i % 2 === 0) {
            let captialChar = char.toUpperCase(); 
            newSentence += captialChar; 
        }else{
            newSentence += char;
        }
    }
    return newSentence; 
}

//2 
function evenCaps(sentence){
    let newSentence = " "; 

    for( let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if(i % 2 === 0) {
            let capitalChar = char.toUpperCase(); 
            newSentence += captialChar;
        }else{
            newSentence += char;
        }
    }

    return newSentence; 
}

//3

function evenCaps(sentence){
    let sentence = " "; 
    
    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i]; 

        if(i % 2 === 0) {
            let capitcalChar = char.toUpperCase();
            newSentence += capitcalChar;
        }else{
            newSentence += char;
        }
    }

    return newSentence;
}

//4

function evenCaps(sentence){
    let sentence = " "; 

    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i]; 

        if(i % 2 === 0){
            let capitalChar = char.toUpperCase();
            newSentence += capitalChar;
        }else{
            newSentence += char;
        }
    }
}

//5
function evenCaps(sentence){
    let sentence = " ";

    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if( i % 2 === 0){
            let capitalChar = char.toUpperCase();
            newSentence += capitalChar;
        }else{
            newSentence += char;
        }
    }
}

//6
function evenCaps(sentence){
    let sentence = " ";

    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if( i % 2 === 0){
            let capitalChar = char.toUpperCase(); 
            newSentence += capitalChar; 

        }else{
            newSentence += char;
        }
    }
}

//7
function evenCaps(sentence){
    for (let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if(i % 2 === 0 ){
            let capitalChar = char.toUpperCase(); 
            newSentence += capitalChar;
        }else{
            newSentence += char;
        }
    }
}

//8
function evenCaps(sentence){
    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if(i % 2 === 0){
            let capitalChar = char.toUpperCase();
            new sentence += capitalChar;
        }else{
            newSentence += char;
        }
    }
}

//9
function evenCaps(sentence){
    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if(i % 2 === 0){
            let capitalChar = char.toUpperCase();
            new sentence += capitalChar; 
        }else{
            newSentence += char;
        }
    }
}

//10
function evenCaps(sentence){
    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];

        if(i % 2 === 0){
            let capitalChar = char.toUpperCase();
            new sentence += capitalChar;
        }else{
            newSentence += char;
        }
    }
}

