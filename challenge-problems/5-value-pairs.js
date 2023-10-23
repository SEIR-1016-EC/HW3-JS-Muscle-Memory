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
//@ts-check
/**
 * @param {object} obj1 
 * @param {object} obj2 
 * @param {string} key 
 */
function valuePair(obj1, obj2, key) {
  // your code here
}
console.log(valuePair({name: 'One', Location: 'Remote', age: 1}, 123, 'key'))

module.exports = valuePair;
