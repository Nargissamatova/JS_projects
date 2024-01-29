// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let numbersGroup = "";
let sum = 0;
let average = 0;
let count = 0;

while (true) {
  let input = prompt("Enter a number");
  let inputNum = parseFloat(input);

  if (inputNum === 0) {
    break;
  }

  sum += inputNum;
  count++;

  numbersGroup += inputNum + " ";
}

average = count === 0 ? 0 : sum / count;
console.log(`Group of numbers: ${numbersGroup.trim()}`);
console.log(`Average of entered numbers: ${average}`);

/* 
do{
  let input = Number(prompt('enetr a number'))
  sum += input;
  counter++
} while (counter !== 5);
*/
