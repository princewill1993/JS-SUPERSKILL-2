// QUESTION 1....Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("lagos"));

// QUESTION 2...Count Characters: Create a function that counts the number of characters in a string.

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("destiny"));

// QUESTION 3...Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeTheFirstLetterInSentence(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
console.log(capitalizeTheFirstLetterInSentence("hello my world"));

// QUESTION 4....Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// MAX.
function findMax(array) {
  return Math.max(...array);
}

// MIN.
function findMin(array) {
  return Math.min(...array);
}

console.log(findMin([1, 5, 3, 6, 8, 9]));

// QUESTION 5...Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumOfArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sumOfArray([2, 5, 6, 9, 4, 32, 45]));

// QUESTION 6...Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArr(arr, task) {
  return arr.filter(task);
}

// Filter out even numbers.
const numbers = [2, 5, 6, 9, 4, 32, 45];
const evenNumbers = filterArr(numbers, (num) => num % 2 === 0);

console.log(filterArr([2, 5, 6, 9, 4, 32, 45]));

// QUESTION 7...Factorial: Write a function to calculate the factorial of a given number.
function calcFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return calcFactorial(n - 1);
}

calcFactorial();

//. QUESTION 8...Prime Number Check: Create a function to check if a number is prime or not.
function checkForPrimeNumbers() {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

//. QUESTION 9...Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function generateFinonacci(n) {
    const fibonacci = [0, 1]
    
    while (fibonacci.length < n) {
        const nextTerm = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextTerm);
    }
    return fibonacci.slice(0, n);
}

generateFinonacci();


