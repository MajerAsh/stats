/** 1️⃣
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/** 2️⃣
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */

function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// The sum of your numbers is 1418.

/** 3️⃣
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let mean = 0;

  for (let i = 0; i < numbers.length; i++) {
    mean += numbers[i] / numbers.length;
  }
  return mean;
}

//The mean of your numbers is 283.6.

/** 4️⃣
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let min = 0;

  for (let i = numbers[0]; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
//The smallest of your numbers is -15.

/** 5️⃣
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
// The largest of your numbers is 975.

/** 6️⃣
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}
// The range of your numbers is 990.

/** 7️⃣
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let evens = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}
//The even numbers you gave are 28,30,400.

/** 8️⃣
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let odds = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1 || numbers[i] % 2 === -1) {
      odds.push(numbers[i]);
    }
  }
  return odds;
}

// The odd numbers you gave are -15,975.

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400",
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);

//ANSWER:
/* 2 class answer:
function getSum(numbers) {
  // todo}
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    count += numbers[i]; // aka count = count + numbers[i];
  }
  return count;
}; // prints: the sum of your numbers is 14somthingsmthng
*/
