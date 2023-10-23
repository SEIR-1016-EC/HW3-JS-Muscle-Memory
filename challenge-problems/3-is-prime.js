/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/

function isPrime(number) {
  // your code here
  if (number <= 1) {
    return false
  }
  let isPrime = true
  for (i = 2; i < number; i++) {
    console.log(i)
    if (number % i === 0) {
      return isPrime = false
    }
  }
  return isPrime
}

console.log(isPrime(1))
module.exports = isPrime
