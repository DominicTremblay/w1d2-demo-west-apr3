// “Use strict”;
// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// what is our input
// Extract the command-line arguments

const getArguments = function () {
  const args = process.argv.slice(2);
  console.log('args:', args);

  // Edge case: we need at least 2 arguments
  if (args.length < 2) {
    console.log('Error: Please enter at least 2 numbers');
    // exit the node script
    process.exit();
  }

  return args;
};

// create a sum function?
// Single Responsibility Principale
// a function should do a single thing

const sum = function (numbers) {
  // iterate through each number
  // loop => for of, for each, c-tyle loop

  // Define a total number so we can keep adding the nb to it

  let total = 0;

  for (let nb of numbers) {
    const convertedNum = Number(nb);
    // add them together
    // Edge case: If any argument is not a number, output an error message.
    if (isNaN(convertedNum)) {
      return 'Error: please enter only numbers';
    }

    // Edge case: If any argument is not a whole number, skip it.
    if (Number.isInteger(convertedNum)) {
      total += convertedNum;
      console.log('nb:', nb, 'Type:', typeof convertedNum);
    }

    // Check if nb is a number
  }

  return total;
  // output the sum
};

// identify if the arguments are numbers

const result = sum(getArguments());

console.log('Result:', result);
