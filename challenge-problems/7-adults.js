/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'Khalid Robinson', age: 22},
  {name: 'Ariel Winter', age: 20},
  {name: 'Post Malone', age: 25},
  {name: 'Willow Smith', age: 17}
];

adults(ppl); // => [ 'Khalid Robinson', 'Ariel Winter', 'Post Malone' ]
***********************************************************************/

function adults(people) {
  // your code here
  const adultNames=[];
  for (let person of people) {
    if (person.age>= 18){
      adultNames.push(person.name);
    }
  }
  return adultNames
};
const ppl=[
  {name:"Khalid", age:22},
  {name:"Ariel", age: 20},
  {name:"Post", age: 25},
  {name:"Willow", age:17}
];
console.log(adults(ppl));

module.exports = adults