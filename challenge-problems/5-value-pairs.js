/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

valuePair(object1, object2, 'location'); // => [ 'Remote', 'San Francisco' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // your code here
  let object1 = obj1;
  let object2 = obj2;
  let objKey = key;
  let obj1Value;
  let obj2Value;
    for(let objKey in obj1) {
      obj1Value = obj1[key];
    }
    for(let objKkey in obj2) {
      obj2Value = obj2[key];
    }
    return [obj1Value, obj2Value];
}
const object1 = {name: 'One', location: 'Remote', age: 1};
const object2 = {name: 'Two', location: 'San Francisco'};

// console.log(valuePair(object1, object2, 'location'));
// console.log(valuePair(object1, object2, 'name'));
module.exports = valuePair;
