// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let evenCount = 0;

for (let i = 0; i < 20; i++) {
  let enterNumber = prompt("Enter number: ");
  let numberInt = parseFloat(enterNumber);

  if (numberInt % 2 === 0) {
    evenCount++;
  }
}

console.log(`Number of even numbers entered: ${evenCount}`);
