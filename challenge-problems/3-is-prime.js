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
  if (number < 0 ||
    isNaN(parseInt(number)) ||
    (number + 'i').includes('.')) {
      return false
    }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false
  }
  return true
}

module.exports = isPrime;
