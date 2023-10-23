/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

const obj1 = {company: 'General Assembly', course: 'Software Engineering Immersive'}
doesKeyExist(obj1, 'company'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/
function doesKeyExist(obj, key) {
  // your code here
  return key in obj;
}
const obj3= {
  company:"general assembly",
  course:"Software Engineering Immersive",
};
console.log(doesKeyExist(obj3,"name"));
console.log(doesKeyExist(obj3,"course"));
module.exports = doesKeyExist;
