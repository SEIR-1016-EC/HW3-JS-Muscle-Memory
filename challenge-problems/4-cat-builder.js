/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

const cat1 = catBuilder('Garfield', 'golden', ['scratching-post', 'yarn']);
cat1; // => { name: 'Garfield', color: 'golden', toys: ['scratching-post', 'yarn'] }

const cat2 = catBuilder('Whiskers', 'rainbow', ['poptarts']);
cat2; // => { name: 'Whiskers', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/
//@ts-check
/**
 * @typedef {Object} Cat
 * @property {string} name 
 * @property {string} color 
 * @property {string[]} toys 
*/
/**
 * @param {Cat['name']} name 
 * @param {Cat['color']} color 
 * @param {Cat['toys']} toys 
 * @returns {Cat} 
 */
function catBuilder(name, color, toys) {
    // your code here
    return {
        name: name,
        color: color,
        toys: toys
    }
}
console.log(catBuilder('garfield','golden',['yarn','post']))

module.exports = catBuilder