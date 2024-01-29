// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

let numberOfInputs = Number(prompt("How many numbers do you wish to input?"));

if (numberOfInputs > 0) {
  let smallest;
  let biggest;

  for (let i = 0; i < numberOfInputs; i++) {
    let currentNumber = Number(prompt(`Enter number #${i + 1}:`));

    if (i === 0) {
      smallest = currentNumber;
      biggest = currentNumber;
    } else {
      smallest = Math.min(smallest, currentNumber);
      biggest = Math.max(biggest, currentNumber);
    }
  }

  console.log(`Smallest number: ${smallest}`);
  console.log(`Biggest number: ${biggest}`);
} else {
  console.log("Invalid input for the number of inputs.");
}
