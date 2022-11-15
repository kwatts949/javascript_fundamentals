const fizzBuzz = (number) => {
  if (number % 15 === 0) {
    return 'FizzBuzz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else if (number % 3 == 0) {
    return 'Fizz';
  } else {
    return number;
  }
}

const fizzbuzzUntil = (number) => {
  for (let i = 0; i <= number; i++) {
  console.log(fizzBuzz(i))
  }
}