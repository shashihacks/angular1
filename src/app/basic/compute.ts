export function checkPrime(number) {
    if (number < 2)
      return false;
    var isPrime = true;
    for (let i = 2; i < number; i++) {
      if (number % 2 == 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime
  }
  
 export  function computePrimes(first_number, second_number) {
    var start = first_number <= second_number ? first_number : second_number;
    var end = first_number > second_number ? first_number : second_number;
    var primes = [];
  
    for (let i = start; i <= end; i++) {
      if (checkPrime(i)) {
        primes.push(i)
      }
    }
  
    return primes;
  }